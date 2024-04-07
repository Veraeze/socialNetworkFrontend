import style from "./index.module.css"
import designImg from "../../../assets/home/design/pana.png";
import FilledButton from "../../../components/reusables/FilledButton";

const Design = () => {
    return (
        <div className={style.mainCont}>
            <div className={style.leftCont}>
                <img src={designImg} alt={"mobile login"}/>

            </div>

            <div className={style.rightCont}>
                <h1>How to design your site footer like
                    <span style={{display: "block"}}>we did</span>
                </h1>
                <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
                    augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
                    elit erat a magna. Donec quis erat at libero ultrices mollis.
                    In hac habitasse platea dictumst. Vivamus vehicula leo dui,
                    at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies,
                    non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
                    efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit
                    venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <FilledButton color={"#4CAF4F"} text={"Learn More"} textColor={"#F5F7FA"}/>
            </div>
        </div>
    )
}
export default Design;