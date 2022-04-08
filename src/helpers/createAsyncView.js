import { lazy } from 'react';

export const createAsyncView = componentName => {
  return lazy(() => {
    return import(`../views/${componentName}`).then(module => {
      return {
        ...module,
        default: module[componentName],
      };
    });
  });
};
