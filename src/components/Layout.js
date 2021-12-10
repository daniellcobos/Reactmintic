import Nav from "./Nav";
import {Fragment} from 'react';

const Layout = (props) => {
    return(
        <Fragment>
        <Nav/>
        <main>{props.children}</main>
    </Fragment>
    )
  
}
export default Layout;