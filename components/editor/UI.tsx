import React, { VFC } from 'react';
import TransformControlsModeSelect from './TransformControlsModeSelect';
import { useEditorStore } from './store';
import shallow from 'zustand/shallow';
import ReferenceWindow from './ReferenceWindow';
import { saveAs } from 'file-saver';
import { Vector3 } from 'three';
import { RiFocus3Line } from '@react-icons/all-files/ri/RiFocus3Line';
import { GiPocketBow } from '@react-icons/all-files/gi/GiPocketBow';
import { AiFillEye } from '@react-icons/all-files/ai/AiFillEye';
import TransformControlsSpaceSelect from './TransformControlsSpaceSelect';
import ViewportShadingSelect from './ViewportShadingSelect';
import SceneOutlinePanel from './SceneOutlinePanel';
import PropertiesPanel from './PropertiesPanel';
import ViewportSettings from './ViewportSettings';
import Button from '../ui/Button';

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
        <div className="pointer-events-auto w-min">
          <SceneOutlinePanel />
        </div>
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
                <Button
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
                >
                  {' '}
                  Focus on selected
                </Button>
              </div>
              <div className="pointer-events-auto">
                <Button
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
                >
                  Align object to view
                </Button>
              </div>
              <div className="pointer-events-auto">
                <Button>
                  <ViewportSettings />
                </Button>
              </div>
            </div>
            <div className="absolute right-0 top-0 -z-10">
              <ReferenceWindow height={120} />
            </div>
          </div>

          {/* Bottom-left corner*/}
          <Button
            className="pointer-events-auto absolute left-0 bottom-0"
            onClick={() => setEditorOpen(false)}
          >
            Close
          </Button>

          {/* Bottom-right corner */}
          <Button
            className="pointer-events-auto absolute right-0 bottom-0"
            onClick={() => {
              const blob = new Blob(
                [JSON.stringify(useEditorStore.getState().serialize())],
                { type: 'text/json;charset=utf-8' },
              );
              saveAs(blob, 'editableState.json');
            }}
          >
            Save
          </Button>
        </div>
        <div className="pointer-events-auto w-min">
          <PropertiesPanel />
        </div>
      </div>
    </div>
  );
};

export default UI;
