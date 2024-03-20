export default function Counts() {
  return (
    <div className="container mx-auto px-3 py-20 font-iranSansMed">
      <div className="flex items-start justify-between gap-10">
        <div className="h-[500px] w-1/2 bg-[url('/src/public/images/counts-img.jpg')] bg-cover bg-center bg-no-repeat lg:w-1/2"></div>
        <div className="flex w-1/2 flex-col justify-start gap-10 pt-5">
          <div className="flex flex-col justify-start gap-3">
            <h2 className="text-3xl">
              شایسته ترین لذت را به هرحال ارائه میدهد
            </h2>
            <p className="text-slate-700">
              خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما
              من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود.
              درد مقصر است
            </p>
          </div>
          <div className="flex flex-wrap justify-start gap-10">
            <div className="flex w-2/5 flex-col gap-2">
              <div className="flex items-center justify-start gap-5 text-4xl">
                <i className="fas fa-smile selected"></i>
                <p>65</p>
              </div>
              <p className="text-slate-700">
                مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.
              </p>
            </div>
            <div className="flex w-2/5 flex-col gap-2">
              <div className="flex items-center justify-start gap-5 text-4xl">
                <i className="fa fa-book selected" aria-hidden="true"></i>
                <p>85</p>
              </div>
              <p className="text-slate-700">
                پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او
                تعریف می کنند رد می کند و آنها را حقیر می شمارد
              </p>
            </div>
            <div className="flex w-2/5 flex-col gap-2">
              <div className="flex items-center justify-start gap-5 text-4xl">
                <i className="fas fa-clock selected"></i>
                <p>35</p>
              </div>
              <p className="text-slate-700">
                سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد
              </p>
            </div>
            <div className="flex w-2/5 flex-col gap-2">
              <div className="flex items-center justify-start gap-5 text-4xl">
                <i className="fas fa-award selected"></i>
                <p>20</p>
              </div>
              <p className="text-slate-700">
                جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی
                کند و هیچ وقت او را متهم نمی کند
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
