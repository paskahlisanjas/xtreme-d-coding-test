import React from 'react';
import Utils from '../../../common/Utils';
import DroppableTile from '../../atoms/dropableTile/DroppableTile';

import styles from './DroppableGrid.module.css';

const DroppableGrid = ({
  rowSize,
  colSize,
  arrangement = {},
  onMatrixUpdated = (e) => e,
}) => {
  const generateGrid = () => {
    const grids = [];
    for (let row = 0; row < rowSize; row++) {
      for (let col = 0; col < colSize; col++) {
        const key = Utils.generateArrangementKey(row, col);
        grids.push(
          <DroppableTile
            key={key}
            onItemDropped={(item) => onMatrixUpdated(row, col, item)}
            illustration={arrangement[key] && arrangement[key].illustration}
          />
        );
      }
    }
    return grids;
  };

  return (
    <div
      className={styles.gridContainer}
      style={{ gridTemplateColumns: `repeat(${colSize}, 64px)` }}
    >
      {generateGrid()}
    </div>
  );
};

export default DroppableGrid;
