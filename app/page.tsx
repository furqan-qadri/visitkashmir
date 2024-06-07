import Image from "next/image";
import SwiperSlides from "./components/SwiperSlides";

export default function Home() {
  return (
    <>
      <div>
        <main
          className={`flex flex-col max-h-screen items-center pt-16 inset-0 -z-10 p-4 gap-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] text-center`}
        >
          <h1 className="text-3xl xl:text-5xl text-white">Visit Kashmir</h1>
          <h1 className="text-2xl xl:text-3xl text-white">
            Breathtaking pictures from the Paradise on Earth
          </h1>
          <div className="xl:flex-grow w-4/5 text-white overflow-hidden">
            <SwiperSlides />
          </div>
          <h1 className="text-xl xl:text-3xl text-white">Coming soon!</h1>
        </main>
      </div>
    </>
  );
}
