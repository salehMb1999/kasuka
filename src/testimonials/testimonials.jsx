export default function Testimonials() {
  return (
    <div className="relative my-10 h-[455px] bg-[url('/src/public/images/testimonials-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat font-iranSansMed before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:bg-[rgba(0,0,0,.7)]">
      <div className="container relative mx-auto flex h-full flex-col items-center justify-center gap-5 px-3 py-10 text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-3 w-28 overflow-hidden rounded-full border-4 border-slate-600 border-opacity-50">
            <img
              className="h-full w-full"
              src="./src/public/images/testimonials-2.jpg"
              alt=""
            />
          </div>
          <h3 className="text-2xl">سارا ویلسون</h3>
          <p className="text-slate-300">فریلنسر</p>
        </div>
        <div className="flex items-center justify-center text-center">
          <p>
            <i
              className="fa fa-quote-left ml-2 text-red-200"
              aria-hidden="true"
            ></i>
            پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب
            درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن
            همیشه می خندد.
            <i
              className="fa fa-quote-right mr-2 text-red-200"
              aria-hidden="true"
            ></i>
          </p>
        </div>
      </div>
    </div>
  );
}
