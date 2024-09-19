'use client';

import { NextUIProvider } from '@nextui-org/react';
import { PropsWithChildren } from 'react';

export default function NextUIProviders({ children }: PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
