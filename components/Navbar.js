import Link from "next/link";
import {useRouter} from "next/router";
import classNames from "classnames";

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Test App</a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item"><Link href="/"><a className={classNames(['nav-link', {active: router.asPath === "/"}])}>Home</a></Link></li>
                        <li className="nav-item"><Link href="/about"><a className={classNames(['nav-link', {active: router.asPath === "/about"}])}>About</a></Link></li>
                        <li className="nav-item"><Link href="/users"><a className={classNames(['nav-link', {active: router.asPath === "/users"}])}>Users</a></Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
