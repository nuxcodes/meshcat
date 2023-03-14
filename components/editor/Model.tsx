'use client';

import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { FC, useEffect } from 'react';
import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import shallow from 'zustand/shallow';
import { useEditorStore } from './store';

interface ModelProps {
  path: string;
}

const Model: FC<ModelProps> = ({ path }) => {
  const model = useLoader(
    GLTFLoader,
    path,
    //   (loader) => {
    //   const dracoLoader = new DRACOLoader();
    //   dracoLoader.setDecoderPath(
    //     'https://www.gstatic.com/draco/versioned/decoders/1.5.6/',
    //   );
    //   loader.setDRACOLoader(dracoLoader);
    // }
  );
  const [createSnapshot] = useEditorStore(
    (state) => [state.createSnapshot],
    shallow,
  );

  useEffect(() => {
    createSnapshot();
  }, []);
  return (
    <primitive
      object={model.scene}
      rotation={[Math.PI / 2, Math.PI, 0]}
      scale={5}
    ></primitive>
  );
};
export default Model;
