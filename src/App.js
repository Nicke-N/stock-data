import './App.css'
import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import ListPage from './pages/ListPage'
import StockPage from './pages/StockPage'
import Modal from './components/Modal'
import { DataContext } from './context/DataContext'
import { showModal } from './kit/Functions'

function App() {

  const { modalData } = useContext(DataContext)
  
  return (
    <div className="App">
      <button onClick={showModal}>
        Show Modal
      </button>

      <Switch>
        <Route exact path='/stocks' component={ListPage} />
        <Route exact path='/stocks/:id' component={StockPage} />
        <Route exact path='/' component={LandingPage}/>
      </Switch>
    <Modal />
    </div>
  );
}

export default App;
