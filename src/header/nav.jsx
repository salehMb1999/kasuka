export default function Nav() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 bg-black font-iranSansMed">
      <div className="container mx-auto flex items-center justify-between bg-black p-3">
        <div className="cursor-pointer text-3xl text-white">
          <h1>KASUKA</h1>
        </div>
        <ul className="hidden items-center justify-center gap-10 text-white lg:flex">
          <li className="hover:selected selected py-3 duration-300 ease-in-out">
            <a href="#">خانه</a>
          </li>
          <li className="hover:selected py-3 duration-300 ease-in-out">
            <a href="#">درباره ما</a>
          </li>
          <li className="hover:selected py-3 duration-300 ease-in-out">
            <a href="#">خدمات</a>
          </li>
          <li className="hover:selected py-3 duration-300 ease-in-out">
            <a href="#">نمونه کارها</a>
          </li>
          <li className="hover:selected py-3 duration-300 ease-in-out">
            <a href="#">تیم</a>
          </li>
          <li className="hover:selected group/nav relative flex items-center justify-center gap-2 py-3 duration-300 ease-in-out">
            <a href="#">لیست کشویی</a>
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
            <ul className="invisible absolute top-28 flex w-48  flex-col items-stretch justify-center gap-1 bg-white py-2 text-black opacity-0 duration-300 ease-in-out group-hover/nav:visible group-hover/nav:top-12 group-hover/nav:opacity-100">
              <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                <a href="#">لیست کشویی 1</a>
              </li>
              <li className="group/sub flex items-center justify-start gap-2 px-4 py-2 hover:bg-[#ffc451]">
                <a href="#">لیست کشویی عمیق</a>
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
                <ul className="invisible absolute right-64 top-12 flex w-48 flex-col  items-stretch justify-center gap-2 bg-white py-2 text-black opacity-0 shadow-md duration-200 ease-in-out group-hover/sub:visible group-hover/sub:right-48 group-hover/sub:opacity-100">
                  <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                    <a href="#">لیست کشویی عمیق 1</a>
                  </li>
                  <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                    <a href="#">لیست کشویی عمیق 2</a>
                  </li>
                  <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                    <a href="#">لیست کشویی عمیق 3</a>
                  </li>
                  <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                    <a href="#">لیست کشویی عمیق 4</a>
                  </li>
                  <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                    <a href="#">لیست کشویی عمیق 5</a>
                  </li>
                </ul>
              </li>
              <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                <a href="#">لیست کشویی 2</a>
              </li>
              <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                <a href="#">لیست کشویی 3</a>
              </li>
              <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                <a href="#">لیست کشویی 4</a>
              </li>
            </ul>
          </li>
          <li className="hover:selected py-3 duration-300 ease-in-out">
            <a href="#">تماس با ما</a>
          </li>
        </ul>
        <div>
          <div className="flex items-center justify-center gap-3">
            <button className="text flex items-center justify-center rounded-lg border-2 border-[#ffc451] px-4 py-1 text-white duration-300 ease-in-out hover:bg-[#ffc451] hover:text-black">
              شروع
            </button>
            <a
              className="text-2xl text-white duration-300 ease-in-out lg:hidden"
              href="#"
            >
              <i className="fa fa-align-justify" aria-hidden="true"></i>
            </a>
          </div>
          <div className="absolute left-0 right-0 top-0 hidden h-screen bg-white md:hidden">
            <a
              className="absolute left-10 top-10 rounded-full border-2 p-2 text-xl"
              href="#"
            >
              <i className="fa fa-times " aria-hidden="true"></i>
            </a>
            <ul className="flex flex-col items-stretch justify-start gap-5 p-20 text-black">
              <li className="flex items-center justify-stretch px-3 py-2 hover:bg-[#ffc451]">
                <a className="w-full" href="#">
                  خانه
                </a>
              </li>
              <li className="flex items-center justify-stretch px-3 py-2 hover:bg-[#ffc451]">
                <a className="w-full" href="#">
                  درباره ما
                </a>
              </li>
              <li className="flex items-center justify-stretch px-3 py-2 hover:bg-[#ffc451]">
                <a className="w-full" href="#">
                  خدمات
                </a>
              </li>
              <li className="flex items-center justify-stretch px-3 py-2 hover:bg-[#ffc451]">
                <a className="w-full" href="#">
                  نمونه کارها
                </a>
              </li>
              <li className="flex items-center justify-stretch px-3 py-2 hover:bg-[#ffc451]">
                <a className="w-full" href="#">
                  تیم
                </a>
              </li>
              <li className="flex items-center justify-stretch px-3 py-2 hover:bg-[#ffc451]">
                <a className="w-full" href="#">
                  لیست کشویی
                </a>
              </li>
              <li className="flex items-center justify-stretch px-3 py-2 hover:bg-[#ffc451]">
                <a className="w-full" href="#">
                  تماس با ما
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
