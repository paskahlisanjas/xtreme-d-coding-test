import './App.css';
import { Switch, Route } from 'react-router-dom';

const comp = () => <div>Sample Component</div>;
const anotherComp = () => <div>Another Sample Component</div>;

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={comp} exact />
        <Route path="/another-path" component={anotherComp} />
      </Switch>
    </div>
  );
}

export default App;
