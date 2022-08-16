import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({children}) => {
    return (<>
        <Navbar/>
        <main className="container-fluid flex-shrink-0">
            {children}
        </main>
        <Footer/>
    </>)
}


export default MainLayout;
