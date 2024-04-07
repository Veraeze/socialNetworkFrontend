import style from "./index.module.css"
import firstRow from "../../../assets/home/reinvent/Row 1.png"
import secondRow from "../../../assets/home/reinvent/Row 2.png"
const Reinvent = () => {
    return(
        <div className={style.mainCont}>
            <div className={style.leftCont}>
                <h1>Helping a local
                    <span style={{display: "block", color: "#4CAF4F"}}>business reinvent itself</span>
                </h1>
                <p>We reached here with our hard work and dedication</p>
            </div>

            <div className={style.rightCont}>
                <img src={firstRow} alt={"first row"}/>
                <img src={secondRow} alt={"second row"}/>
            </div>
        </div>
    )
}
export default Reinvent;