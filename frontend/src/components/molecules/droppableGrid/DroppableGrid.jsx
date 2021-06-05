import React from 'react';
import DroppableTile from '../../atoms/dropableTile/DroppableTile';

import styles from './DroppableGrid.module.css';

const DroppableGrid = ({
  rowSize = 4,
  colSize = 4,
  arrangement = {},
  onMatrixUpdated = (e) => e,
}) => {
  return (
    <div
      className={styles.gridContainer}
      style={{ gridTemplateColumns: `repeat(${rowSize}, 64px)` }}
    >
      {[...Array(rowSize * colSize).keys()].map((_, index) => {
        const row = Math.floor(index / rowSize);
        const col = index % rowSize;
        return (
          <DroppableTile
            key={index}
            row={row}
            col={col}
            onItemDropped={(row, col, item) => onMatrixUpdated(row, col, item)}
            illustration={
              arrangement[`${row}|${col}`] &&
              arrangement[`${row}|${col}`].illustration
            }
          />
        );
      })}
    </div>
  );
};

export default DroppableGrid;
