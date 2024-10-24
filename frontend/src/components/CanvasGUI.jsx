import { Container, Row, Col } from "react-bootstrap";
import CanvasMenu from "./CanvasMenu";
import CanvasActive from "./CanvasActive";
import { useState } from "react";

function CanvasGUI() {
    const [active, setActive] = useState(false)
    const [settings, setSettings] = useState({strings: [0,0,0,0,0,0], loop: false, random: false})

    function handleSetActive(value) {
        setActive(value)
    }

    function handleSetSettings(newSettings) {
        setSettings(newSettings)
    }

    return (
        <Container>
            <Row>
                <Col>
                    {active === true ? <CanvasActive backCallback={() => handleSetActive(false)} strings={settings.strings} loop={settings.loop} random={settings.random} /> : <CanvasMenu settingsCallback={handleSetSettings} activateCallback={() => handleSetActive(true)}/>}
                </Col>
            </Row>
        </Container>
    )
}

export default CanvasGUI