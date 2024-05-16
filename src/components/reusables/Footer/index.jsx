import style from "./index.module.css"
import FilledButton from "../FilledButton";
import logo from "../../../assets/footer/Logo.png"
import instagramIcon from "../../../assets/footer/Social Icons.png"
import twitterIcon from "../../../assets/footer/Social Icons3.png"
import youtubeIcon from "../../../assets/footer/Social Icons4.png"
import ballIcon from "../../../assets/footer/Social Icons2.png"

const Footer = () => {
    const date = new Date().getFullYear();
    return (
        <div className={style.mainCont}>
            <div className={style.button}>
                <FilledButton color={"#4CAF4F"} text={"Get a Demo ->"} textColor={"#F5F7FA"}/>
            </div>

            <div className={style.blackSection}>
                <div className={style.firstSection}>
                    <img src={logo} alt={"company logo"}/>
                    <p>Copyright © {date} Nexcent ltd.</p>
                    <p>All rights reserved</p>
                    <div className={style.socialIcon}>
                        <img src={instagramIcon} alt={"Instagram Icon"}/>
                        <img src={ballIcon} alt={"ball Icon"}/>
                        <img src={twitterIcon} alt={"Twitter Icon"}/>
                        <img src={youtubeIcon} alt={"Youtube Icon"}/>
                    </div>
                </div>

                <div className={style.secondSection}>
                    <div>
                        <h4>Company</h4>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>

                    <div>
                        <h4>Support</h4>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>

                    <div>
                        <h4>Stay up to date</h4>
                        <form>
                            <input type={"text"} value={"Your email address  "} />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;