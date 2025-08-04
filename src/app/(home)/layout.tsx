import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout {...baseOptions}
  links = {[
    {
      text: 'Documentation',
      url: '/docs/Introduction/errorHandlingBroken',
      // secondary items will be displayed differently on navbar
      secondary: false,
    },
    {
      text: 'Playground',
      url: 'https://codesandbox.io/p/devbox/gracious-sky-85z2jj',
      // secondary items will be displayed differently on navbar
      secondary: false,
    }
  ]}
  >{children}</HomeLayout>;
}
