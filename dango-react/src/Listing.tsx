import React from 'react';

import { 
  Item,
  IItem
} from './Item';

interface IListingProps{
  items: Array<IItem>;
}

interface IListingState{
  [key: string]: IItem;
}

export class Listing extends React.Component<IListingProps, IListingState> {
  constructor(props: IListingProps) {
    super(props);
    this.state = this.props.items.reduce(
      (obj, item) => ({
        ...obj,
        [item.itemId]: item
      }),
      {}
    );
  }

  render() {
    const items = Object
      .entries(this.state)
      .map(([key, value]) => {
        console.log(value);
        return (
          <Item
            item={value}
          />
        );
      });
    return (
      <div>
        {items}
      </div>
    );
  }
}
