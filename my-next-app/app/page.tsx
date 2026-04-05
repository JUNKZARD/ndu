import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800 text-white">
      {/* navbar start */}
      <nav className="w-full px-10 py-5 border-b border-green-50">
        <div className="flex items-center justify-between">
          <div className="pl-20">
            <h1 className="text-4xl font-extrabold text-black">Gung Pandu</h1>
          </div>
          <ul className="flex items-center gap-8 text-lg font-medium pr-20">
            <li className="hover:text-blue-400 transition-colors cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">
              <a href="#about">About me</a>
            </li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* navbar end */}

      {/* main section start */}
      <section className="pt-20 border-b-white border-b pb-20">
        <div className="pl-80 flex">
          <img
            className="w-64 h-auto rounded-full border-4"
            src="/profile biodata.jpeg"
            alt=""
          />
          <div className="pl-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-2">
              Hi I'm <span className="text-black"> Pandu </span> 🙌🙌
            </h2>
            <h4 className="text-2xl font-medium">
              <span className="text-black"> I'm</span> Computer Science Student
            </h4>
          </div>
        </div>
      </section>
      {/* main section end */}

      {/* About me start*/}
      <section className="pt-20 border-b-white border-b pb-20" id="about">
        <div className="flex justify-center mb-18 mt-18">
          <h1 className="text-4xl text-black font-bold">About me</h1>
        </div>
        <div className="pt-10 flex justify-center items-center pl-5">
          <img
            className="w-38 h-auto rounded-xl border-2 "
            src="/profile biodata.jpeg"
            alt=""
          />
          <div className="flex justify-center pl-5 items-center">
            <p className=" ">
              Hello guys! saya pandu, saya adalah mahasiswa primakara dengan
              jurusan informatika. hobby saya bermain <strong>Volly</strong>,
              <strong> Games </strong> dan <strong> Musik </strong> saya lahir
              pada tanggal 20-02-2006 di kota Bangli dan saya lulusan dari SMA
              Negeri 2 Bangli. dan saya memiliki cita-cita menjadi seorang
              <strong>Programmer</strong> yang handal dan sukses di masa depan.
            </p>
          </div>
        </div>
      </section>

      {/* About me end */}

      {/* contac start */}
      <section className="border-b-white border-b pb-20" id="contact">
        <div className="flex justify-center mb-18 mt-18 ">
          <h1 className="text-4xl text-black font-bold">Contac</h1>
        </div>
        <div className="flex gap-10 justify-center">
          <Link href="https://www.instagram.com/gungdepandu" target="_blank">
            <img className="w-20 h-20" src="/ig.png" alt="ig" />
          </Link>
          <Link href="mailto://www.gungpandu2006@gmail.com/" target="_blank">
            <img className="w-20 h-20" src="/email.png" alt="email" />
          </Link>
        </div>
      </section>
      {/* contac end */}

      {/* footer start */}
      <footer className="flex justify-center pt-20 items-center pb-5">
        <p>&copy;2026 Gung Pandu.</p>
      </footer>
      {/* footer end */}
    </main>
  );
}
