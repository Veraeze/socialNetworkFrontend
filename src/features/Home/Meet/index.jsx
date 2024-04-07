import style from "./index.module.css"
import meetImg from "../../../assets/home/meet/image 9.png";
import first from "../../../assets/home/meet/Logo (1).png"
import second from "../../../assets/home/clientsIcons/Logo (2).png"
import third from "../../../assets/home/clientsIcons/Logo (3).png"
import fourth from "../../../assets/home/clientsIcons/Logo (4).png"
import fifth from "../../../assets/home/clientsIcons/Logo (5).png"
import sixth from "../../../assets/home/clientsIcons/Logo (6).png"
import FilledButton from "../../../components/reusables/FilledButton";

const Meet = () => {
    return (
        <div className={style.mainCont}>
            <div className={style.leftCont}>
                <img src={meetImg} alt={"mobile login"}/>

            </div>

            <div className={style.rightCont}>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui,
                    vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero
                    ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit
                    elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit.
                    Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales.
                    Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
                    Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque
                    vulputate odio neque, eget efficitur libero condimentum id. Curabitur id
                    nibh id sem dignissim finibus ac sit amet magna.</p>
                <h2 style={{color: "#4CAF4F", fontSize: "20px"}}>Tim Smith</h2>
                <p>British Dragon Boat Racing Association</p>
                <div className={style.logos}>
                    <img src={first} alt={"First Client Icon"}/>
                    <img src={second} alt={"second Client Icon"}/>
                    <img src={third} alt={"third Client Icon"}/>
                    <img src={fourth} alt={"Fourth Client Icon"}/>
                    <img src={fifth} alt={"Fifth Client Icon"}/>
                    <img src={sixth} alt={"sixth Client Icon"}/>
                    <h2 style={{color: "#4CAF4F"}}>Meet all customers -></h2>
                </div>
            </div>
        </div>
    )
}
export default Meet;