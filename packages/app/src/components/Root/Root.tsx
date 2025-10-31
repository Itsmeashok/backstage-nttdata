import { PropsWithChildren } from 'react';
import { useLocation } from 'react-router-dom';
import { CommonShell } from '../custom/HomeLayout';

export const Root = ({ children }: PropsWithChildren<{}>) => {
  const location = useLocation();

  if (location.pathname.startsWith('/home')) {
    return <>{children}</>;
  }

  return <CommonShell>{children}</CommonShell>;
};
