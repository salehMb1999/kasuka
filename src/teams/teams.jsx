import TeamMembers from "./teamMembers";
export default function Teams() {
  const allEmployees = [
    {
      id: 1,
      image: "src/public/images/team-1.jpg",
      name: "والتر وایت",
      job: "مدیر ارشد اجرایی",
    },
    {
      id: 2,
      image: "src/public/images/team-2.jpg",
      name: "سارا جونسون",
      job: "مدیر تولید",
    },
    {
      id: 3,
      image: "src/public/images/team-3.jpg",
      name: "ویلیام اندرسون",
      job: "CTO",
    },
    {
      id: 4,
      image: "src/public/images/team-4.jpg",
      name: "آماندا جپسون",
      job: "حسابدار",
    },
  ];
  return (
    <div className="container mx-auto px-3 pb-20 pt-10 font-iranSansMed">
      <div className="flex flex-col items-start justify-start gap-3">
        <span className="relative text-slate-500 before:absolute before:right-8 before:top-1/2 before:h-0.5 before:w-32 before:-translate-y-1/2 before:bg-[#ffc451]">
          تیم
        </span>
        <h2 className="text-3xl">تیم ما را بررسی کنید</h2>
      </div>
      <div className="flex w-full flex-wrap items-center justify-between gap-5  pt-10">
        <TeamMembers {...allEmployees[0]} />
        <TeamMembers {...allEmployees[1]} />
        <TeamMembers {...allEmployees[2]} />
        <TeamMembers {...allEmployees[3]} />
      </div>
    </div>
  );
}
