import Navbar from "../reusables/NavBar/index";
import {Outlet} from "react-router-dom";
import Footer from "../reusables/Footer/index";
const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );

}
export default Layout;