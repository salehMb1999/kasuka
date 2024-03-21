export default function Contact() {
  return (
    <div className="container mx-auto px-3 py-10 font-iranSansMed">
      <div className="mb-20 flex flex-col items-start justify-start gap-3">
        <span className="relative text-slate-500 before:absolute before:right-20 before:top-1/2 before:h-0.5 before:w-32 before:-translate-y-1/2 before:bg-[#ffc451]">
          تماس با ما
        </span>
        <h2 className="text-3xl">با ما تماس بگیرید</h2>
      </div>
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-0">
        <div className="flex w-full flex-col items-start justify-start gap-10 md:w-1/3">
          <div className="flex items-start justify-start gap-3">
            <i className="fa-solid fa-location-dot flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffc451] text-2xl leading-6 md:h-16 md:w-16"></i>
            <div className="flex flex-col items-start justify-start md:gap-2">
              <h3 className="text-xl md:text-2xl">مکان:</h3>
              <p className="text-sm md:text-base">تهران خیابان آزادی</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-3">
            <i
              className="fa fa-envelope flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffc451] text-2xl leading-6 md:h-16 md:w-16"
              aria-hidden="true"
            ></i>

            <div className="flex flex-col items-start justify-start md:gap-2">
              <h3 className="text-xl md:text-2xl">ایمیل:</h3>
              <p className="text-sm md:text-base">info@example.com</p>
            </div>
          </div>
          <div className="flex items-start justify-start gap-3">
            <i
              className="fa fa-phone flex h-12 w-12 items-center justify-center rounded-lg bg-[#ffc451] text-2xl leading-6 md:h-16 md:w-16"
              aria-hidden="true"
            ></i>

            <div className="flex flex-col items-start justify-start md:gap-2">
              <h3 className="text-xl md:text-2xl">شماره تماس:</h3>
              <p className="text-sm md:text-base">0123467889</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-stretch gap-8 md:w-2/3">
          <div className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
            <input
              className=" w-full rounded-lg border-2 border-slate-300 px-5 py-3 outline-[#ffc451] md:w-1/2"
              placeholder="نام"
              type="text"
            />
            <input
              className=" w-full rounded-lg border-2 border-slate-300 px-5 py-3 outline-[#ffc451] md:w-1/2"
              placeholder="ایمیل"
              type="text"
            />
          </div>
          <input
            className="rounded-lg border-2 border-slate-300 px-5 py-3 outline-[#ffc451]"
            placeholder="عنوان"
            type="text"
          />
          <textarea
            className="rounded-lg border-2 border-slate-300 px-5 py-3 outline-[#ffc451]"
            placeholder="پیام"
            rows="5"
          ></textarea>
          <button className="self-center rounded-md bg-[#ffc451] px-5 py-3">
            ارسال پیام
          </button>
        </div>
      </div>
    </div>
  );
}
