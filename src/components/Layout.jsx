import { Outlet, Link } from 'react-router-dom';
import { ScrollToTop } from './ScrollToTop';

function Layout() {
    return (
        <>
            <nav className="teal darken-4">
                <div className="nav-wrapper">
                    <Link to="/" className="brand-logo">
                        Cookbook
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="https://github.com/komckoff/react-cookbook">Repo</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="container content">
                <Outlet />
                <ScrollToTop />
            </main>

            <footer className="page-footer teal darken-4">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="https://github.com/komckoff">
                        Coded by Denis Komkov
                    </a>
                </div>
            </footer>
        </>
    );
}

export { Layout };
