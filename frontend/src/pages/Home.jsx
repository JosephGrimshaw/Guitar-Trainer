import CanvasGUI from "../components/CanvasGUI";
import Banner from "../components/Banner";
import bannerImg from "../assets/guitarBanner.svg";

function Home() {
    return (
    <div>
        <Banner imgURL={bannerImg} header="Fretboard Master" />
        <CanvasGUI />
    </div>
    )
}

export default Home