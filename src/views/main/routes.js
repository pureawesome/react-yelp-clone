import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Container from './Container'
import IndexPage from './indexPage/IndexPage'
import Map from './Map/Map'

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      <Route path="map" component={Map} />
      {/* Lazy-loading */}
      <Route path="about" getComponent={(location, cb) => {
          require.ensure([], (require) => {
            const mod = require('./about/About');
            cb(null, mod.default);
          });
        }} />
      {/* inline loading */}
      {/* <IndexRoute component={IndexPage} /> */}
    </Route>
  )
}

export default makeMainRoutes
