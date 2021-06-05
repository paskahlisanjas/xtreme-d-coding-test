import React from 'react';
import DroppableTile from '../../atoms/dropableTile/DroppableTile';

import styles from './DroppableGrid.module.css';

const DroppableGrid = ({
  rowSize = 4,
  colSize = 4,
  onMatrixUpdated = (e) => e,
}) => {
  return (
    <div
      className={styles.gridContainer}
      style={{ gridTemplateColumns: `repeat(${rowSize}, 64px)` }}
    >
      {[...Array(rowSize * colSize).keys()].map((_, index) => (
        <DroppableTile
          key={index}
          row={Math.floor(index / rowSize)}
          col={index % rowSize}
          onItemDropped={(row, col, item) => onMatrixUpdated(row, col, item)}
        />
      ))}
    </div>
  );
};
 
export default DroppableGrid;