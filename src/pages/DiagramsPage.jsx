import React, { useContext } from 'react'
import Diagrams from '../components/Diagrams'
import { DataContext } from '../context/DataContext'
import '../components/Diagrams.css'

export default function DiagramsPage() {

    const { 
        diagramOption, 
        setDiagramOption
    } = useContext(DataContext)

    const setOptionValue = (event) => setDiagramOption(event.target.value)

    return (
        <div>
            <div>
                {diagramOption === 'annual' ?
                <>
                    <input type="radio" name='diagram-type' value='annual' checked onClick={setOptionValue}/> Annuals
                    <input type="radio" name='diagram-type' value='quarter' onClick={setOptionValue}/> Quarters
                </>
                :
                <>
                    <input type="radio" name='diagram-type' value='annual' onClick={setOptionValue}/> Annuals
                    <input type="radio" name='diagram-type' value='quarter' checked onClick={setOptionValue}/> Quarters
                </>
                }
                
                {/* <select name="type" id="report-type" onChange={setOptionValue}>
                    <option value="annual">Annuals</option>
                    <option value="quarter">Quarters</option>
                </select> */}
            </div>
            <div>

                <Diagrams />
               
            </div>
        </div>
    )
}
