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
};

export const NavigationItem: FC<NavigationItemProps> = ({
  isOpen,
  isCurrent,
  Icon,
  text,
  href,
}) => {
  return (
    <>
      <li
        className={classNames(
          'h-52 rounded-8 [&>*:not(:first-of-type)]:mt-8 hover:bg-gray-300',
          isCurrent
            ? 'text-white bg-orange-400 hover:bg-orange-300'
            : 'bg-white hover:bg-gray-100',
        )}
      >
        <Link className={'w-100p h-100p flex items-center'} href={href}>
          <div className={'w-52 h-100p flex justify-center items-center'}>
            <Icon width={24} height={24} />
          </div>
          <p
            className={classNames(
              'w-0 whitespace-nowrap overflow-hidden duration-300',
              isOpen && 'grow',
            )}
          >
            {text}
          </p>
        </Link>
      </li>
    </>
  );
};
