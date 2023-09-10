import { useCallback } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

type SidebarState = {
  isOpenedByMenuButton: boolean;
  inHover: boolean;
};

export const sidebarRecoilState = atom<SidebarState>({
  key: 'sidebar',
  default: {
    isOpenedByMenuButton: !true,
    inHover: false,
  },
});

export const useSidebarState = () => {
  const { isOpenedByMenuButton, inHover } = useRecoilValue(sidebarRecoilState);
  return {
    isOpen: isOpenedByMenuButton || inHover,
    isPermanentlyOpen: isOpenedByMenuButton,
    isTemporarilyOpen: !isOpenedByMenuButton && inHover,
  };
};

export const useSidebarRecoilMutator = () => {
  const setState = useSetRecoilState(sidebarRecoilState);

  const toggleIsOpenedByMenuButton = useCallback(() => {
    setState((currentState) => ({
      ...currentState,
      isOpenedByMenuButton: !currentState.isOpenedByMenuButton,
    }));
  }, [setState]);

  const mutateInHover = useCallback(
    (newState: boolean) => {
      setState((currentState) => ({
        ...currentState,
        inHover: newState,
      }));
    },
    [setState],
  );

  return { toggleIsOpenedByMenuButton, mutateInHover };
};
