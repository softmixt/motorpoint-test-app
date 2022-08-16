// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css'
import Head from "next/head";
import '../styles/globals.css'
import MainLayout from "../layouts/MainLayout";

function MyApp({Component, pageProps}) {
    return (<>
        <MainLayout>
            <Component {...pageProps}/>
        </MainLayout>
    </>);
}

export default MyApp
