import React, { VFC } from 'react';
import { useEditorStore } from './store';
import shallow from 'zustand/shallow';
import EnvironmentPreview from './EnvironmentPreview';
import Checkbox from '../ui/Checkbox';

const ViewportShadingSettings: VFC = () => {
  const [
    hdrPaths,
    selectedHdr,
    useHdrAsBackground,
    setSelectedHdr,
    setUseHdrAsBackground,
  ] = useEditorStore(
    (state) => [
      state.hdrPaths,
      state.selectedHdr,
      state.useHdrAsBackground,
      state.setSelectedHdr,
      state.setUseHdrAsBackground,
    ],
    shallow,
  );

  return (
    <div className="w-full">
      <div className="flex flex-col gap-4">
        <h1 className="font-body text-lg">Environment</h1>
        <div className="auto-rows-16 grid grid-cols-2 gap-4">
          <EnvironmentPreview
            url={null}
            selected={selectedHdr === null}
            onClick={() => {
              setSelectedHdr(null);
            }}
          />
          {hdrPaths.map((hdrPath) => (
            <EnvironmentPreview
              key={hdrPath}
              url={hdrPath}
              selected={hdrPath === selectedHdr}
              onClick={() => {
                setSelectedHdr(hdrPath);
              }}
            />
          ))}
        </div>
        <Checkbox
          value={useHdrAsBackground}
          label={'Use as Background'}
          onCheckedChange={setUseHdrAsBackground}
        ></Checkbox>
      </div>
    </div>
  );
};

export default ViewportShadingSettings;
