import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <nav className="h-[44px] py-[1rem] w-full">
        <div className="flex items-center max-w-[1000px] mx-auto h-full justify-between">
          <a href="#">Rooms</a>
          <a href="#">Ideas</a>
          <a href="#">Stores</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <nav className="h-[44px] py-[1rem] w-full">
        <div className="flex items-center max-w-[1000px] mx-auto h-full justify-between">
          <a href="#" className="mr-auto font-bold text-[1.4rem]">
            AirMug Pro
          </a>
          <a href="#" className="text-[0.8rem] ml-[2em]">
            개요
          </a>
          <a href="#" className="text-[0.8rem] ml-[2em]">
            제품사양
          </a>
          <a href="#" className="text-[0.8rem] ml-[2em]">
            구입하기
          </a>
        </div>
      </nav>
    </main>
  );
}
