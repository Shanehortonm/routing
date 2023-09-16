import { useLoaderData, Link } from "react-router-dom";

export const Careers = () => {
  const careerData = useLoaderData();

  return (
    <div className="careers">
      {careerData.map((career) => (
        <Link to="/" key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  );
};

// Loader Function
export const careersLoader = async () => {
  const res = await fetch("http://localhost:4000/careers");

  return res.json();
};
