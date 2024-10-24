import {Container, Row, Col, Button, Dropdown, ButtonGroup, ToggleButton} from "react-bootstrap";
import { useState } from "react";
import "../styles/css/canvasMenu.css";

function CanvasMenu({activateCallback, settingsCallback}) {
    const [strings, setStrings] = useState([0,0,0,0,0,0])
    const [loop, setLoop] = useState(false)
    const [random, setRandom] = useState(false)

    function handleSetStrings(index, value) {
        const newStrings = strings.map((string, i) => {
            if (i === index) {
                return value
            } else {
                return string
            }
        })
        setStrings(newStrings)
    }

    function handleSetLoop(value) {
        setLoop(value)
    }
    function handleSetRandom(value) {
        setRandom(value)
    }

    return (
        <Container>
            <form>
                <Row>
                    <Col>
                        <Dropdown autoClose="outside">
                            <Dropdown.Toggle variant="primary">
                                Strings
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    
                                        <ToggleButton
                                        type="checkbox"
                                        variant="outline-primary"
            /*High E*/                  checked={strings[0] === 1}
                                        className="strings-button"
                                        onClick={() => handleSetStrings(0, strings[0] === 0 ? 1 : 0)}
                                        >
                                            High E
                                        </ToggleButton>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                        <ToggleButton
                                        type="checkbox"
                                        variant="outline-primary"
            /* A */                     checked={strings[1] === 1}
                                        className="strings-button"
                                        onClick={() => handleSetStrings(1, strings[1] === 0 ? 1 : 0)}
                                        >
                                            A
                                        </ToggleButton>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                        <ToggleButton
                                        type="checkbox"
                                        variant="outline-primary"
            /* D */                     checked={strings[2] === 1}
                                        className="strings-button"
                                        onClick={() => handleSetStrings(2, strings[2] === 0 ? 1 : 0)}
                                        >
                                            D
                                        </ToggleButton>

                                </Dropdown.Item>
                                <Dropdown.Item>
                                        <ToggleButton
                                        type="checkbox"
                                        variant="outline-primary"
            /* G */                     checked={strings[3] === 1}
                                        className="strings-button"
                                        onClick={() => handleSetStrings(3, strings[3] === 0 ? 1 : 0)}
                                        >
                                            G
                                        </ToggleButton>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                        <ToggleButton
                                        type="checkbox"
                                        variant="outline-primary"
            /* B */                     checked={strings[4] === 1}
                                        className="strings-button"
                                        onClick={() => handleSetStrings(4, strings[4] === 0 ? 1 : 0)}
                                        >
                                            B
                                        </ToggleButton>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                        <ToggleButton
                                        type="checkbox"
                                        variant="outline-primary"
            /* Low E */                 checked={strings[5] === 1}
                                        className="strings-button"
                                        onClick={() => handleSetStrings(5, strings[5] === 0 ? 1 : 0)}
                                        >
                                            Low E
                                        </ToggleButton>
                                        <Button className="strings-button">{strings}</Button>
                                    
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <ToggleButton
                            type="checkbox"
                            variant="outline-primary"
                            checked={loop}
                            className="loop-button"
                            onClick={() => handleSetLoop(loop === true ? false : true)}
                        >
                        Loop
                        </ToggleButton>
                        <ToggleButton
                            type="checkbox"
                            variant="outline-primary"
                            checked={random}
                            className="random-button"
                            onClick={() => handleSetRandom(random === true ? false : true)}
                        >
                        Random
                        </ToggleButton>
                    </Col>
                    <Col>
                        <Button onClick={() => {
                            settingsCallback({strings: strings, loop: loop, random: random})
                            activateCallback()
                        }}>Begin</Button>
                    </Col>
                </Row>
            </form>
        </Container>
    )
}

export default CanvasMenu