import React, { VFC } from 'react';
import { useEditorStore } from './store';
import shallow from 'zustand/shallow';
import Checkbox from '../ui/Checkbox';
import { DropdownMenuItem } from '../ui/DropdownMenu';

const ViewportSettings: VFC = () => {
  const [
    showOverlayIcons,
    showGrid,
    showAxes,
    setShowOverlayIcons,
    setShowGrid,
    setShowAxes,
  ] = useEditorStore(
    (state) => [
      state.showOverlayIcons,
      state.showGrid,
      state.showAxes,
      state.setShowOverlayIcons,
      state.setShowGrid,
      state.setShowAxes,
    ],
    shallow,
  );

  return (
    <>
      <DropdownMenuItem>
        <form>
          <Checkbox
            // @ts-ignore
            label="Show overlay icons"
            value={showOverlayIcons}
            onCheckedChange={() => setShowOverlayIcons(!showOverlayIcons)}
          />
        </form>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <form>
          <Checkbox
            // @ts-ignore
            value={showGrid}
            onCheckedChange={() => setShowGrid(!showGrid)}
            label="Show grid"
          />
        </form>
      </DropdownMenuItem>
      <DropdownMenuItem>
        <form>
          <Checkbox
            // @ts-ignore
            value={showAxes}
            onCheckedChange={() => setShowAxes(!showAxes)}
            label="Show axes"
          />
        </form>
      </DropdownMenuItem>
    </>
  );
};

export default ViewportSettings;
