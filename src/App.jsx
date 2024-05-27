import Notification from "./Notification";
import Thanks from "./Thanks";
import { useState } from "react";

function App() {
  const [showThanks, setShowThanks] = useState(false);

  const handleClick = (value) => {
    setShowThanks(value);
  };
  return (
    <div className="flex h-screen place-items-center bg-neutralVeryDarkBlue px-6">
      {showThanks ? <Thanks /> : <Notification onClick={handleClick} />}
    </div>
  );
}

export default App;
