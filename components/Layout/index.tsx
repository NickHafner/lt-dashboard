import type { ReactElement } from 'react';

export default function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <div>test nav</div>
      {children}
    </>
  );
}
