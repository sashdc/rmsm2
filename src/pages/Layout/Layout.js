import { Outlet } from "react-router-dom";
import Landing from "../Landing/Landing";
import AboutNav from "../../components/navtabs/AboutNav";
import ContactNav from "../../components/navtabs/ContactNav";
import PartnersNav from "../../components/navtabs/PartnersNav";
import ProductsNav from "../../components/navtabs/ProductsNav";


const Layout = () => {
  return (
    <>
      <AboutNav />
      <ContactNav />
      <PartnersNav />
      <ProductsNav />
      <Landing />
      <Outlet />
    </>
  );
};

export default Layout;