import React from 'react';
import { useDrag } from 'react-dnd';
import constants from '../constant';

import styles from './DraggableTile.module.css';

const DraggableTile = ({
  type = constants.DragAndDrop.DRAGGABLE,
  item,
  imgUrl = '',
  margin = 0,
}) => {
  const [{ isDragged }, dragRef] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({ isDragged: monitor.isDragging() }),
    }),
    []
  );

  return (
    <div
      ref={dragRef}
      className={isDragged ? styles.tileOnDrag : styles.tile}
      style={{ margin }}
    >
      {imgUrl && <img height="50" src={imgUrl} alt="tile" />}
    </div>
  );
};

export default DraggableTile;
