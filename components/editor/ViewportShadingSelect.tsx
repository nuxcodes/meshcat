import React, { FC } from 'react';
import { GiIceCube, GiCube } from 'react-icons/gi';
import { BiCube } from 'react-icons/bi/';
import { FaCube } from 'react-icons/fa/';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import { ViewportShading } from './store';
import ViewportShadingSettings from './ViewportShadingSettings';
import TooltipToggleGroup from '../ui/TooltipToggleGroup';

export interface ViewportShadingSelectProps {
  value: ViewportShading;
  onChange: (value: ViewportShading) => void;
}

const ViewportShadingSelect: FC<ViewportShadingSelectProps> = ({
  value,
  onChange,
}) => (
  <div className="flex items-center">
    <TooltipToggleGroup
      options={[
        {
          option: 'wireframe',
          label: 'Display: Wireframe',
          icon: <BiCube />,
        },
        {
          option: 'flat',
          label: 'Display: Flat',
          icon: <GiCube />,
        },
        {
          option: 'solid',
          label: 'Display: Solid',
          icon: <FaCube />,
        },
        {
          option: 'rendered',
          label: 'Display: Rendered',
          icon: <GiIceCube />,
        },
      ]}
      value={value}
      onChange={onChange as (value: string) => void}
      settingsPanel={<ViewportShadingSettings></ViewportShadingSettings>}
    />
  </div>
);

export default ViewportShadingSelect;
