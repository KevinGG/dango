import React from 'react';
import { Card } from '@rmwc/card';

import '@rmwc/card/styles';

export class App extends React.Component {
  render() {
    return (
     <React.StrictMode>
      <Card>
        Hello World.
      </Card>
      </React.StrictMode>
    );
  }
}
