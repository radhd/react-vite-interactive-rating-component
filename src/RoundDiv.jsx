function RoundDiv({ imageIcon, number }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutralDarkBlue text-neutralMediumGrey">
      {imageIcon}
      {number}
    </div>
  );
}
export default RoundDiv;
