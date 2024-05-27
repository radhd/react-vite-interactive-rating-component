

function RoundDiv({ imageIcon, number, onClick, isActive }) {
  const hasIcon = !!imageIcon;

  return (
    <div
      className={`flex h-10 w-10  items-center justify-center rounded-full ${isActive ? "bg-primaryOrange" : "bg-neutralDarkBlue"} text-neutralMediumGrey ${!hasIcon && "cursor-pointer hover:bg-slate-100"}`}
      onClick={onClick}
    >
      {imageIcon}
      {number}
    </div>
  );
}
export default RoundDiv;
