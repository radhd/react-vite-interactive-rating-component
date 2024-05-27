import RoundDiv from "./RoundDiv";
import StarIcon from "./assets/images/icon-star.svg";
import NotificationText from "./NotificationText";
import OrangeButton from "./OrangeButton";

function Notification() {
  return (
    <div className="container space-y-6 rounded-lg bg-slate-800 p-6 text-white">
      <RoundDiv imageIcon={<img src={StarIcon} alt="star" />} />
      <NotificationText
        titleText={"How did we do?"}
        paragraphText={
          "Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
        }
      />
      <div className="flex gap-4">
        <RoundDiv number={<p>1</p>} />
        <RoundDiv number={<p>2</p>} />
        <RoundDiv number={<p>3</p>} />
        <RoundDiv number={<p>4</p>} />
        <RoundDiv number={<p>5</p>} />
      </div>
      <OrangeButton btnText={"Submit"} />
    </div>
  );
}

export default Notification;
