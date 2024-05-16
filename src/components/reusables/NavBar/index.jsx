import style from "./index.module.css"
import Logo from "../../../assets/nav/Logo.jpg"
import FilledButton from "../FilledButton";

const Navbar = () => {
    return (
        <div className={style.mainCont}>
            <img src={Logo} alt={"company logo"}/>

            <div className={style.linkCont}>
                <p>Home</p>
                <p>Service</p>
                <p>Feature</p>
                <p>Product</p>
                <p>Testimonial</p>
                <p>FAQ</p>
            </div>

            <div className={style.thirdSection}>
                <FilledButton color={"#F5F7FA"} text={"Login"} textColor={"#4CAF4F"}/>
                <FilledButton color={"#4CAF4F"} text={"Sign up"} textColor={"#F5F7FA"}/>
            </div>
        </div>
    );
};
export default Navbar;