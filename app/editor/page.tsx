'use client';

import type { FC } from 'react';
import e from '@/components/editor/editable';
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  VFC,
  Suspense,
} from 'react';
import { Canvas, useThree } from '@react-three/fiber';
import { useEditorStore } from '@/components/editor/store';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib';
import shallow from 'zustand/shallow';
// import styles from '../styles.css';
import ProxyManager from '@/components/editor/ProxyManager';
import Button from '@ui/Button';
import ReactShadowRoot from 'react-shadow-root';
import editableState from './editableState.json';
import { configure } from '@/components/editor/store';
import Editor, { EditorScene } from '@/components/editor/Editor';
import UI from '@/components/editor/UI';

const bind = configure({
  // Enables persistence in development so your edits aren't discarded when you close the browser window
  enablePersistence: true,
  // Useful if you use r3e in multiple projects
  localStorageNamespace: 'Example',
});

interface PageProps {}

const Page: FC<PageProps> = ({}) => {
  return (
    <div className="h-screen w-screen">
      <Canvas onCreated={bind({ state: editableState })}>
        <ambientLight intensity={0.5} />
        {/* Mark objects as editable. */}
        {/* Properties in the code are used as initial values and reset points in the editor. */}
        <e.spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          uniqueName="Spotlight"
        />
        <e.pointLight uniqueName="PointLight" />
        <e.mesh uniqueName="Box">
          <boxBufferGeometry />
          <meshStandardMaterial color="orange" />
        </e.mesh>
        <Editor></Editor>
      </Canvas>
    </div>
  );
};
export default Page;
