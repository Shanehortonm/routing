import { NavLink, Outlet } from "react-router-dom";

export const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h2>Website Help</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, vel.
      </p>

      <nav>
        <NavLink to="faq">View the FAQ's</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
};
