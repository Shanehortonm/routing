import { useLoaderData, useParams } from "react-router-dom";

export const CareerDetails = () => {
  const { id } = useParams();
  const career = useLoaderData();

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. In voluptates
        aspernatur et quasi exercitationem ullam odio cum tenetur repellat aut.
      </div>
    </div>
  );
};

// loader function
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params;

  const res = await fetch("http://localhost:4000/careers/" + id);

  return res.json();
};
