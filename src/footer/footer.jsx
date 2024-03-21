export default function Footer() {
  return (
    <div className="font-iranSansMed">
      <div className="border-b-2 border-b-[#222222] bg-[#151515]">
        <div className="container mx-auto flex  w-full flex-wrap items-start justify-center gap-y-10 px-3 py-14 md:justify-between xl:gap-x-10">
          <div className="flex w-full flex-col items-center gap-5 text-white md:w-1/2 md:items-start xl:w-[calc(33.3333%-2.5rem)]">
            <div className="flex items-center justify-start">
              <div className="w-24">
                <img
                  className="w-full"
                  src="./src/public/images/logo.png"
                  alt="logo"
                />
              </div>
              <h2 className="text-3xl">KASUKA</h2>
            </div>
            <div className="flex flex-col gap-1">
              <p>تهران خیابان آزادی</p>
              <p>تلفن: 01234567895</p>
              <p>ایمیل: info@example.com</p>
            </div>
            <div className="flex items-center justify-start gap-5">
              <i className="fa-brands fa-linkedin cursor-pointer rounded-md bg-[#292929] p-2 text-lg leading-[1.125rem] duration-300 ease-in-out hover:bg-[#ffc451] hover:text-black"></i>
              <i className="fa-brands fa-skype cursor-pointer rounded-md bg-[#292929] p-2 text-lg leading-[1.125rem] duration-300 ease-in-out hover:bg-[#ffc451] hover:text-black"></i>
              <i className="fa-brands fa-instagram cursor-pointer rounded-md bg-[#292929] p-2 text-lg leading-[1.125rem] duration-300 ease-in-out hover:bg-[#ffc451] hover:text-black"></i>
              <i className="fa-brands fa-facebook cursor-pointer rounded-md bg-[#292929] p-2 text-lg leading-[1.125rem] duration-300 ease-in-out hover:bg-[#ffc451] hover:text-black"></i>
              <i className="fa-brands fa-twitter cursor-pointer rounded-md bg-[#292929] p-2 text-lg leading-[1.125rem] duration-300 ease-in-out hover:bg-[#ffc451] hover:text-black"></i>
            </div>
          </div>
          <div className="flex w-full items-start gap-5 md:w-1/2 md:justify-center md:gap-14 xl:w-[calc(33.3333%-2.5rem)]">
            <div className="flex w-full flex-col items-start justify-start gap-5 text-white">
              <p className="text-xl">لینک های مفید</p>
              <ul className="flex w-full flex-col items-start gap-5">
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    خانه
                  </a>
                </li>
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    درباره ما
                  </a>
                </li>
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    خدمات
                  </a>
                </li>
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    شرایط استفاده از خدمات
                  </a>
                </li>
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    سیاست حفظ حریم خصوصی
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex w-full flex-col items-start justify-start gap-5 text-white">
              <p className="text-xl">خدمات ما</p>
              <ul className="flex w-full flex-col items-start gap-5">
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    طراحی وب سایت
                  </a>
                </li>
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    توسعه وب
                  </a>
                </li>
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    مدیریت تولید
                  </a>
                </li>
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    بازاریابی
                  </a>
                </li>
                <li className="flex items-center justify-start">
                  <i
                    className="fa fa-angle-left selected"
                    aria-hidden="true"
                  ></i>
                  <a
                    className="hover:selected mr-1.5 duration-300 ease-in-out hover:mr-2.5"
                    href="#"
                  >
                    طراحی گرافیک
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-start gap-8 text-center text-white md:items-start md:text-right xl:w-[calc(33.3333%-2.5rem)]">
            <h4 className="text-xl">خبرنامه</h4>
            <p className="w-3/4">
              با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
              بود
            </p>
            <div className="flex w-3/4 items-center justify-stretch overflow-hidden rounded-md sm:w-96">
              <input className="w-3/4 px-3 py-2" type="text" />
              <button className="w-32 bg-[#ffc451] px-3 py-2  text-black">
                دنبال کردن
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-3 py-5">
          <p>
            <span>KASUKA</span> همه حقوق محفوظ است
          </p>
          <p>
            طراحی شده توسط{" "}
            <a
              className="selected"
              href="https://www.linkedin.com/in/seyed-saleh-mirbagheri-426882233/"
            >
              saleh
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
