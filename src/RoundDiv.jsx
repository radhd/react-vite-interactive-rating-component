function RoundDiv({ imageIcon, number }) {
  const hasIcon = !!imageIcon;

  console.log(hasIcon);
  return (
    <div
      className={`flex h-10 w-10  items-center justify-center rounded-full bg-neutralDarkBlue text-neutralMediumGrey ${!hasIcon && "cursor-pointer hover:bg-slate-100"}`}
    >
      {imageIcon}
      {number}
    </div>
  );
}
export default RoundDiv;
