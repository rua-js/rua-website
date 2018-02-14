import * as React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'
import { MasterMenu } from './independents/Menu/index'

const routes = [
  {
    path: '/',
    exact: true,
    component: () => import('./routes/Home')
  }
]

// @ts-ignore
const RouterConfig = ({ history, app, ...props }) => {
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
