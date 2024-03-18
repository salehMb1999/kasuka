export default function ServicesBoxes() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 border px-5 py-16 text-center shadow-md duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg hover:shadow-slate-400 md:w-[320px] xl:w-1/4">
      <i className="fas fa-basketball-ball rounded-xl bg-[#ffc451] p-5 text-2xl"></i>
      <h3 className="hover:selected cursor-pointer text-2xl duration-300 ease-in-out">
        درد های بزرگ
      </h3>
      <p className="text-slate-500">
        برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را
        دریافت خواهند کرد
      </p>
    </div>
  );
}
