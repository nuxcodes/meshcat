import React, { FC, ReactElement, VFC } from 'react';
import { EditableType, useEditorStore } from './store';
import shallow from 'zustand/shallow';
import { saveAs } from 'file-saver';
import { IconType } from 'react-icons';
import { BsFillCollectionFill, BsCameraVideoFill } from 'react-icons/bs/';
import { BiChevronDown, BiSun } from 'react-icons/bi/';
import { GiCube, GiLightBulb, GiLightProjector } from 'react-icons/gi/';
import { ButtonProps } from '@ui/Button';
import Button from '@ui/Button';
import * as Accordion from '@radix-ui/react-accordion';
import PropertiesPanel from './PropertiesPanel';

interface ObjectIconProps extends ButtonProps {
  editableType: EditableType;
  size?: number;
}

const ObjectIcon: FC<ObjectIconProps> = ({
  editableType,
  size = 22,
  ...props
}) => {
  let icon: ReactElement<IconType>;
  switch (editableType) {
    case 'group':
      icon = <BsFillCollectionFill size={size} />;
      break;
    case 'mesh':
      icon = <GiCube size={size} />;
      break;
    case 'pointLight':
      icon = <GiLightBulb size={size} />;
      break;
    case 'spotLight':
      icon = <GiLightProjector size={size} />;
      break;
    case 'directionalLight':
      icon = <BiSun size={size} />;
      break;
    case 'perspectiveCamera':
    case 'orthographicCamera':
      icon = <BsCameraVideoFill size={size} />;
  }

  return icon;
};

const SceneOutlinePanel: VFC = () => {
  const [editablesSnapshot, createSnapshot, setModel, selected, setSelected] =
    useEditorStore(
      (state) => [
        state.editablesSnapshot,
        state.createSnapshot,
        state.setModel,
        state.selected,
        state.setSelected,
      ],
      shallow,
    );

  if (editablesSnapshot === null) {
    return null;
  }

  const sectionHeading = (text: string) => {
    return (
      <h1 className="flex items-start p-5 text-xl text-berry-900">{text}</h1>
    );
  };

  return (
    <div className="flex h-full w-80 flex-col overflow-y-auto border-r bg-white shadow-md">
      {sectionHeading('Background')}
      <div className="flex items-start p-5">
        <Button
          intent="primary"
          onClick={() => {
            setModel(true);
          }}
        >
          LOAD BACKGROUND
        </Button>
      </div>
      {sectionHeading('Outline')}
      <div
        // @ts-ignore
        className="flex flex-1 flex-col gap-3"
      >
        <PropertiesPanel></PropertiesPanel>
        <Accordion.Root type="single" collapsible>
          {Object.entries(editablesSnapshot).map(
            ([name, editable]) =>
              editable.role === 'active' && (
                <Accordion.Item
                  value={name}
                  key={name}
                  className="w-full overflow-hidden"
                >
                  <Accordion.Header className="">
                    <Accordion.Trigger className="group flex w-full items-center justify-between border-t-2 border-gray-200 px-5 py-3 hover:bg-slate-50 data-[state=open]:bg-berry-500 data-[state=open]:text-white">
                      <div className="flex items-center gap-3">
                        <ObjectIcon editableType={editable.type}></ObjectIcon>
                        <span className="text-sm font-semibold">
                          {name.toUpperCase()}
                        </span>
                      </div>
                      <BiChevronDown
                        size={24}
                        className="flex transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180"
                      ></BiChevronDown>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="flex flex-col bg-slate-200 p-4">
                      <div className="flex items-start">
                        <Button intent="primary">ADD NEW OBJECT</Button>
                      </div>
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
                // <ObjectButton
                //   key={name}
                //   objectName={name}
                //   editableType={editable.type}
                //   selected={selected}
                //   onClick={() => {
                //     setSelected(name);
                //   }}
                // />
              ),
          )}
        </Accordion.Root>
        {sectionHeading('Export')}
        <div className="flex items-center px-5">
          <Button
            intent="primary"
            onClick={() => {
              const blob = new Blob(
                [JSON.stringify(useEditorStore.getState().serialize())],
                { type: 'text/json;charset=utf-8' },
              );
              saveAs(blob, 'editableState.json');
            }}
          >
            EXPORT TO JSON
          </Button>
        </div>
        {/* {Object.entries(editablesSnapshot).map(
          ([name, editable]) =>
            editable.role === 'active' && (
              <ObjectButton
                key={name}
                objectName={name}
                editableType={editable.type}
                selected={selected}
                onClick={() => {
                  setSelected(name);
                }}
              />
            ),
        )} */}
      </div>
      <div className="flex-0 mt-3 mb-10">
        <Button
          className="w-full"
          onClick={() => {
            createSnapshot();
          }}
        >
          Sync editor
        </Button>
      </div>
    </div>
  );
};

export default SceneOutlinePanel;
