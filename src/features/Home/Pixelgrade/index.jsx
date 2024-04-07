import style from "./index.module.css"
import FilledButton from "../../../components/reusables/FilledButton";
import pixelImg from "../../../assets/home/pixel/Frame 35.png"

const Pixel = () => {
    return(
        <div className={style.mainCont}>
            <div className={style.leftCont}>
                <img src={pixelImg} alt={"man and woman"}/>


            </div>

            <div className={style.rightCont}>
                <h1>The unseen of spending three
                    <span style={{display: "block"}}>years at Pixelgrade</span>
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
                    Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
                    Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                    Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <FilledButton color={"#4CAF4F"} text={"Learn More"} textColor={"#F5F7FA"}/>
            </div>
        </div>
    )
}
export default Pixel;