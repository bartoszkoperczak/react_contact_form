import { useState } from "react";
import { Tel } from "./Tel";
import "./Person.css";

export const Person = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className={isExpanded ? "active" : ""}>
      <h2> {props.name}</h2>
      <button onClick={() => setIsExpanded((prev) => !prev)}>
        {isExpanded ? "Ukryj" : "Pokaż"}
      </button>
      {isExpanded && (
        <>
          <h3>
            Tel: <Tel tel={props.tel} />
          </h3>
          {props.city !== undefined ? <h3> Miasto: {props.city}</h3> : null}
        </>
      )}
    </li>
  );
};
