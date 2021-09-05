import './App.css'
import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import ListPage from './pages/ListPage'
import { DataContext } from './context/DataContext'
import NavPanel from './components/NavPanel'
import DiagramsPage from './pages/DiagramsPage'
import OverviewPage from './pages/OverviewPage'
import  ReportPage from './pages/ReportPage'
import Modal from './components/Modal'
function App() {

  const { modalData } = useContext(DataContext)
  
  return (
    <div className="App">


      <NavPanel />
      <Switch>
        <Route exact path='/' component={ListPage} />
        <Route exact path='/overview/:id' component={OverviewPage} />
        <Route exact path='/diagrams/:id' component={DiagramsPage} />
        <Route exact path='/reports/:stockName' component={ReportPage} />
      </Switch>
      <Modal />
    </div>
  );
}

export default App;
