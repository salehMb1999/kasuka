export default function Features() {
  return (
    <div className="container mx-auto flex flex-col items-start justify-between gap-10 px-3 pb-28 pt-10 font-iranSansMed lg:flex-row">
      <div className="h-[500px] w-full bg-[url('/src/public/images/features.jpg')] bg-cover bg-center bg-no-repeat lg:w-1/2"></div>
      <div className="flex flex-col items-start justify-between gap-10 lg:h-[500px] lg:w-1/2 lg:gap-0">
        <div className="flex items-center justify-start gap-5">
          <i className="fas fa-receipt selected text-5xl "></i>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className=" text-xl text-slate-700 lg:text-2xl">
              تبلیغ سختی است
            </p>
            <p className="text-sm text-slate-500 lg:text-base">
              نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5">
          <i className="fa fa-cube selected text-5xl" aria-hidden="true"></i>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className=" text-xl text-slate-700 lg:text-2xl">
              کدام یک از اینهاست
            </p>
            <p className="text-sm text-slate-500 lg:text-base">
              کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات
              خود را رها کرده اند
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5">
          <i className="fas fa-images selected text-5xl "></i>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className=" text-xl text-slate-700 lg:text-2xl">
              یا کور شده است
            </p>
            <p className="text-sm text-slate-500 lg:text-base">
              یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی
              که آنها را بیشتر می کند
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-5">
          <i className="fa fa-shield selected text-5xl" aria-hidden="true"></i>
          <div className="flex flex-col items-start justify-center gap-2">
            <p className=" text-xl text-slate-700 lg:text-2xl">حقیقت مبارک</p>
            <p className="text-sm text-slate-500 lg:text-base">
              آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی
              کنند
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
