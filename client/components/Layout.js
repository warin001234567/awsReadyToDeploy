import Navbar from "./Navbar";
import { Helmet } from "react-helmet";

const Layout = (props) => (
  <div>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;
