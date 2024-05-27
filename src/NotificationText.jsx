function NotificationText({ titleText, paragraphText }) {
  return (
    <div>
      <h1 className=" mb-3 text-2xl">{titleText}</h1>
      <p className="text-sm text-neutralLightGrey">{paragraphText}</p>
    </div>
  );
}

export default NotificationText;
