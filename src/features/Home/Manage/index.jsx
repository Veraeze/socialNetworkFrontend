import style from "./index.module.css"
import {Content} from "./data";
const Manage = () => {
    return(
        <div className={style.mainCont}>
            <h1>Manage your entire community
                <span style={{display: "block"}}>in a single system</span>
            </h1>
            <p>Who is Nextcent suitable for?</p>
            <div className={style.suits}>
                {
                    Content.map((items, index) => {
                        return (
                            <div style={{flexDirection: "column", display: "flex", textAlign: "center", alignItems: "center", justifyContent: "center"}} key={index}>
                                <img src={items.image} alt={""}/>
                                <h2 style={{color: "#4D4D4D", fontSize: "28px"}}>{items.title}</h2>
                                <h4 style={{fontSize: "14px"}}>{items.definition}</h4>
                            </div>

                        )
                    })

                }
            </div>
        </div>
    )
}
export default Manage;