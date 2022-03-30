import React from "react";

import css from './Layout.module.css'
import Header from './Header/Header'

const Layout = (props) => {
    return (
        <React.Fragment>
            <header>
                <Header />
            </header>
            <main className={css.Body}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout