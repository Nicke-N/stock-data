import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListPage from './pages/ListPage'
import NavPanel from './components/NavPanel'
import DiagramsPage from './pages/DiagramsPage'
import OverviewPage from './pages/OverviewPage'
import  ReportPage from './pages/ReportPage'
import Modal from './components/Modal'

function App() {

  
  return (
    <div className="App">
      <NavPanel />
      <Routes>
        <Route exact path='/' component={<ListPage />} />
        <Route exact path='/overview/:id' component={<OverviewPage />} />
        <Route exact path='/diagrams/:id' component={<DiagramsPage />} />
        <Route exact path='/reports/:stockName' component={<ReportPage />} />
      </Routes>
      <Modal />
    </div>
  );
}

export default App;
