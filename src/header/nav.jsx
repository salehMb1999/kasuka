export default function Nav() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 bg-black font-iranSansMed">
      <div className="container mx-auto flex items-center justify-between bg-black py-2">
        <div className="cursor-pointer text-3xl text-white">
          <h1>KASUKA</h1>
        </div>
        <ul className="flex items-center justify-center gap-10 text-white">
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
            <ul className="invisible absolute top-28 flex w-48  flex-col items-stretch justify-center gap-5 bg-white py-2 text-black opacity-0 duration-300 ease-in-out group-hover/nav:visible group-hover/nav:top-12 group-hover/nav:opacity-100">
              <li className="flex items-center justify-start px-4 py-2 hover:bg-[#ffc451]">
                <a href="#">لیست کشویی 1</a>
              </li>
              <li className="flex items-center justify-start gap-2 px-4 py-2 hover:bg-[#ffc451]">
                <a href="#">لیست کشویی عمیق</a>
                <i className="fa fa-chevron-left" aria-hidden="true"></i>
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
          <button className="text flex items-center justify-center rounded-lg border-2 border-[#ffc451] px-4 py-1 text-white duration-300 ease-in-out hover:bg-[#ffc451] hover:text-black">
            شروع
          </button>
        </div>
      </div>
    </div>
  );
}
