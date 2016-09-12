import React from 'react'
import {Route, IndexRoute} from 'react-router'

import Container from './Container'
import IndexPage from './indexPage/IndexPage'
import Map from './Map/Map'
import Detail from './Detail/Detail'

export const makeMainRoutes = () => {
  return (
    <Route path="/" component={Container}>
      <Route path="map" component={Map}>
        <Route path="detail/:placeId" component={Detail} />
      </Route>
      {/* Lazy-loading */}
      <Route path="about" getComponent={(location, cb) => {
          require.ensure([], (require) => {
            const mod = require('./about/About');
            cb(null, mod.default);
          });
        }} />
      {/* inline loading */}
      <IndexRoute component={Map} />
    </Route>
  )
}

export default makeMainRoutes
