import { MenuItem } from '@/components/menu-items';
import React, { FC } from 'react';

type Shortcut = {
  // Define the structure of your shortcut object
  // For example:
  id: string;
  title: string;
  imageUrl: string;
  // ... other properties
};

type Props = {
  shortcuts: Shortcut[];
};

export const Shortcuts: FC<Props> = ({ shortcuts }) => {
  return (
    <div className="
      py-[16px] grid grid-cols-5
      gap-y-[24px] gap-x-[12px]
      lg:flex lg:flex-row lg:justify-center lg:justify-between
    ">
      {shortcuts.map((item) => (
        <MenuItem key={item.id} menu={item} />
      ))}
    </div>
  );
};
