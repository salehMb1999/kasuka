export default function Boxes() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 rounded-md border p-4 text-center text-white  duration-300 ease-in-out hover:border-[#ffc451] md:w-1/4 lg:w-1/6 lg:px-10 lg:py-4">
      <i className="fa fa-home text-xl text-[#ffc451]" aria-hidden="true"></i>
      <p className="cursor-pointer text-xl duration-300 ease-in-out hover:text-[#ffc451]">
        متن نمایشی
      </p>
    </div>
  );
}
