'use client';

import { GitHubLogoIcon } from '@radix-ui/react-icons';
import React, { FC } from 'react';
import { classNames } from '@/features/classNames';
import Link from 'next/link';

export type NavigationItemProps = {
  isOpen: boolean;
  isCurrent: boolean;
  Icon: typeof GitHubLogoIcon;
  text: string;
  href: string;
  className?: string;
};

export const NavigationItem = ({
  isOpen,
  isCurrent,
  Icon,
  text,
  href,
  className,
}: NavigationItemProps) => {
  return (
    <>
      <li
        className={classNames(
          'h-52 rounded-8',
          className,
          isCurrent
            ? 'text-white bg-orange-400 hover:bg-orange-300'
            : 'bg-white hover:bg-gray-100',
        )}
      >
        <Link className={'w-100p h-100p flex items-center'} href={href}>
          <div
            className={
              'flex-[0_0_52px] h-100p flex justify-center items-center'
            }
          >
            <Icon width={24} height={24} />
          </div>
          <p
            className={classNames(
              'whitespace-nowrap overflow-hidden transition-[width]',
              isOpen ? 'flex-[1_0_0]' : 'flex-[0_0_0]',
            )}
          >
            {text}
          </p>
        </Link>
      </li>
    </>
  );
};
