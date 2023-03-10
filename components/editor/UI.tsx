import React, { VFC } from 'react';
import TransformControlsModeSelect from './TransformControlsModeSelect';
import { useEditorStore } from './store';
import shallow from 'zustand/shallow';
import ReferenceWindow from './ReferenceWindow';
import { saveAs } from 'file-saver';
import { Vector3 } from 'three';
import { RiFocus3Line } from 'react-icons/ri/';
import { GiPocketBow } from 'react-icons/gi/';
import { AiFillEye } from 'react-icons/ai/';
import TransformControlsSpaceSelect from './TransformControlsSpaceSelect';
import ViewportShadingSelect from './ViewportShadingSelect';
import SceneOutlinePanel from './SceneOutlinePanel';
import PropertiesPanel from './PropertiesPanel';
import ViewportSettings from './ViewportSettings';
import Button from '../ui/Button';
import Tooltip from '../ui/Tooltip';
import { FiChevronDown } from 'react-icons/fi';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/DropdownMenu';

const UI: VFC = () => {
  const [
    transformControlsMode,
    transformControlsSpace,
    viewportShading,
    setTransformControlsMode,
    setTransformControlsSpace,
    setViewportShading,
    setEditorOpen,
    setEditableTransform,
  ] = useEditorStore(
    (state) => [
      state.transformControlsMode,
      state.transformControlsSpace,
      state.viewportShading,
      state.setTransformControlsMode,
      state.setTransformControlsSpace,
      state.setViewportShading,
      state.setEditorOpen,
      state.setEditableTransform,
    ],
    shallow,
  );

  return (
    <div className="pointer-events-none absolute inset-0 z-50">
      <div className="flex h-full">
        <div className="relative m-5 flex-1">
          <div className="flex items-start justify-between">
            <div className="flex gap-4">
              <div className="pointer-events-auto">
                <TransformControlsModeSelect
                  value={transformControlsMode}
                  onChange={(value) => setTransformControlsMode(value)}
                />
              </div>
              <div className="pointer-events-auto">
                <TransformControlsSpaceSelect
                  value={transformControlsSpace}
                  onChange={setTransformControlsSpace}
                />
              </div>
              <div className="pointer-events-auto">
                <ViewportShadingSelect
                  value={viewportShading}
                  onChange={setViewportShading}
                />
              </div>
              <div className="pointer-events-auto">
                <Tooltip
                  label="Focus on selected"
                  icon={<RiFocus3Line />}
                  onClick={() => {
                    const orbitControls =
                      useEditorStore.getState().orbitControlsRef?.current;
                    const selected = useEditorStore.getState().selected;
                    let focusObject;

                    if (selected) {
                      focusObject =
                        useEditorStore.getState().editablesSnapshot![selected]
                          .proxyObject;
                    }

                    if (orbitControls && focusObject) {
                      focusObject.getWorldPosition(
                        orbitControls.target as Vector3,
                      );
                    }
                  }}
                />
              </div>
              <div className="pointer-events-auto">
                <Tooltip
                  label="Align object to view"
                  icon={<GiPocketBow />}
                  onClick={() => {
                    const camera =
                      useEditorStore.getState().orbitControlsRef?.current
                        ?.object;
                    const selected = useEditorStore.getState().selected;

                    let proxyObject;

                    if (selected) {
                      proxyObject =
                        useEditorStore.getState().editablesSnapshot![selected]
                          .proxyObject;

                      if (proxyObject && camera) {
                        const direction = new Vector3();
                        const position = camera.position.clone();

                        camera.getWorldDirection(direction);
                        proxyObject.position.set(0, 0, 0);
                        proxyObject.lookAt(direction);

                        proxyObject.parent!.worldToLocal(position);
                        proxyObject.position.copy(position);

                        proxyObject.updateMatrix();

                        setEditableTransform(
                          selected,
                          proxyObject.matrix.clone(),
                        );
                      }
                    }
                  }}
                />
              </div>
              <div className="pointer-events-auto">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Tooltip
                      icon={
                        <div className="flex items-center gap-2">
                          <AiFillEye />
                          <FiChevronDown />
                        </div>
                      }
                      label="Viewport settings"
                      onClick={() => {}}
                    ></Tooltip>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <ViewportSettings></ViewportSettings>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            {/* <div className="absolute right-0 top-0 -z-10">
              <ReferenceWindow height={120} />
            </div> */}
          </div>
        </div>
        <div className="pointer-events-auto w-min">
          <SceneOutlinePanel />
        </div>
        {/* <div className="pointer-events-auto w-min">
          <PropertiesPanel />
        </div> */}
      </div>
    </div>
  );
};

export default UI;
