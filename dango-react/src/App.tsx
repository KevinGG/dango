import React from 'react';

import { IItem } from './Item';

import { Listing } from  './Listing';

import './style/App.css';

export class App extends React.Component {
  componentDidMount() {
    const listingElement = this._listingElement;
    fetch('/products')
      .then(res => res.json())
      .then(json => {
        const node = listingElement.current;
        if (node) {
          node.setState({
            ...json
          });
        }
      });
  }
  
  render() {
    return (
      <React.StrictMode>
        <Listing 
          ref={this._listingElement}
          items={[]}
        />
      </React.StrictMode>
    );
  }

  private _listingElement:React.RefObject<Listing>=React.createRef<Listing>();
}
