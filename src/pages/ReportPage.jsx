import React, { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { getReport } from '../kit/api/Reports'
import { showModal } from '../kit/Functions'

export default function ReportPage(props) {
    
    const { setCurrentReport, reportList, setModalData } = useContext(DataContext)

    const setReport = (event) => {
        
        const id = event.target.id

        getReport(id)
        .then(res => res.json())
        .then(data => {
            setCurrentReport(data)
            setModalData('edit-report')
            showModal()
        })
    }
   
    return (
        <div id='report-list-page'>
            <div id='annuals-container'>
                <h3>Annual reports</h3>
                {reportList && reportList.length > 0 ? reportList.map(element =>( element.type.toLowerCase()) === 'annual' ? <div className='a-report' id={element._id} key={element._id} onClick={setReport}>{element.period}</div> : null) : null}
            </div>
            <div id='quarter-container'>
                <h3>Quarter reports</h3>
            {reportList && reportList.length > 0 ? reportList.map(element =>( element.type.toLowerCase()) === 'quarter' ? <div className='a-report' id={element._id} key={element._id} onClick={setReport}>{element.period}</div> : null) : null}
            </div>
        </div>
    )
}
