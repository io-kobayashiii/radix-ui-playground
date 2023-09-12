'use client';

import { HomeIcon, GitHubLogoIcon, InputIcon } from '@radix-ui/react-icons';
import React, { FC } from 'react';
import { useSidebarRecoilMutator, useSidebarState } from '@/recoil/sidebar';
import { NavigationItem, NavigationItemProps } from './NavigationItem';
import { usePathname } from 'next/navigation';
import { classNames } from '@/features/classNames';

const navigationItemsData: Omit<NavigationItemProps, 'isCurrent' | 'isOpen'>[] =
  [
    {
      Icon: HomeIcon,
      text: 'Home',
      href: '/',
    },
    {
      Icon: InputIcon,
      text: 'Form Parts',
      href: '/form-parts',
    },
  ];

export const Sidebar = () => {
  const pathname = usePathname();
  const { isOpen, isPermanentlyOpen, isTemporarilyOpen } = useSidebarState();
  const { mutateInHover } = useSidebarRecoilMutator();

  return (
    <nav
      className={classNames(
        'w-100 h-100vh duration-300 ease-in-out sticky top-0',
        isPermanentlyOpen ? 'w-256' : 'w-100',
      )}
      onMouseEnter={() => !isPermanentlyOpen && mutateInHover(true)}
      onMouseLeave={() => !isPermanentlyOpen && mutateInHover(false)}
    >
      <div
        className={classNames(
          'bg-white p-24 h-100p duration-300 ease-in-out',
          isOpen ? 'w-256' : 'w-100',
          isTemporarilyOpen &&
            'absolute top-0 left-0 shadow-[0_2px_2px_0_rgba(0,0,0,0.2)]',
        )}
      >
        <div className={'flex justify-center'}>
          <GitHubLogoIcon
            // className={`${isOpen ? 'visible' : 'invisible'}`}
            width={40}
            height={40}
            className={'text-orange-400'}
          />
        </div>
        <ul className={'mt-64'}>
          {navigationItemsData.map(
            ({ href, ...navigationItemProps }, index) => (
              <NavigationItem
                key={href}
                {...{ href, isOpen, ...navigationItemProps }}
                isCurrent={
                  href === '/' ? href === pathname : pathname.startsWith(href)
                }
                className={index ? 'mt-8' : ''}
              />
            ),
          )}
        </ul>
      </div>
    </nav>
  );
};
