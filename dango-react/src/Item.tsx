import React from 'react';
import { 
  Card,
  CardPrimaryAction,
  CardMedia
} from '@rmwc/card';

import '@rmwc/card/styles';

export interface IItem {
  itemId: string;
  itemName: string;
  itemImgUrl: string;
  tutorialIframe?: string;
}

interface IItemProps {
  item: IItem;
}

interface IItemState {
  item: IItem;
}

export class Item extends React.Component<IItemProps, IItemState> {
  constructor(props: IItemProps) {
    super(props);
    this.state = {
      item: this.props.item
    }
  }

  render() {
    const item = this.state.item;
    return (
      <Card>
        <CardPrimaryAction>
          <CardMedia
            sixteenByNine
            style={{
              backgroundImage: `url(${item.itemImgUrl})`
            }}
          />
          {item.itemName}
        </CardPrimaryAction>
      </Card>
    )
  }
}
