import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <h2>Page Not Found</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        nisi voluptatum laudantium molestiae quod possimus expedita suscipit ut
        odit? Necessitatibus?
      </p>

      <p>
        Go to the <Link to="/">Homepage</Link>
      </p>
    </div>
  );
};
