import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

function TypingComponent() {
    const words = ["Accurate", "Simple", "Readable", "Customizable", "The Best", "Versatile" ]
    const [word, setWord] = useState("")
    const [next, setNext] = useState(0)

    const ref = useRef()

  useEffect(() => {

    setTimeout(() => {
      setNext(prev=>prev+1)
      setWord(words[next])
      
    }, 2000);
    if(next==words.length-1) setNext(-1);
    
    
     
  }, [word])

    

    return (

        <>
        <div ref={ref} class="txt_type" data-wait="3000" data-words='["Accurate", "Simple", "Clear", "Customizable", "The Best", "Versatile" ]'>
        {word} 
        </div>

        </>
    )
}

export default TypingComponent
