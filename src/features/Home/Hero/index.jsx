import style from "./index.module.css"
import FilledButton from "../../../components/reusables/FilledButton";
import heroImg from "../../../assets/home/Illustration.png"
import {useState} from "react";

const Hero = () => {
    return(
        <div className={style.mainCont}>
            <div className={style.leftCont}>
                <h1>Lessons and insights
                    <span  style={{display: "block", color: "#4CAF4F"}}>from 8 years</span>
                </h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <FilledButton color={"#4CAF4F"} text={"Register"} textColor={"#F5F7FA"}/>
            </div>

            <div className={style.rightCont}>
                <img src={heroImg} alt={"man with computer"}/>
            </div>
        </div>
    )
}
export default Hero;