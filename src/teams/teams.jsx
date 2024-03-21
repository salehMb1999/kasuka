import TeamMembers from "./teamMembers";
export default function Teams() {
  return (
    <div className="container mx-auto px-3 pb-20 pt-10 font-iranSansMed">
      <div className="flex flex-col items-start justify-start gap-3">
        <span className="relative text-slate-500 before:absolute before:right-8 before:top-1/2 before:h-0.5 before:w-32 before:-translate-y-1/2 before:bg-[#ffc451]">
          تیم
        </span>
        <h2 className="text-3xl">تیم ما را بررسی کنید</h2>
      </div>
      <div className="flex w-full flex-wrap items-center justify-between gap-5  pt-10">
        <TeamMembers />
        <TeamMembers />
        <TeamMembers />
        <TeamMembers />
      </div>
    </div>
  );
}
