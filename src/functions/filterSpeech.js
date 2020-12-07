const matchWords = ["question" , "array" , "voltage" , "torque" , "current" , "copy"]
const commonWords = []
const filterSpeech = (transcript) => {
    const transcriptArr = transcript.toLowerCase().split(" ")
    const filteredResult = transcriptArr.filter( item => matchWords.includes(item)  )
    
    return filteredResult
}

export default filterSpeech