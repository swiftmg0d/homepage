import { createRoot } from 'react-dom/client';
import { RouterProvider } from '@tanstack/react-router';
import { injectGlobals } from './styles/globals';
import { router } from './router';

injectGlobals();
createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
