import React, { VFC } from 'react';
import { TransformControlsSpace } from './store';
import { BiGlobe, BiCube } from 'react-icons/bi/';
import TooltipToggleGroup from '../ui/TooltipToggleGroup';

export interface TransformControlsSpaceSelectProps {
  value: TransformControlsSpace;
  onChange: (value: TransformControlsSpace) => void;
}

const TransformControlsSpaceSelect: VFC<TransformControlsSpaceSelectProps> = ({
  value,
  onChange,
}) => (
  <TooltipToggleGroup
    value={value}
    onChange={onChange as (value: string) => void}
    options={[
      {
        option: 'world',
        label: 'Space: World',
        icon: <BiGlobe />,
      },
      {
        option: 'local',
        label: 'Space: Local',
        icon: <BiCube />,
      },
    ]}
  />
);

export default TransformControlsSpaceSelect;
