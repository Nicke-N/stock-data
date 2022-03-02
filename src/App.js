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
        <Route exact path='/' element={<ListPage />} />
        <Route exact path='/overview/:id' element={<OverviewPage />} />
        <Route exact path='/diagrams/:id' element={<DiagramsPage />} />
        <Route exact path='/reports/:stockName' element={<ReportPage />} />
      </Routes>
      <Modal />
    </div>
  );
}

export default App;
