import NotificationText from "./NotificationText";
import ThanksImage from "./assets/images/illustration-thank-you.svg";

function Thanks({ rating }) {
  return (
    <div className="container mx-auto  max-w-96 space-y-6 rounded-lg  bg-slate-800 p-6 text-center text-white">
      <img className="mx-auto" src={ThanksImage} alt="Printer illustration" />
      <SelectedScore rating={rating} />
      <NotificationText
        titleText={"Thank you!"}
        paragraphText={
          "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        }
      />
    </div>
  );

  function SelectedScore({ rating }) {
    return <p className="text-primaryOrange">You selected {rating} out of 5</p>;
  }
}

export default Thanks;
