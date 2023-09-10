'use client';

import { useSidebarRecoilMutator } from '@/recoil/sidebar';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

export const Header = () => {
  const { toggleIsOpenedByMenuButton } = useSidebarRecoilMutator();
  return (
    <header className={'flex justify-center'}>
      <div className={'w-100p max-w-xl p-24 flex justify-between items-center'}>
        <div className={'flex justify-center items-center'}>
          <HamburgerMenuIcon
            width={20}
            height={20}
            className={'cursor-pointer'}
            onClick={() => toggleIsOpenedByMenuButton()}
          />
        </div>
        <p className="font-bold">user@kobayashiii.dev</p>
      </div>
    </header>
  );
};
