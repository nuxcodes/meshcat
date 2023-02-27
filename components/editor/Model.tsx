'use client';

import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import type { FC } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps {
  path: string;
}

const Model: FC<ModelProps> = ({ path }) => {
  const model = useLoader(GLTFLoader, path);
  return (
    <primitive
      object={model.scene}
      rotation={[Math.PI / 2, Math.PI, 0]}
      scale={5}
    ></primitive>
  );
};
export default Model;
