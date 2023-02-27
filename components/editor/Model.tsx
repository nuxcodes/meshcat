'use client';

import { useGLTF } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import type { FC } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps {
  path: string;
}

const Model: FC<ModelProps> = ({ path }) => {
  const model = useLoader(GLTFLoader, path);
  return <primitive object={model.scene} scale={2}></primitive>;
};
export default Model;
