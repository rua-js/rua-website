import * as React from 'react'
import { Router, Route, Switch } from 'dva/router'
import dynamic from 'dva/dynamic'


const routes = [
  {
    path: '/',
    exact: true,
    component: () => import('./routes/Home')
  }
]

const RouterConfig = ({ history, app, ...props }) => {
  return (
    <Router history={history}>
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
    </Router>
  )
}

export default RouterConfig
