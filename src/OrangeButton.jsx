function OrangeButton({ btnText, onClick }) {
  const handleClick = () => {
    onClick();
  };
  return (
    <button
      className=" mb-2 h-11   w-full rounded-3xl bg-primaryOrange text-white hover:bg-slate-100 hover:text-primaryOrange"
      onClick={handleClick}
    >
      {btnText}
    </button>
  );
}

export default OrangeButton;
