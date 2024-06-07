import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <main
          className={`flex min-h-screen flex-col gap-14 items-center  pt-24  inset-0 -z-10 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]`}
        >
          <h1 className="text-4xl text-white">Visit Kashmir</h1>
          <h1 className="text-2xl text-white">Breathtaking pictures from the paradise on Earth</h1>
          <h1 className="text-xl text-white">Coming soon!</h1>
        </main>
      </div>
    </>
  );
}
