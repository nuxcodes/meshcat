import React, { VFC, Suspense, ReactHTMLElement } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, TorusKnot } from '@react-three/drei';
import { IoIosClose } from 'react-icons/io/';
import { cn } from '@/utils/classnames';

export interface EnvironmentPreviewProps
  extends React.HTMLAttributes<HTMLDivElement> {
  url: string | null;
  selected: boolean;
}

const EnvironmentPreview: VFC<EnvironmentPreviewProps> = ({
  url,
  selected,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        selected
          ? 'ring-4  ring-berry hover:ring-berry-700'
          : 'hover:ring-4  hover:ring-gray-200',
        'overflow-hidden rounded',
      )}
    >
      <div className="relative h-full rounded">
        {url ? (
          <>
            <Canvas>
              <Suspense fallback={null}>
                <OrbitControls enableZoom={false} enablePan={false} />
                <Environment
                  // @ts-ignore
                  files={url}
                  path=""
                  background={true}
                />
              </Suspense>
              <TorusKnot>
                <meshStandardMaterial metalness={1} roughness={0} />
              </TorusKnot>
            </Canvas>
            <div className="pointer-events-none absolute inset-1 flex flex-col items-center justify-end">
              <div className="text-xxs rounded bg-white p-0.5 shadow">
                {url ?? 'None'}
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-gray-100">
            <IoIosClose size="3em" />
          </div>
        )}
      </div>
    </div>
  );
};

export default EnvironmentPreview;
