import './App.css'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ListPage from './pages/ListPage'
import StockPage from './pages/StockPage'

function App() {
  return (
    <div className="App">


      <Switch>
        <Route exact path='/List' component={ListPage} />
        <Route exact path='/stock' component={StockPage} />
        <Route exact path='/' component={LandingPage}/>
      </Switch>

    </div>
  );
}

export default App;
