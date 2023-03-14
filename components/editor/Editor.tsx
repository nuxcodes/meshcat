import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  FC,
  Suspense,
} from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useEditorStore } from './store';
import { useEvent } from 'react-use/';
import {
  OrbitControls,
  Environment,
  Html,
  PointerLockControls,
  FlyControls,
} from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import shallow from 'zustand/shallow';
// import styles from '../styles.css';
import UI from './UI';
import ProxyManager from './ProxyManager';
import Button from '../ui/Button';
import ReactShadowRoot from 'react-shadow-root';
import { render } from 'react-dom';
import * as THREE from 'three';
import { is } from 'immer/dist/internal';
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

  // const renderer = new THREE.WebGLRenderer();
  const keyPressed = useRef({});

  const handleKeyDown = (e) => {
    console.log(keyPressed);
    if (!keyPressed[e.key]) {
      keyPressed[e.key] = new Date().getTime();
    }
  };

  const handleKeyUp = (e) => {
    delete keyPressed[e.key];
  };

  useEvent('keydown', handleKeyDown);
  useEvent('keyup', handleKeyUp);

  useEffect(() => {
    setOrbitControlsRef(orbitControlsRef);
  }, [camera, setOrbitControlsRef]);

  useFrame((_, delta) => {
    let pos = camera.position;
    let t = new THREE.Vector3(0, 0, 0);
    if (orbitControlsRef.current) {
      t = orbitControlsRef.current.target;
    }
    pos = t.clone().sub(pos);
    const updateOrbit = () => {
      if (orbitControlsRef.current)
        orbitControlsRef.current.target = camera.position.clone().add(pos);
    };

    // move camera according to key pressed
    Object.entries(keyPressed).forEach((e) => {
      const [key, start] = e;
      const duration = new Date().getTime() - start;

      // increase momentum if key pressed longer
      let momentum = Math.sqrt(duration + 200) * 0.01 + 0.05;

      // adjust for actual time passed
      momentum = (momentum * delta) / 0.016;

      // increase momentum if camera higher
      // momentum = momentum + camera.position.z * 0.02;

      switch (key) {
        case 'w':
          camera.translateZ(-momentum);
          updateOrbit();
          break;
        case 's':
          camera.translateZ(momentum);
          updateOrbit();
          break;
        case 'd':
          camera.translateX(momentum);
          updateOrbit();
          break;
        case 'a':
          camera.translateX(-momentum);
          updateOrbit();
          break;
        case 'q':
          camera.translateY(momentum);
          updateOrbit();
          break;
        case 'e':
          camera.translateY(-momentum);
          updateOrbit();
          break;
        default:
      }
    });
  });

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

      {true && (
        <OrbitControls
          ref={orbitControlsRef}
          panSpeed={0.1}
          zoomSpeed={0.1}
          // listenToKeyEvents={window as any}
        />
      )}
      <ProxyManager orbitControlsRef={orbitControlsRef} />
    </>
  );
};

const Editor: FC = () => {
  const [
    sceneSnapshot,
    editorOpen,
    initialState,
    setEditorOpen,
    setSelected,
    isPersistedStateDifferentThanInitial,
    applyPersistedState,
  ] = useEditorStore(
    (state) => [
      state.sceneSnapshot,
      state.editorOpen,
      state.initialState,
      state.setEditorOpen,
      state.setSelected,
      state.isPersistedStateDifferentThanInitial,
      state.applyPersistedState,
    ],
    shallow,
  );

  const [stateMismatch, setStateMismatch] = useState(false);
  let glV: THREE.WebGLRenderer | null = null;

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
        <div className={`fixed ${editorOpen ? 'block' : 'hidden'} inset-0`}>
          {sceneSnapshot ? (
            <>
              <div className="z-100 relative h-screen w-screen">
                <Canvas
                  camera={{ position: [5, 5, 5] }}
                  dpr={window.devicePixelRatio}
                  onPointerMissed={() => setSelected(null)}
                >
                  <EditorScene />
                </Canvas>
              </div>

              <UI />
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <h1>Loading Editor...</h1>
            </div>
          )}
        </div>
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
