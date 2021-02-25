import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { ContentMultipleListLoader } from '@Root/components/ContentLoader';
import Waiting from '@Root/components/Waiting';

import { List } from 'react-content-loader';
import Header from '@Root/components/Header';
import { PrivateRoute, PublicRoute } from '@Root/routes';

const TaskPage = lazy(() => import(
  /*
    webpackChunkName: "risk-page",
    webpackPrefetch: true
  */
  '@Root/pages/TaskPage'));

const DashboardPage = lazy(() => import(
  /*
      webpackChunkName: "dashboard-page",
      webpackPrefetch: true
  */
  '@Root/pages/DashboardPage'));

const App = () => {
  return (
    <Fragment>
      <Suspense fallback={<List />}>
        <Header />
      </Suspense>
      <BrowserRouter>
        <div className="flex-row">
          <Suspense fallback={<ContentMultipleListLoader />}>
            <Switch>
              <PublicRoute restricted={false} component={TaskPage} path="/" exact />
              <PrivateRoute component={DashboardPage} path="/dashboard" exact />
            </Switch>
          </Suspense>
        </div>
      </BrowserRouter>
      <Waiting />
    </Fragment>
  );
}

export default App;