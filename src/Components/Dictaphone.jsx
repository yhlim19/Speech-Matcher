import React, { useState, useEffect } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import filterSpeech from "../functions/filterSpeech"

const Dictaphone = () => {
    const { transcript, resetTranscript } = useSpeechRecognition()
    const  matchedText = filterSpeech(transcript)

    const handleStopListening = () => {
        SpeechRecognition.stopListening()
    }
    return (
        <section>
            <h1>Speech Matcher</h1>
            <div classname = "container">
                <button onClick={() => SpeechRecognition.startListening({continuous:true})}>Start</button>
                <button onClick={() => handleStopListening()}>Stop</button>
               <button onClick = { () => resetTranscript() }>Reset</button>
                <div classname = "box">
                <h2> Transcript </h2> 
                <p>{transcript}</p>
                
                </div>
                <div classname = "box">
                    <h2>Matched Speech</h2>
                    {matchedText.join(",")}
                </div> 
            </div>
        </section>
    )
}
export default Dictaphone