import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export * from './supabase/Exercise';
export * from './supabase/User_Profile';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
