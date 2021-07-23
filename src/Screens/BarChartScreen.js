import React from 'react'
import {
    Input,
    Spacer,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react"
import TableComponent from '../Components/Table/TableComponent'
import BarChartComponent from '../Components/Graph/BarChartComponent'
import Trash from '../Svg/Trash'
import Add from '../Svg/Add'
import { useState } from 'react'
import SvgMany from '../Svg/SvgMany'
import { emptyValidator, emptyXValidator, emptyYValidator, existAlready, numberValidator } from '../Misc/validator'


function BarChartScreen() {

    const [subject, setSubject] = useState([{ x: '', y: '' }])
    const [title, setTitle] = useState([{ x: '', y: '' }])
    const [showgraph, setShowgraph] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')






    const handleAddSubject = () => {
        setSubject([...subject, { x: '', y: '' }])
        setShowgraph(false)

    }
    const handleRemoveSubject = (i) => (e) => {

        setSubject(prev => prev.filter((x, index) => index != i))
        setShowgraph(false)


    }
    const handleChangeSubjectX = (i) => (e) => {

        subject[i].x = e.target.value
        setSubject([...subject])
        setShowgraph(false)


    }

    const handleChangeSubjectY = (i) => (e) => {

        subject[i].y = (e.target.value.charCodeAt(0) >= 48 && e.target.value.charCodeAt(0) <=57) ? parseInt(e.target.value) : ''
        setSubject([...subject])
        setShowgraph(false)



    }

    const handleUnitY = (e) => { 
        setTitle([{ ...title[0], y: e.target.value }]) 
        setShowgraph(false)
    }

    const handleUnitX = (e) => { 
        setTitle([{ ...title[0], x: e.target.value }]) 
        setShowgraph(false)

    }

    const handleSubmit = () => {

        let emptyXValid = emptyXValidator(title)
        if (!emptyXValid.condition) {
            setErrorMessage(`You have not given x axis a unit`)
            console.log(`You have not given x axis a unit`)
            return;
        }
        let emptyYValid = emptyYValidator(title)
        if (!emptyYValid.condition) {
            setErrorMessage(`You have not given y axis a unit`)
            console.log(`You have not given y axis a unit`)
            return;
        }

        emptyXValid = emptyXValidator(subject)
        if (!emptyXValid.condition) {
            setErrorMessage(`x${emptyXValid.i + 1} is empty`)
            console.log(`x${emptyXValid.i + 1} is empty`)
            return;
        }
        emptyYValid = emptyYValidator(subject)
        if (!emptyYValid.condition) {
            setErrorMessage(`y${emptyYValid.i + 1} is empty`)
            console.log(`y${emptyYValid.i + 1} is empty`)
            return;
        }

        const validNumber = numberValidator(subject)
        if (!validNumber.condition) {
            setErrorMessage(`y${validNumber.i + 1} is not a Number: Not allowed`)
            console.log(`y${validNumber.i + 1} is not a Number: Not allowed`)
            return;
        }

        const existDuplicate = existAlready(subject)
        if (existDuplicate.condition) {
            setErrorMessage('Duplicate X values at ' + `x${existDuplicate.i + 1} and ` + `x${existDuplicate.j + 1}` + ': Not allowed')
            console.log('Duplicate X values at ' + `x${existDuplicate.i + 1} and ` + `x${existDuplicate.j + 1}` + ': Not allowed')
            return;
        }


        setShowgraph(true)

    }

    return (
        <>

            <div className="typingEffectBox crazyMiddle"></div>

            <div className="graphContainer">
                <div className="svgRandom"><SvgMany /></div>
                <div className="calculationArea">

                    <div className="metricContainer">
                        <div className="plotContainersTitle">INPUT X-Y UNITS</div>

                        <div className="flexRow marginBottom10">
                            <div className="axisStyle">X:</div>
                            <Input fontSize={16} color="#000000" fontWeight="extrabold" onChange={handleUnitX} size="lg" backgroundColor="#ffffff" placeholder="X unit" />


                        </div>

                        <Spacer />
                        <div className="flexRow">
                            <div className="axisStyle">Y:</div>
                            <Input fontSize={16} color="#000000" fontWeight="extrabold" onChange={handleUnitY} size="lg" backgroundColor="#ffffff" placeholder="Y unit" />


                        </div>

                    </div>

                    <div className="metricInput">
                        <div className="plotContainersTitle">INPUT X-Y VALUES</div>

                        {subject && subject.map((val, i) => (<div key={i}>


                            <div className="flexRow marginTop4 marginBottom10">
                                <div className="axisStyle">X{i + 1}:</div>
                                <Input fontSize={16} color="#000000" fontWeight="extrabold" value={val.x} onChange={handleChangeSubjectX(i)} size="lg" backgroundColor="#ffffff" placeholder={`x${i+1} value`} />


                            </div>

                            <div className="flexRow">
                                <div className="axisStyle">Y{i + 1}:</div>
                                <Input fontSize={16} color="#000000" fontWeight="extrabold" value={val.y} onChange={handleChangeSubjectY(i)} size="lg" backgroundColor="#ffffff" placeholder={`y${i+1} value`} />


                            </div>
                            <div className="flexRow flexEnd">
                                <div onClick={handleAddSubject} className={i == subject.length - 1 ? "addInput crazyAddRemove" : "hide"}>
                                    <Add />
                                </div>
                                <div onClick={handleRemoveSubject(i)} className={subject.length > 1 ? "removeInput crazyAddRemove" : "hide"}>
                                    <Trash />
                                </div>
                            </div>


                        </div>))}
                        <div className="buttonContainer">
                            <Popover onClose={()=>{setErrorMessage('')}} isLazy>
                                <PopoverTrigger>
                                    <button onClick={handleSubmit} className="plotButton"> PLOT GRAPH </button>
                                </PopoverTrigger>
                                {errorMessage && 
                                <PopoverContent padding={6} borderRadius={8} backgroundColor="#353535" >
                                    <PopoverHeader border="none" letterSpacing={2} color="#3c6e71"  fontFamily="'Luckiest Guy', cursive"  fontWeight="semibold">Error</PopoverHeader>
                                    <PopoverArrow backgroundColor="#353535" />
                                    <PopoverCloseButton color="#3c6e71"  />
                                    <PopoverBody color="#ffffff">
                                        {errorMessage}
                                    </PopoverBody>
                                </PopoverContent> }
                            </Popover>

                        </div>

                    </div>
                    {showgraph && <div className="plotContainer">
                        <div className="plotContainersTitle">PLOT</div>
                        <BarChartComponent title={title} subject={subject} />

                    </div>}
                    {showgraph && <div className="tableContainer">
                        <div className="plotContainersTitle">TABLE</div>
                        < TableComponent subject={subject} />
                    </div>
                    }
                </div>

            </div>
        </>
    )
}

export default BarChartScreen
