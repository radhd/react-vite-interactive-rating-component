import Notification from "./Notification";
import Thanks from "./Thanks";
import { useState } from "react";

function App() {
  const [showThanks, setShowThanks] = useState(false);
  const [rating, setRating] = useState(null);

  const handleClick = (value) => {
    setShowThanks(value);
  };
  const handleRating = (value) => {
    setRating(value);
  };
  return (
    <div className="flex h-screen place-items-center bg-neutralVeryDarkBlue px-6">
      {showThanks ? (
        <Thanks rating={rating} />
      ) : (
        <Notification takeIndex={handleRating} onClick={handleClick} />
      )}
    </div>
  );
}

export default App;
