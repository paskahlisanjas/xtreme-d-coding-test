import React from 'react';
import StandardLayout from '../components/templates/StandardLayout';

import DraggableIngredients from '../components/molecules/draggableIngredients/DraggableIngredients';
import ResizableDroppableGrid from '../components/organisms/ResizableDroppableGrid';

const WorkbenchPage = () => {
  return (
    <StandardLayout header="Workbench Arrangement">
      <DraggableIngredients />
      <ResizableDroppableGrid />
    </StandardLayout>
  );
};

export default WorkbenchPage;
