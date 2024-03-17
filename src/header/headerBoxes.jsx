export default function Boxes() {
  return (
    <div className="font-iranSansMed">
      <div className="flex flex-col items-center justify-center gap-4 rounded-md border px-12 py-10 text-white duration-300 ease-in-out hover:border-[#ffc451]">
        <i className="fa fa-home text-xl text-[#ffc451]" aria-hidden="true"></i>
        <p className="cursor-pointer text-xl duration-300 ease-in-out hover:text-[#ffc451]">
          متن نمایشی
        </p>
      </div>
    </div>
  );
}
