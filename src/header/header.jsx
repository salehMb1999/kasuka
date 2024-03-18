import Boxes from "./headerBoxes";
import Nav from "./nav";
Boxes;
export default function Header() {
  return (
    <div className="overflow-hidden font-iranSansMed">
      <Nav />
      <div className="relative h-auto w-screen bg-[url('/src/public/images/hero-bg.jpg')] bg-cover bg-fixed bg-top bg-no-repeat  py-14 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[rgba(0,0,0,.6)] before:from-slate-500 before:to-slate-500 md:h-[91vh] md:bg-center">
        <div className="container relative mx-auto flex h-full flex-col items-center justify-center p-3">
          <div className="flex flex-col items-center justify-center gap-10 pt-20 text-white">
            <div className="flex flex-col items-center justify-center gap-5 text-center">
              <p className="text-3xl lg:text-5xl">
                راه حل های قدرتمند دیجیتال با
              </p>
              <p className="selected text-3xl lg:text-5xl">KASUKA</p>
              <p className="text-2xl">
                ما تیمی از بازاریابان با استعداد دیجیتال هستیم
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-stretch gap-5 md:justify-center">
              <Boxes />
              <Boxes />
              <Boxes />
              <Boxes />
              <Boxes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
