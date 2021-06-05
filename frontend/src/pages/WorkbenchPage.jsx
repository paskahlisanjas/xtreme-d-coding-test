import React, { useState } from 'react';
import StandardLayout from '../components/templates/StandardLayout';

import DraggableIngredients from '../components/molecules/draggableIngredients/DraggableIngredients';
import ResizableDroppableGrid from '../components/organisms/ResizableDroppableGrid';
import { Button } from 'semantic-ui-react';

const WorkbenchPage = () => {
  const [matrix, setMatrix] = useState();

  console.log(matrix);

  return (
    <StandardLayout header="Workbench Arrangement">
      <DraggableIngredients />
      <ResizableDroppableGrid
        onMatrixUpdated={(updatedMatrix) => setMatrix(updatedMatrix)}
      />
      <Button>Clear</Button>
      <Button color="blue">Craf Item!</Button>
    </StandardLayout>
  );
};

export default WorkbenchPage;
