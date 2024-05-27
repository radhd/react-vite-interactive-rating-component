function OrangeButton({ btnText }) {
  return (
    <button className=" mb-2 h-11   w-full rounded-3xl bg-primaryOrange text-white hover:bg-slate-100 hover:text-primaryOrange">
      {btnText}
    </button>
  );
}

export default OrangeButton;
