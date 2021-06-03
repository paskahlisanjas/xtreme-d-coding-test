import React, { useState } from 'react';
import constant from '../constant';
import { useDrop } from 'react-dnd';

import styles from './DroppableTile.module.css';

const DroppableTile = ({
  type = constant.DragAndDrop.DRAGGABLE,
  row,
  col,
  onItemDropped = (e) => e,
}) => {
  const [droppedItem, setDroppedItem] = useState();

  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: type,
      drop: (item) => {
        onItemDropped(row, col, item);
        setDroppedItem(item);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <div ref={dropRef} className={isOver ? styles.tileOnOver : styles.tile}>
      {droppedItem && (
        <img src={droppedItem.illustration} alt="tile" width="40" />
      )}
    </div>
  );
};

export default DroppableTile;
