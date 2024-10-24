/*
    function cycleString(frequencyTableCopy, stringIndex) {
        console.log("String: " + frequencyTableCopy[stringIndex][1])
        console.log("String Index: " + stringIndex)
        const noteIndex = getRandomNote(frequencyTableCopy[stringIndex][1])
        //console.log("String: " + frequencyTableCopy[stringIndex])
        //console.log("String index: " + stringIndex)
        //console.log("Note Index: " + noteIndex)
        handleSetNote(frequencyTableCopy[stringIndex][1][noteIndex])
        //console.log("Note: " + note)
        //console.log("Setting to: " + frequencyTableCopy[stringIndex][1][noteIndex])
        //Here wait until audio detects input
        console.log("Note index to pop: " + noteIndex + "   Note at that index: " + frequencyTableCopy[stringIndex][1][noteIndex])
        if (frequencyTableCopy[stringIndex][1].length > 1) {
            //frequencyTableCopy[stringIndex][1].pop(noteIndex)
            frequencyTableCopy[stringIndex][1].splice(noteIndex, 1)   
            setTimeout(() => {cycleString(frequencyTableCopy, stringIndex)}, 2000)
        }
    }

    function cycleAll(frequencyTableCopy) {
        ////////////////////////////////////////////////////////////////
        //Cycles through the whole guitar frequency table and loops if loop is enabled//
        ////////////////////////////////////////////////////////////////
        let currentString = -1
        console.log("Frequency table copy length: " + frequencyTableCopy.length)
        const initialStringNumber = frequencyTableCopy.length
        for (let i = 0; i < initialStringNumber; i++) {
            //console.log("Loop number " + i + " frequencyTableCopy: " + frequencyTableCopy)
            currentString = getValidString(frequencyTableCopy, currentString)
            //Start string timer here
            cycleString(frequencyTableCopy, currentString)
            frequencyTableCopy.pop(currentString)
            //frequencyTableCopy.pop(currentString)
            //Stop string timer here
        }
        console.log("Current string: " + currentString)
        if (loop) {
            cycleAll(frequencyTableCopy)
        } else {
            //PUT HERE WHAT HAPPENS WHEN FINISHED AND NO LOOP
        }
    }
*/

import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import { useEffect } from "react";


