import React, { VFC } from 'react';
import { GiMove, GiResize, GiClockwiseRotation } from 'react-icons/gi/';
import { TransformControlsMode } from './store';
import TooltipToggleGroup from '../ui/TooltipToggleGroup';

export interface TransformControlsModeSelectProps {
  value: TransformControlsMode;
  onChange: (value: TransformControlsMode) => void;
}

const TransformControlsModeSelect: VFC<TransformControlsModeSelectProps> = ({
  value,
  onChange,
}) => (
  <TooltipToggleGroup
    value={value}
    onChange={onChange as (value: string) => void}
    options={[
      {
        option: 'translate',
        label: 'Tool: Translate',
        icon: <GiMove />,
      },
      {
        option: 'rotate',
        label: 'Tool: Rotate',
        icon: <GiClockwiseRotation />,
      },
      {
        option: 'scale',
        label: 'Tool: Scale',
        icon: <GiResize />,
      },
    ]}
  />
);

export default TransformControlsModeSelect;
