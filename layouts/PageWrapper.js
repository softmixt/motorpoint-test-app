import Footer from "../components/Footer";
import Head from "next/head";

const PageWrapper = ({children, title}) => {
    return (<>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>{title}</title>
        </Head>
        <div className="container">
            <h1 className="mt-5">{title}</h1>
            {children}
        </div>
    </>)
}


export default PageWrapper;
