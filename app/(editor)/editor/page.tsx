'use client';

import type { FC } from 'react';
import e from '@/components/editor/editable';
import React, { useRef, useState, VFC, Suspense } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { EditableState, useEditorStore } from '@/components/editor/store';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import shallow from 'zustand/shallow';
// import styles from '../styles.css';
import ProxyManager from '@/components/editor/ProxyManager';
import Button from '@ui/Button';
import root from 'react-shadow';
import editableState from './editableState.json';
import { configure } from '@/components/editor/store';
import Editor, { EditorScene } from '@/components/editor/Editor';
import UI from '@/components/editor/UI';
import { json } from 'stream/consumers';
import Model from '@/components/editor/Model';

const bind = configure({
  // Enables persistence in development so your edits aren't discarded when you close the browser window
  enablePersistence: true,
  // Useful if you use r3e in multiple projects
  localStorageNamespace: 'Example',
});

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  const [isSecond, setisSecond] = useState(false);
  const [model, createSnapshot, setSelectedHdr, setUseHdrAsBackground] =
    useEditorStore(
      (state) => [
        state.model,
        state.createSnapshot,
        state.setSelectedHdr,
        state.setUseHdrAsBackground,
      ],
      shallow,
    );
  editableState.editables['Boxxx'] = {
    type: 'mesh',
    properties: {
      transform: [
        0.20235074844803824, -0.8280549212892445, -0.522856789122205, 0,
        0.7065838259979393, -0.2462276634608147, 0.6634087989955679, 0,
        -0.6780807263450516, -0.5036834175107328, 0.5352658624310691, 0,
        0.3062128152092085, -0.40467146375822205, -0.24668883083957094, 1,
      ],
    },
  };
  console.log(editableState);
  return (
    <div className="relative h-screen w-screen">
      <Canvas
        onCreated={bind({ state: editableState as EditableState })}
        className="invisible"
      >
        <Suspense fallback={null}>
          <Environment files="equi.hdr" path="/" />
        </Suspense>
        <ambientLight intensity={0.9} />
        {/* Mark objects as editable. */}
        {/* Properties in the code are used as initial values and reset points in the editor. */}
        <e.spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          uniqueName="Spotlight"
        />
        {!!model && <Model path="/models/commercial_workspace.glb"></Model>}
        <e.pointLight uniqueName="PointLight" />
        <e.mesh uniqueName="Box">
          <boxBufferGeometry />
          <meshStandardMaterial color="orange" />
        </e.mesh>
        {!!isSecond && (
          <e.mesh uniqueName="Boxxx">
            <boxBufferGeometry />
            <meshStandardMaterial color="orange" />
          </e.mesh>
        )}{' '}
      </Canvas>
      <div className="z-10">
        <Editor></Editor>
      </div>
    </div>
  );
};
export default Page;