function CanvasActive({backCallback, strings, loop, random}) {
    const [note, setNote] = useState([])
    const frequencyTable = [["Low E", [["Open E", 82], ["F", 87], ["F#", 93], ["G", 98], ["G#", 104], ["A", 110], ["A#", 117], ["B", 124], ["C", 131], ["C#", 139], ["D", 147], ["D#", 156], ["Closed E", 165]]],
                    ["A", [["Open A", 110], ["A#", 117], ["B", 124], ["C", 131], ["C#", 139], ["D", 147], ["D#", 156], ["E", 165], ["F", 175], ["F#", 185], ["G", 196], ["G#", 208], ["Closed A", 220]]],
                    ["D", [["Open D", 147], ["D#", 156], ["E", 165], ["F", 175], ["F#", 185], ["G", 196], ["G#", 208], ["A", 220], ["A#", 233], ["B", 247], ["C", 262], ["C#", 278], ["Closed D", 294]]],
                    ["G", [["Open G", 196], ["G#", 208], ["A", 220], ["A#", 233], ["B", 247], ["C", 262], ["C#", 278], ["D", 294], ["D#", 311], ["E", 330], ["F", 349], ["F#", 370], ["Closed G", 392]]],
                    ["B", [["Open B", 247], ["C", 262], ["C#", 278], ["D", 294], ["D#", 311], ["E", 330], ["F", 349], ["F#", 370], ["G", 392], ["G#", 415], ["A", 440], ["A#", 466], ["Closed B", 494]]],
                    ["High E", [["Open E", 330], ["F", 349], ["F#", 370], ["G", 392], ["G#", 415], ["A", 440], ["A#", 466], ["B", 494], ["C", 523], ["C#", 554], ["D", 587], ["D#", 622], ["Closed E", 659]]]]
    const useFrequencyTable = frequencyTable.map((item, index) => {
        if (strings[index] == 0) {
            return []
        } else {
            return item
        }
    })


    useEffect(() => {
        async function main() {
        let frequencyTableCopy = useFrequencyTable.slice(0)
        //Start timer here
        cycleAll(frequencyTableCopy)
    }
        main()
    }, [])


    function handleSetNote(value) {
        console.log("Note set to: " + value)
        setNote(value)
    }

    function getValidString(frequencyTableCopy, currentString) {
            currentString = selectString(currentString)
            const   string = frequencyTableCopy[currentString]
        //console.log("In getValidString current string index: " + currentString)
        //console.log("In getValidString Frequency Table Copy: " + toString(frequencyTableCopy))
        if (checkEmpty(frequencyTableCopy, currentString)) {
            frequencyTableCopy.splice(currentString, 1)
            
        } else {
            
            return currentString
        }
        if (frequencyTableCopy.length > 0) {
            return getValidString(frequencyTableCopy, frequencyTableCopy.indexOf(string))
        }
        //Put here what happens when no strings left
    }

    function selectString(currentString, frequencyTableCopy) {
        if (random) {
            return Math.floor(Math.random() * frequencyTableCopy.length)
        }
        return currentString + 1
    }

    function checkEmpty(frequencyTableCopy, stringIndex) {
        //console.log("Frequency table copy: " + toString(frequencyTableCopy))
        //console.log("Checking " + stringIndex)
        if (frequencyTableCopy[stringIndex].length > 0) {
            //console.log("Not empty!")
            return false
        }
        //console.log("Empty")
        return true
    }

    function getRandomNote(string) {
        return Math.floor(Math.random()*string.length)
    }

    function cycleString(frequencyTableCopy, stringIndex) {
        console.log("String: " + frequencyTableCopy[stringIndex][1])
        console.log("String Index: " + stringIndex)
        const noteIndex = getRandomNote(frequencyTableCopy[stringIndex][1])
        //console.log("String: " + frequencyTableCopy[stringIndex])
        //console.log("String index: " + stringIndex)
        //console.log("Note Index: " + noteIndex)
        handleSetNote(frequencyTableCopy[stringIndex][1][noteIndex])
        //console.log("Note: " + note)
        //console.log("Setting to: " + frequencyTableCopy[stringIndex][1][noteIndex])
        //Here wait until audio detects input
        console.log("Note index to pop: " + noteIndex + "   Note at that index: " + frequencyTableCopy[stringIndex][1][noteIndex])
            //frequencyTableCopy[stringIndex][1].pop(noteIndex)
        frequencyTableCopy[stringIndex][1].splice(noteIndex, 1)   
        setTimeout(() => {}, 2000)
        return frequencyTableCopy
    }

    function cycleAll(frequencyTableCopy) {
        ////////////////////////////////////////////////////////////////
        //Cycles through the whole guitar frequency table and loops if loop is enabled//
        ////////////////////////////////////////////////////////////////
        let currentString = -1
        console.log("Frequency table copy length: " + frequencyTableCopy.length)
        const initialStringNumber = frequencyTableCopy.length
        for (let i = 0; i < initialStringNumber; i++) {
            //console.log("Loop number " + i + " frequencyTableCopy: " + frequencyTableCopy)
            currentString = getValidString(frequencyTableCopy, currentString)
            //Start string timer here
            for (let j = 0; j <= 12; j++) {
                frequencyTableCopy = cycleString(frequencyTableCopy, currentString)
            }
            frequencyTableCopy.pop(currentString)
            //frequencyTableCopy.pop(currentString)
            //Stop string timer here
        }
        console.log("Current string: " + currentString)
        if (loop) {
            cycleAll(frequencyTableCopy)
        } else {
            //PUT HERE WHAT HAPPENS WHEN FINISHED AND NO LOOP
        }
    }

    

    return(
        <Container>
            <Row>
                <Col>
                    <Button onClick={() => backCallback()}>Back</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Strings: {strings}</div>
                    <div>Loop: {loop ? "Yes" : "No"}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {}}>Note Played</Button>
                    <div>String: {}</div>
                    <div>Note: {note[0]}</div>
                    <div>Frequency: </div>
                    <div>Table: {useFrequencyTable}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default CanvasActive


/*
    const [note, setNote] = useState([])
    const frequencyTable = [["Low E", [["Open E", 82], ["F", 87], ["F#", 93], ["G", 98], ["G#", 104], ["A", 110], ["A#", 117], ["B", 124], ["C", 131], ["C#", 139], ["D", 147], ["D#", 156], ["Closed E", 165]]],
                    ["A", [["Open A", 110], ["A#", 117], ["B", 124], ["C", 131], ["C#", 139], ["D", 147], ["D#", 156], ["E", 165], ["F", 175], ["F#", 185], ["G", 196], ["G#", 208], ["Closed A", 220]]],
                    ["D", [["Open D", 147], ["D#", 156], ["E", 165], ["F", 175], ["F#", 185], ["G", 196], ["G#", 208], ["A", 220], ["A#", 233], ["B", 247], ["C", 262], ["C#", 278], ["Closed D", 294]]],
                    ["G", [["Open G", 196], ["G#", 208], ["A", 220], ["A#", 233], ["B", 247], ["C", 262], ["C#", 278], ["D", 294], ["D#", 311], ["E", 330], ["F", 349], ["F#", 370], ["Closed G", 392]]],
                    ["B", [["Open B", 247], ["C", 262], ["C#", 278], ["D", 294], ["D#", 311], ["E", 330], ["F", 349], ["F#", 370], ["G", 392], ["G#", 415], ["A", 440], ["A#", 466], ["Closed B", 494]]],
                    ["High E", [["Open E", 330], ["F", 349], ["F#", 370], ["G", 392], ["G#", 415], ["A", 440], ["A#", 466], ["B", 494], ["C", 523], ["C#", 554], ["D", 587], ["D#", 622], ["Closed E", 659]]]]
    const useFrequencyTable = frequencyTable.map((item, index) => {
        if (strings[index] == 0) {
            return []
        } else {
            return item
        }
    })

    useEffect(() => {
        async function main() {
        //Start timer here
        cycleAll(useFrequencyTable)
    }

        main()
    }, [useFrequencyTable])

    function handleSetNote(value) {
        setNote(value)
    }

    function getValidString(frequencyTableCopy, currentString) {
        currentString = selectString(frequencyTableCopy, currentString)
        if (checkEmpty(frequencyTableCopy, currentString)) {
            frequencyTableCopy.pop(currentString)
        } else {
            return currentString
        }
        if (frequencyTableCopy.length > 0) {
            return getValidString(frequencyTableCopy, currentString)
        }
        //Put here what happens when no strings left
    }

    function selectString(frequencyTableCopy, currentString) {
        if (random) {
            return Math.floor(Math.random() * frequencyTableCopy.length)
        } else {
            return currentString + 1
        }
    }

    function checkEmpty(frequencyTableCopy, stringIndex) {
        console.log("Checking " + stringIndex)
        if (frequencyTableCopy[stringIndex].length > 1) {
            return false
        }
        return true
    }

    function getRandomNote(string) {
        return Math.floor(Math.random()*string.length)
    }

    function cycleString(string, stringIndex) {
        const noteIndex = getRandomNote(string)
        handleSetNote(string[noteIndex])
        string.pop(noteIndex)
        //Here wait until audio detects input
        if (string.length > 0) {
            cycleString(string, stringIndex)
        }
    }

    function cycleAll(frequencyTable) {
        const frequencyTableCopy = frequencyTable
        let currentString = 0
        for (let i = 0; i <= frequencyTableCopy.length; i++) {
            currentString = getValidString(frequencyTableCopy, currentString)
            //Start string timer here
            cycleString(frequencyTableCopy[currentString][1], currentString)
            //frequencyTableCopy.pop(currentString)
            //Stop string timer here
        }
        if (loop) {
            cycleAll(frequencyTable)
        } else {
            //PUT HERE WHAT HAPPENS WHEN FINISHED AND NO LOOP
        }
    }


    return(
        <Container>
            <Row>
                <Col>
                    <Button onClick={() => backCallback()}>Back</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div>Strings: {strings}</div>
                    <div>Loop: {loop ? "Yes" : "No"}</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={() => {}}>Note Played</Button>
                    <div>String: {}</div>
                    <div>Note: {note[0]}</div>
                    <div>Frequency: </div>
                    <div>Table: {useFrequencyTable}</div>
                </Col>
            </Row>
        </Container>
    )
}

export default CanvasActive
*/