import style from "./index.module.css"
import first from "../../../assets/home/clientsIcons/Logo (1).png"
import second from "../../../assets/home/clientsIcons/Logo (2).png"
import third from "../../../assets/home/clientsIcons/Logo (3).png"
import fourth from "../../../assets/home/clientsIcons/Logo (4).png"
import fifth from "../../../assets/home/clientsIcons/Logo (5).png"
import sixth from "../../../assets/home/clientsIcons/Logo (6).png"
import seventh from "../../../assets/home/clientsIcons/Logo (7).png"


const Client = () => {
    return(
        <div className={style.mainCont}>

                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>

            <div className={style.clientIcon}>
                <img src={first} alt={"First Client Icon"}/>
                <img src={second} alt={"second Client Icon"}/>
                <img src={third} alt={"third Client Icon"}/>
                <img src={fourth} alt={"Fourth Client Icon"}/>
                <img src={fifth} alt={"Fifth Client Icon"}/>
                <img src={sixth} alt={"sixth Client Icon"}/>
                <img src={seventh} alt={"seventh Client Icon"}/>


            </div>
        </div>
    )
}
export default Client;