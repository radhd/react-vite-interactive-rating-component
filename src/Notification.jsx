import RoundDiv from "./RoundDiv";
import StarIcon from "./assets/images/icon-star.svg";
import NotificationText from "./NotificationText";
import OrangeButton from "./OrangeButton";
import { useState } from "react";

function Notification({ onClick }) {
  const handleClick = () => {
    onClick(true);
  };
  const [active, setActive] = useState(-1);

  const handleItemClick = (index) => {
    setActive(index);
  };

  return (
    <div className="container mx-auto  max-w-96 space-y-6 rounded-lg  bg-slate-800 p-6 text-white">
      <RoundDiv imageIcon={<img src={StarIcon} alt="star" />} />
      <NotificationText
        titleText={"How did we do?"}
        paragraphText={
          "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        }
      />
      <div className="flex gap-4">
        {[1, 2, 3, 4, 5].map((num, index) => (
          <RoundDiv
            key={index}
            number={<p>{num}</p>}
            isActive={active === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
      <OrangeButton btnText={"Submit"} onClick={handleClick} />
    </div>
  );
}

export default Notification;
