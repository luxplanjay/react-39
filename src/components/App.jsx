// import { Switch, Route } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
// import {HomeView} from './views/HomeView';
// import {AuthorsView} from './views/AuthorsView';
// import {BooksView} from './views/BooksView';
// import {BookDetailsView} from './views/BookDetailsView';
// import {NotFoundView} from './views/NotFoundView';

export const App = () => {
  return (
    <Layout>
      {/* <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>

        <Route path="/authors">
          <AuthorsView />
        </Route>

        <Route path="/books" exact>
          <BooksView />
        </Route>

        <Route path="/books/:bookId">
          <BookDetailsView />
        </Route>

        <Route>
          <NotFoundView />
        </Route>
      </Switch> */}
    </Layout>
  );
};
