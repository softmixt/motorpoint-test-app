import {useRouter} from "next/router";
import Link from "next/link";
import classNames from "classnames";

const Footer = () => {
    const router = useRouter();

    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>
                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link href="/"><a className={classNames(['nav-link', 'px-2', 'text-muted', {active: router.asPath === "/"}])}>Home</a></Link></li>
                    <li className="nav-item"><Link href="/about"><a className={classNames(['nav-link','px-2', 'text-muted', {active: router.asPath === "/about"}])}>About</a></Link></li>
                    <li className="nav-item"><Link href="/users"><a className={classNames(['nav-link','px-2', 'text-muted', {active: router.asPath === "/users"}])}>Users</a></Link></li>
                </ul>
            </footer>
        </div>

    );
}

export default Footer;
