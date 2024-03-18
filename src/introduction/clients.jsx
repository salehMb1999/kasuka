const clientsInfo = {
  pic1: {
    src: "./src/public/images/client-1.png",
  },
  pic2: {
    src: "./src/public/images/client-2.png",
  },
  pic3: {
    src: "./src/public/images/client-3.png",
  },
  pic4: {
    src: "./src/public/images/client-4.png",
  },
  pic5: {
    src: "./src/public/images/client-5.png",
  },
  pic6: {
    src: "./src/public/images/client-6.png",
  },
};

export default function Clients() {
  return (
    <div className="mt-20 flex items-center justify-between">
      <div className="flex w-1/12 items-center justify-center opacity-50 grayscale duration-300 ease-in-out hover:opacity-100 hover:grayscale-0">
        <img className="w-full" src={clientsInfo.pic1.src} />
      </div>
      <div className="flex w-1/12 items-center justify-center opacity-50 grayscale duration-300 ease-in-out hover:opacity-100 hover:grayscale-0">
        <img className="w-full" src={clientsInfo.pic2.src} />
      </div>
      <div className="flex w-1/12 items-center justify-center opacity-50 grayscale duration-300 ease-in-out hover:opacity-100 hover:grayscale-0">
        <img className="w-full" src={clientsInfo.pic3.src} />
      </div>
      <div className="flex w-1/12 items-center justify-center opacity-50 grayscale duration-300 ease-in-out hover:opacity-100 hover:grayscale-0">
        <img className="w-full" src={clientsInfo.pic4.src} />
      </div>
      <div className="flex w-1/12 items-center justify-center opacity-50 grayscale duration-300 ease-in-out hover:opacity-100 hover:grayscale-0">
        <img className="w-full" src={clientsInfo.pic5.src} />
      </div>
      <div className="flex w-1/12 items-center justify-center opacity-50 grayscale duration-300 ease-in-out hover:opacity-100 hover:grayscale-0">
        <img className="w-full" src={clientsInfo.pic6.src} />
      </div>
    </div>
  );
}
