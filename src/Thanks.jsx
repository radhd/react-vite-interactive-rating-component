import NotificationText from "./NotificationText";
import ThanksImage from "./assets/images/illustration-thank-you.svg";

function Thanks() {
  return (
    <div className="container mx-auto  max-w-96 space-y-6 rounded-lg  bg-slate-800 p-6 text-center text-white">
      <img className="mx-auto" src={ThanksImage} alt="Printer illustration" />
      <SelectedScore />
      <NotificationText
        titleText={"Thank you!"}
        paragraphText={
          "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!"
        }
      />
    </div>
  );

  function SelectedScore() {
    return <p className="text-primaryOrange">You selected 4 out of 5</p>;
  }
}

export default Thanks;
