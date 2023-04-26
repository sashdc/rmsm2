import { Outlet } from "react-router-dom";
import Landing from "../Landing/Landing";
// import AboutNav from "../../components/navtabs/AboutNav";
// import ContactNav from "../../components/navtabs/ContactNav";
// import PartnersNav from "../../components/navtabs/PartnersNav";
// import ProductsNav from "../../components/navtabs/ProductsNav";
// import HomeNav from "../../components/navtabs/HomeNav";
import NavBar from "../../components/NavBar";


const Layout = () => {
  return (
    <>
      <NavBar />
      <Landing />
      <Outlet />
    </>
  );
};

export default Layout;