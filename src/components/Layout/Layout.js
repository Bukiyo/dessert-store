import classes from './Layout.module.css';
import { Fragment } from 'react';

const Layout = (props) => {
    return <Fragment>
        <main className={classes.shopLayout}>{props.children}</main>
    </Fragment>
};

export default Layout;