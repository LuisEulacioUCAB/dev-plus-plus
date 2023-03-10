import React, { useEffect } from "react";
import Router from 'next/router'

const Home = () => {
    useEffect(() => {
        const { pathname } = Router;
        if(pathname == '/' ){
            Router.push('/instagram')
        }
    });

    return(
        <h1>Hello HearMe</h1>
    );
}

export default Home;