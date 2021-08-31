import React, {Fragment} from 'react'
import Header from '../../Layout/Header/Header';
import Footer from '../../Layout/Footer/Footer';

const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            {props.children}
            <Footer/>
        </Fragment>
    )
}

export default Layout