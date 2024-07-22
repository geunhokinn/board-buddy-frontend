'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { useState } from 'react';

export default function ReactQueryProviders({
  children,
}: React.PropsWithChildren) {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: Infinity,
          gcTime: Infinity,
        },
      },
    }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
