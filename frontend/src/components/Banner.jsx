import { Card, Row, Col, Container } from "react-bootstrap";
import "../styles/css/banner.css"

function Banner({imgURL, header}) {

    return (
            <Card className="bg-dark text-black" style={{width: "100%"}}>
                <div className="banner-outer-div">
                    <div className="banner-bg-image" style={{position: "relative"}}>
                        <Card.Img className="banner-image" src={imgURL} style={{width: "100%"}}/>
                        <div className="card-mask"></div>
                    </div>

                            <Card.ImgOverlay>
                                    <Card.Title>
                                        <div>
                                        <h5 className="banner-title">{header}</h5>
                                        </div>
                                    </Card.Title>
                            </Card.ImgOverlay>

                </div>
            </Card>
    )
}

export default Banner