import style from "./index.module.css"
import {Content} from "../Manage/data";
import {Cont} from "./data";

const Caring = () => {
    return(
        <div className={style.mainCont}>
            <div className={style.words}>
                <h1>Caring is the new marketing</h1>
                <p>The Nexcent blog is the best place to read about the latest membership insights,
                    trends and more. See who's joining the community, read about how our community
                    are increasing their membership income and lot's more.​</p>
            </div>
            <div className={style.markets}>
                    {
                        Cont.map((items, index) => {
                            return (
                                <div key={index}>
                                    <img style={{position: "relative"}} src={items.image} alt={""}/>
                                    <div style={{marginTop:"-125px"}}>
                                    <img style={{position: "absolute",zIndex:"1"}} src={items.secondImage} alt={""}/></div>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}
export default Caring;