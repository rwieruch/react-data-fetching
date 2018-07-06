import React, { Fragment } from 'react';

import FetchApproach from './FetchApproach';
import AxiosApproach from './AxiosApproach';
import AsyncAwaitApproach from './AsyncAwaitApproach';
import HigherOrderComponentApproach from './HigherOrderComponentApproach';
import RenderPropApproach from './RenderPropApproach';

const App = () =>
  <Fragment>
    <RenderPropApproach />
  </Fragment>
  // <FetchApproach />
  // <AxiosApproach />
  // <AsyncAwaitApproach />
  // <HigherOrderComponentApproach />
  // <RenderPropComponentApproach />

export default App;
