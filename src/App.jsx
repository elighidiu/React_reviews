import { useState } from "react";
import people from "./data.js";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((curIndex) => {
      const newIndex = curIndex + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((curIndex) => {
      const newIndex = curIndex - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div>
          <div className="btn-container">
            <button type="button" className="prev-btn" onClick={prevPerson}>
              <FaChevronLeft />
            </button>
            <button type="button" className="next-btn" onClick={nextPerson}>
              <FaChevronRight />
            </button>
          </div>
        </div>
      </article>
    </main>
  );
};
export default App;
