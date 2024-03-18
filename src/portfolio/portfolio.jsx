export default function Portfolio() {
  return (
    <div className="container mx-auto px-3 py-10 font-iranSansMed">
      <div className="flex flex-col items-start justify-start gap-3">
        <span className="relative text-slate-500 before:absolute before:right-20 before:top-1/2 before:h-0.5 before:w-32 before:-translate-y-1/2 before:bg-[#ffc451]">
          نمونه کارها
        </span>
        <h2 className="text-3xl">نمونه کارهای ما را بررسی کنید</h2>
      </div>
      <div className="mt-14 flex flex-col items-center">
        <div className="mb-10 flex justify-center gap-10">
          <a
            className="rounded-lg bg-[#ffc451] p-2 duration-300 ease-in-out"
            href="#"
          >
            همه
          </a>
          <a
            className="rounded-lg p-2 duration-300 ease-in-out hover:bg-[#ffc451]"
            href="#"
          >
            برنامه
          </a>
          <a
            className="rounded-lg p-2 duration-300 ease-in-out hover:bg-[#ffc451]"
            href="#"
          >
            محصول
          </a>
          <a
            className="rounded-lg p-2 duration-300 ease-in-out hover:bg-[#ffc451]"
            href="#"
          >
            اینترنت
          </a>
        </div>
        <div className="grid grid-cols-3  gap-10">
          <div className="flex flex-col gap-10">
            <div className="group/img1 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img1:scale-125"
                src="./src/public/images/portfolio-3.jpg"
                alt="portfolio"
              />

              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img1:opacity-100">
                <p className="text-2xl">برنامه 2</p>
                <p className="text-slate-300">برنامه</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="group/img2 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img2:scale-125 "
                src="./src/public/images/portfolio-5.jpg"
                alt="portfolio"
              />
              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img2:opacity-100">
                <p className="text-2xl">اینترنت 2</p>
                <p className="text-slate-300">اینترنت</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group/img3 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img3:scale-125 "
                src="./src/public/images/portfolio-9.jpg"
                alt="portfolio"
              />
              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img3:opacity-100">
                <p className="text-2xl">اینترنت 3</p>
                <p className="text-slate-300">اینترنت</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="group/img4 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img4:scale-125 "
                src="./src/public/images/portfolio-2.jpg"
                alt="portfolio"
              />
              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img4:opacity-100">
                <p className="text-2xl">اینترنت 4</p>
                <p className="text-slate-300">اینترنت</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group/img5 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img5:scale-125 "
                src="./src/public/images/portfolio-4.jpg"
                alt="portfolio"
              />
              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img5:opacity-100">
                <p className="text-2xl">محصول 2</p>
                <p className="text-slate-300">محصول</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group/img6 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img6:scale-125 "
                src="./src/public/images/portfolio-7.jpg"
                alt="portfolio"
              />
              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img6:opacity-100">
                <p className="text-2xl">محصول 1</p>
                <p className="text-slate-300">محصول</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group/img7 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img7:scale-125 "
                src="./src/public/images/portfolio-8.jpg"
                alt="portfolio"
              />
              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img7:opacity-100">
                <p className="text-2xl">محصول 3</p>
                <p className="text-slate-300">محصول</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <div className="group/img8 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img8:scale-125 "
                src="./src/public/images/portfolio-1.jpg"
                alt="portfolio"
              />
              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img8:opacity-100">
                <p className="text-2xl">برنامه 1</p>
                <p className="text-slate-300">برنامه</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="group/img9 relative overflow-hidden duration-300 ease-in-out before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-30 before:bg-[rgba(0,0,0,.6)] before:opacity-0 before:duration-300 before:ease-in-out hover:before:opacity-100">
              <img
                className="w-full duration-300 ease-in-out group-hover/img9:scale-125 "
                src="./src/public/images/portfolio-6.jpg"
                alt="portfolio"
              />
              <div className="absolute bottom-10 right-10 z-50 flex flex-col gap-2 text-white opacity-0 duration-300 ease-in-out group-hover/img9:opacity-100">
                <p className="text-2xl">برنامه 3</p>
                <p className="text-slate-300">برنامه</p>
                <div className="flex gap-4 text-xl">
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </a>
                  <a
                    className="hover:selected duration-300 ease-in-out"
                    href="#"
                  >
                    <i className="fa fa-link" aria-hidden="true"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
