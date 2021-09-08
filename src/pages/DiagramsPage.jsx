import React, { useEffect, useContext } from 'react'
import Diagrams from '../components/Diagrams'
import { DataContext } from '../context/DataContext'

export default function DiagramsPage() {

    const { diagramOption, setDiagramOption } = useContext(DataContext)

    useEffect(() => {
        addEventListener()
    }, [])

    useEffect(() => {console.log(diagramOption)}, [diagramOption])

    const addEventListener = () => {
        document.getElementById('report-type').removeEventListener('mouseleave', setOptionValue)
        document.getElementById('report-type').addEventListener('mouseleave', setOptionValue)
    }

    const setOptionValue = () => setDiagramOption(document.getElementById('report-type').value)

    return (
        <div>
            <div>
                <select name="type" id="report-type" onChange={setOptionValue}>
                    <option value="annual">Annuals</option>
                    <option value="quarter">Quarters</option>
                </select>
            </div>
            <div>

                <Diagrams />
               
            </div>
        </div>
    )
}
