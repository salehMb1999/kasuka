import Boxes from "./headerBoxes";
import Nav from "./nav";
Boxes;
export default function Header() {
  return (
    <div className="overflow-hidden font-iranSansMed">
      <Nav />
      <div className="relative h-[91vh] w-screen bg-[url('/src/public/images/hero-bg.jpg')] from-slate-500 to-slate-500 bg-cover bg-fixed bg-top bg-no-repeat py-14 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[rgba(0,0,0,.6)]">
        <div className="container relative z-0 mx-auto flex h-full flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-20 text-white">
            <div className="flex flex-col items-center justify-center gap-5">
              <p className="text-5xl">راه حل های قدرتمند دیجیتال با</p>
              <p className="selected text-5xl">KASUKA</p>
              <p className="text-2xl">
                ما تیمی از بازاریابان با استعداد دیجیتال هستیم
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10">
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
