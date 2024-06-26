import Image from "next/image";
import SwiperSlides from "./components/SwiperSlides";
import Feedback from "./components/Feedback";

export default function Home() {
  return (
    <>
      <div>
        <main
          className={`flex flex-col min-h-screen xl:max-h-screen items-center pt-16 inset-0 -z-10 p-4 gap-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-center`}
        >
          <div className="flex flex-col gap-4 ">
            <div className="flex gap-4 items-center justify-center">
              <img
                src="./favicon.ico"
                className="xl:h-16 xl:w-16 h-10 w-10 rounded-xl"
                alt=""
              />
              <h1 className="text-3xl xl:text-5xl text-white">Visit Kashmir</h1>
            </div>
            <h1 className="text-2xl xl:text-3xl text-white">
              Breathtaking pictures from the Paradise on Earth
            </h1>
          </div>

          <div className="w-4/5 text-white overflow-hidden">
            <SwiperSlides />
          </div>

          <Feedback />

          <h1 className="text-sm text-white"> © Furqan Qadri </h1>
        </main>
      </div>
    </>
  );
}
