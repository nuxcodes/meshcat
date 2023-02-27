import React, { ReactElement, VFC } from 'react';
import { EditableType, useEditorStore } from './store';
import shallow from 'zustand/shallow';
import { IconType } from 'react-icons';
import { BsFillCollectionFill, BsCameraVideoFill } from 'react-icons/bs/';
import { BiSun } from 'react-icons/bi/';
import { GiCube, GiLightBulb, GiLightProjector } from 'react-icons/gi/';
import { ButtonProps } from '@ui/Button';
import Button from '@ui/Button';

interface ObjectButtonProps extends ButtonProps {
  objectName: string;
  editableType: EditableType;
  selected: string | null;
}

const ObjectButton: VFC<ObjectButtonProps> = ({
  objectName,
  editableType,
  selected,
  ...props
}) => {
  let icon: ReactElement<IconType>;
  switch (editableType) {
    case 'group':
      icon = <BsFillCollectionFill />;
      break;
    case 'mesh':
      icon = <GiCube />;
      break;
    case 'pointLight':
      icon = <GiLightBulb />;
      break;
    case 'spotLight':
      icon = <GiLightProjector />;
      break;
    case 'directionalLight':
      icon = <BiSun />;
      break;
    case 'perspectiveCamera':
    case 'orthographicCamera':
      icon = <BsCameraVideoFill />;
  }

  return (
    <Button
      className={`inline-flex items-center justify-start rounded-md px-4 py-2 font-medium focus:outline-none focus:ring focus:ring-blue-300 ${
        objectName === selected
          ? 'bg-green-800 text-white hover:bg-green-900'
          : 'text-gray-700 hover:bg-gray-200'
      }`}
      {...props}
    >
      <span className="mr-2">{icon}</span>
      {objectName}
    </Button>
  );
};

const SceneOutlinePanel: VFC = () => {
  const [editablesSnapshot, createSnapshot, selected, setSelected] =
    useEditorStore(
      (state) => [
        state.editablesSnapshot,
        state.createSnapshot,
        state.selected,
        state.setSelected,
      ],
      shallow,
    );

  if (editablesSnapshot === null) {
    return null;
  }

  return (
    <div className="flex h-full w-80 flex-col overflow-y-auto border-r bg-white p-5">
      <h1 className="mb-5 ml-3 text-3xl">Outline</h1>
      <div
        // @ts-ignore
        className="flex flex-1 flex-col gap-3"
      >
        {Object.entries(editablesSnapshot).map(
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
        )}
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
