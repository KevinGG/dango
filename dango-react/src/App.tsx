import React from 'react';

import { Listing } from  './Listing';

import './style/App.css';

export class App extends React.Component {
  render() {
    const items = [
      {
        itemId: '1',
        itemName: 'Strawberry Cake',
        itemImgUrl: 'https://i.ytimg.com/vi/VYoQmLwMkLs/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBU7p0U07HM1UywfPlCczLwL5haZg',
        tutorialIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VYoQmLwMkLs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      },
      {
        itemId: '2',
        itemName: 'Pâte à choux',
        itemImgUrl: 'https://i.ytimg.com/vi/weIE6ePtzpI/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDMmQxKEfI7chs6WZYFGaLB-Wr1CA',
        tutorialIframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/weIE6ePtzpI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      }
    ];

    return (
      <React.StrictMode>
        <Listing 
          items={items}
        />
      </React.StrictMode>
    );
  }
}
