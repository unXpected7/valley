/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

type Menu = {
  // Define the structure of your menu object
  // For example:
  id: string;
  title: string;
  imageUrl: string;
  // ... other properties
};

type Props = {
  menu: Menu;
};

export const MenuItem: FC<Props> = ({ menu }) => {
  return (
    <div className='flex flex-col items-center'>
      <img
        src={menu.imageUrl}
        alt={menu.title}
        className='w-[48px] h-[48px] lg:w-[62px] lg:h-[62px]'
      />
      <div className='mt-[8px] text-black text-[11px] text-center tracking-[-0.3px] leading-[15px]'>
        {menu.title}
      </div>
    </div>
  );
};
