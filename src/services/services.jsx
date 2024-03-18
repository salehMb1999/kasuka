import ServicesBoxes from "./servicesBoxes";
export default function Services() {
  return (
    <div className="container mx-auto flex flex-col items-start justify-start gap-12 px-3 pb-20 pt-10 font-iranSansMed">
      <div className="flex flex-col items-start justify-start gap-3">
        <span className="relative text-slate-500 before:absolute before:right-14 before:top-1/2 before:h-0.5 before:w-32 before:-translate-y-1/2 before:bg-[#ffc451]">
          خدمات
        </span>
        <h2 className="text-3xl">خدمات ما را بررسی کنید</h2>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-5 xl:justify-center xl:gap-10">
        <ServicesBoxes />
        <ServicesBoxes />
        <ServicesBoxes />
        <ServicesBoxes />
        <ServicesBoxes />
        <ServicesBoxes />
      </div>
    </div>
  );
}
