import React from 'react';
import { Card } from '@rmwc/card';

import '@rmwc/card/styles';
import './style/App.css';

export class App extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <div className="CardContainer">
          <Card>
            Hello World.
          </Card>
        </div>
      </React.StrictMode>
    );
  }
}
