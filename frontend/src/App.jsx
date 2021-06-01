import { Switch, Route } from 'react-router-dom';
import WorkbenchPage from './pages/WorkbenchPage';
import RecipePage from './pages/RecipePage';
import IngredientPage from './pages/IngredientPage';


const App = () => (
  <Switch>
    <Route path="/" component={WorkbenchPage} exact />
    <Route path="/recipe" component={RecipePage} />
    <Route path="/ingredient" component={IngredientPage} />
  </Switch>
);

export default App;
