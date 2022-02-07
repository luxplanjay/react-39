import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout';
import { PageA, PageB } from 'pages';

// Если у вас именованные экспорты компонентов страниц
const createChunk = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};

const ListPage = createChunk('ListPage');
const ItemPage = createChunk('ItemPage');
const AddItemPage = createChunk('AddItemPage');
const PreviewPage = createChunk('PreviewPage');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="page-a" element={<PageA />} />
        <Route path="page-b" element={<PageB />} />
        <Route path="preview" element={<PreviewPage />} />
        <Route path="list" element={<ListPage />} />
        <Route path="list/:itemId" element={<ItemPage />} />
        <Route path="create" element={<AddItemPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
