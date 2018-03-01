import * as React from 'react'
import { Route, Router, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'

import { MasterMenu } from './independents/Menu/index'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => import('./routes/Home')
  },
  {
    path: '/ui/intro',
    exact: true,
    component: () => import('./routes/UI/UIIntro')
  },
]

// @ts-ignore
const RouterConfig = ({ history, app, ...props }) =>
{
  return (
    <Router history={history}>
      <div>
        <MasterMenu />
        <Switch>
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route
                key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </div>
    </Router>
  )
}

export default RouterConfig
