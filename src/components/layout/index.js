import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="">
      <header className="flex items-center justify-between shadow py-3 px-3">
        <h1 className="text-2xl font-bold">Cities</h1>
        <div>
          <Link to="/cities" className="pl-3">
            Cities
          </Link>
          <Link to="/newCity" className="pl-3">
            New City
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
