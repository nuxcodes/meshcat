import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  VFC,
  Suspense,
} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useEditorStore } from './store';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import shallow from 'zustand/shallow';
// import styles from '../styles.css';
import UI from './UI';
import ProxyManager from './ProxyManager';
import Button from '../ui/Button';
import ReactShadowRoot from 'react-shadow-root';
export const EditorScene = () => {
  const orbitControlsRef = useRef<OrbitControlsImpl>(null);
  const { camera } = useThree();

  const [
    selectedHdr,
    useHdrAsBackground,
    showGrid,
    showAxes,
    setOrbitControlsRef,
  ] = useEditorStore(
    (state) => [
      state.selectedHdr,
      state.useHdrAsBackground,
      state.showGrid,
      state.showAxes,
      state.setOrbitControlsRef,
    ],
    shallow,
  );

  useEffect(() => {
    setOrbitControlsRef(orbitControlsRef);
  }, [camera, setOrbitControlsRef]);

  return (
    <>
      <Suspense fallback={null}>
        {selectedHdr && (
          <Environment
            // @ts-ignore
            files={selectedHdr}
            path=""
            background={useHdrAsBackground}
          />
        )}
      </Suspense>
      {showGrid && <gridHelper args={[1000, 1000, 0x444444, 0x888888]} />}
      {showAxes && <axesHelper args={[500]} />}
      <OrbitControls ref={orbitControlsRef} />
      <ProxyManager orbitControlsRef={orbitControlsRef} />
    </>
  );
};

const Editor: VFC = () => {
  const [
    sceneSnapshot,
    editorOpen,
    initialState,
    setEditorOpen,
    setSelected,
    createSnapshot,
    isPersistedStateDifferentThanInitial,
    applyPersistedState,
  ] = useEditorStore(
    (state) => [
      state.sceneSnapshot,
      state.editorOpen,
      state.initialState,
      state.setEditorOpen,
      state.setSelected,
      state.createSnapshot,
      state.isPersistedStateDifferentThanInitial,
      state.applyPersistedState,
    ],
    shallow,
  );

  const [stateMismatch, setStateMismatch] = useState(false);

  useLayoutEffect(() => {
    if (initialState) {
      setStateMismatch(isPersistedStateDifferentThanInitial());
    } else {
      applyPersistedState();
    }
  }, [applyPersistedState, initialState, isPersistedStateDifferentThanInitial]);

  return (
    <div id="react-three-editable-editor-root">
      <div className="relative z-50 h-screen w-screen ">
        <div
          className={`fixed ${
            editorOpen ? 'block' : 'hidden'
          } inset-0 translate-y-10`}
        >
          {true ? (
            <>
              <div className="relative z-0 h-screen w-screen">
                <Canvas
                  camera={{ position: [20, 20, 20] }}
                  onCreated={({ gl }) => {
                    gl.setClearColor('white');
                  }}
                  dpr={window.devicePixelRatio}
                  onPointerMissed={() => setSelected(null)}
                >
                  <EditorScene />
                </Canvas>
              </div>

              <UI />
            </>
          ) : (
            <div className="flex h-screen items-center justify-center bg-white">
              <div className="flex flex-col items-center gap-5 ">
                <h1 className="mb-4 text-2xl">No canvas connected</h1>
                <div>to connect a canvas to React Three Editable.</div>

                <div>
                  For more details, please consult the{' '}
                  <a
                    className="rounded-md font-medium text-green-600 hover:text-green-500"
                    href="https://github.com/AndrewPrifer/react-three-editable"
                    rel="noreferrer"
                    target="_blank"
                  >
                    documentation
                  </a>
                  .
                </div>
                <Button
                  className=""
                  onClick={() => {
                    setEditorOpen(false);
                  }}
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
        {editorOpen || (
          <Button
            className="fixed bottom-5 left-5"
            onClick={() => {
              // if (!sceneSnapshot) {
              //   createSnapshot();
              // }
              if (!sceneSnapshot) {
                createSnapshot();
              }
              setEditorOpen(true);
            }}
          >
            Editor
          </Button>
        )}
      </div>
      {/* <Modal visible={stateMismatch}>
            <ModalHeader>Saved state found</ModalHeader>
            <ModalBody>
              Would you like to use initial state or saved state?
            </ModalBody>
            <ModalFooter>
              <Button
                className="flex-1"
                onClick={() => {
                  applyPersistedState();
                  setStateMismatch(false);
                }}
              >
                Saved
              </Button>
              <Button
                className="flex-1"
                onClick={() => {
                  setStateMismatch(false);
                }}
              >
                Initial
              </Button>
            </ModalFooter>
          </Modal> */}
    </div>
  );
};

export default Editor;
