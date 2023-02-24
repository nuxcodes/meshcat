import React, { VFC } from 'react';
import { useEditorStore } from './store';
import shallow from 'zustand/shallow';

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
      <h1 className="mb-3 text-xl">Environment</h1>
      <div className="flex flex-col gap-3">
        {/* <div className="grid grid-cols-2 gap-4 auto-rows-16">
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
        </div> */}
        {/* <FormControl>
          <Checkbox
            checked={useHdrAsBackground}
            onChange={() => setUseHdrAsBackground(!useHdrAsBackground)}
          >
            Use as background
          </Checkbox>
        </FormControl> */}
      </div>
    </div>
  );
};

export default ViewportShadingSettings;
