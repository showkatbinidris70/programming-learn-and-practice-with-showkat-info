import { Outlet, Link } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <ul className="d-flex gap-4 text-decoration-none list-unstyled">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/use-state">Use State</Link>
          </li>
          <li>
            <Link to="/use-effect">Use Effect</Link>
          </li>
          <li>
            <Link to="/use-ref">Use Ref</Link>
          </li>
          <li>
            <Link to="/use-reducer">Use Reducer</Link>
          </li>
          <li>
            <Link to="/use-memo">Use Memo</Link>
          </li>
          <li>
            <Link to="/use-callback">Use Callback</Link>
          </li>
          <li>
            <Link to="/use-context">Use Context</Link>
          </li>
          <li>
            <Link to="/use-params">Blogs/UseParams</Link>
          </li>
          <li>
            <Link to="/use-location">useLocation</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}
