import { MouseEvent } from "react";

export default function ListGroup() {
  let cities = ["Kigali", "Abuja", "Luanda", "Cairo", "khartum"];
  //   cities = [];

  const handleclick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>Cities</h1>
      {cities.length === 0 && <p>No city found</p>}
      <ul className="list-group">
        {cities.map((citie, index) => (
          <li
            className="list-group-item active"
            key={citie}
            onClick={handleclick}
          >
            {citie}
          </li>
        ))}
      </ul>
    </>
  );
}
