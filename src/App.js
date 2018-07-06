import React, { Fragment } from 'react';

import FetchApproach from './FetchApproach';
import AxiosApproach from './AxiosApproach';
import HigherOrderComponentApproach from './HigherOrderComponentApproach';

    // <FetchApproach />
    // <HigherOrderComponentApproach />
const App = () =>
  <Fragment>
    <AxiosApproach />
  </Fragment>

export default App;
