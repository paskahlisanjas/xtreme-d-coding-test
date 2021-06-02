import React from 'react';
import { useDrag } from 'react-dnd';
import StandardLayout from '../components/templates/StandardLayout';

import './styles.css';

const WorkbenchPage = () => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'tile',
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    []
  );

  return (
    <StandardLayout header="Workbench Arrangement">
      <div className="grid-container">
        {[...Array(16).keys()].map(() => (
          <div className="grid-item" />
        ))}
      </div>
      <div
        ref={dragRef}
        style={{ width: '64px', height: '64px', background: 'green' }}
      >
        drag me
      </div>
    </StandardLayout>
  );
};

export default WorkbenchPage;
