import React from 'react';
import constant from '../constant';
import { useDrop } from 'react-dnd';

import styles from './DroppableTile.module.css';

const DroppableTile = ({
  type = constant.DragAndDrop.DRAGGABLE,
  row,
  col,
  illustration,
  onItemDropped = (e) => e,
}) => {
  const [{ isOver }, dropRef] = useDrop(
    () => ({
      accept: type,
      drop: (item) => onItemDropped(row, col, item),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }),
    []
  );

  return (
    <div ref={dropRef} className={isOver ? styles.tileOnOver : styles.tile}>
      {illustration && <img src={illustration} alt="tile" width="40" />}
    </div>
  );
};

export default DroppableTile;
