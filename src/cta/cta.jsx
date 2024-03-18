export default function Cta() {
  return (
    <div className="relative my-20 h-80 bg-[url('/src/public/images/cta-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat font-iranSansMed before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[rgba(0,0,0,.6)] before:from-slate-500 before:to-slate-500">
      <div className="container relative mx-auto flex h-full flex-col items-center justify-center gap-5 px-3 py-10 text-white">
        <h2 className="text-3xl">فراخوانی برای اقدام</h2>
        <p>
          اما محکوم کردن درد در فیلم غیرقابل تصور است ، در لذت می خواهد از درد
          سیلوس بودن بدون نتیجه فرار کند. آنها استثنائاتی هستند که کورها به
          دنبال آن هستند ، آنها نمی بینند ، آنها کسانی هستند که مسئولیت های خود
          را به تقصیری واگذار می کنند که سختی های روح را تسکین می دهد.
        </p>
        <a
          className="rounded-md border border-white px-5 py-3 duration-300 ease-in-out hover:border-[#ffc451] hover:bg-[#ffc451] hover:text-black"
          href="#"
        >
          فراخوانی برای اقدام
        </a>
      </div>
    </div>
  );
}
