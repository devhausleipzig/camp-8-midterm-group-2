import { NavLink, Outlet } from "react-router-dom";
import clsx from "clsx";
import {
  HomeIcon,
  FilmIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

export function NavBar() {
  return (
    <div>
      <Outlet />
      <nav className="flex content-center justify-evenly text-dark-light bg-dark w-screen">
        {/* {["/", "/movies", "/queue", "/user"].map((linkTarget) => {
          return (
            <NavLink
              to={linkTarget}
              className={({ isActive }) => clsx(isActive && "text-white")}
            >
              <HomeIcon className="w-5 h-5 m-5"></HomeIcon>
            </NavLink>
          );
        })} */}
        <NavLink
          to="/"
          className={({ isActive }) => clsx(isActive && "text-white")}
        >
          <HomeIcon className="w-5 h-5 m-5"></HomeIcon>
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) => clsx(isActive && "text-white")}
        >
          <FilmIcon className="w-5 h-5 m-5"></FilmIcon>
        </NavLink>
        <NavLink
          to="/queue"
          className={({ isActive }) => clsx(isActive && "text-white")}
        >
          <QueueListIcon className="w-5 h-5 m-5" />
        </NavLink>
        <NavLink
          to="/user"
          className={({ isActive }) => clsx(isActive && "text-white")}
        >
          <UserIcon className="w-5 h-5 m-5" />
        </NavLink>
      </nav>
    </div>
  );
}
