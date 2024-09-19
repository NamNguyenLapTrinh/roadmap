'use client';

import { PropsWithChildren } from 'react';
import { SWRConfig } from 'swr';

export default function SwrProvider({ children }: PropsWithChildren) {
  return <SWRConfig>{children}</SWRConfig>;
}
