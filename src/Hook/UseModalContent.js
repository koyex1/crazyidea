import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function UseModalContent(index, graphFunctions) {
    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    useEffect(() => {
       
        if(index==1){
            setTitle('ACCURATE')
            setBody(graphFunctions.accurate)
    }
    if(index==2){
        setTitle('SIMPLE')
        setBody(graphFunctions.simple)
    }
    if(index==3){
        setTitle('READABLE')
        setBody(graphFunctions.readable)
    }
    if(index==4){
        setTitle('CUSTOMIZABLE')
        setBody(graphFunctions.customizable)
    }
    if(index==5){
        setTitle('THE BEST')
        setBody(graphFunctions.best)
    }
    if(index==6){
        setTitle('VERSATILE')
        setBody(graphFunctions.versatile)
    }

    }, [])

    return {title, body};
    
}

export default UseModalContent
