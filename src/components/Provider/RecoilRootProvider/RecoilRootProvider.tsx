'use client';

import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

export const RecoilRootProvider = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};
