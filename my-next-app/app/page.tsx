import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-800 text-white overflow-x-hidden">
      {/* navbar start */}
      <nav className="w-full px-6 md:px-10 py-5 border-b border-green-50">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
          <div className="md:pl-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-black">
              Gung Pandu
            </h1>
          </div>
          <ul className="flex items-center gap-6 md:gap-8 text-base md:text-lg font-medium md:pr-10">
            <li className="hover:text-blue-400 transition-colors cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-blue-400 transition-colors cursor-pointer">
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* navbar end */}

      {/* main section start */}
      <section className="py-16 md:py-20 border-b-white border-b">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <div className="shrink-0">
            <Image
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white object-cover"
              src="/profile-biodata.jpeg"
              alt="Profile Pandu"
              width={256}
              height={256}
              priority
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">
              Hi I&apos;m <span className="text-black"> Pandu </span> 🙌
            </h2>
            <h4 className="text-xl md:text-2xl font-medium">
              <span className="text-black"> I&apos;m</span> Computer Science
              Student
            </h4>
          </div>
        </div>
      </section>
      {/* main section end */}

      {/* About me start*/}
      <section className="py-16 md:py-20 border-b-white border-b" id="about">
        <div className="flex justify-center mb-10">
          <h1 className="text-3xl md:text-4xl text-black font-bold">
            About me
          </h1>
        </div>
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="shrink-0">
            <Image
              className="w-32 h-32 md:w-40 md:h-40 rounded-xl border-4 border-white object-cover"
              src="/profile-biodata.jpeg"
              alt="Profile Biodata"
              width={160}
              height={160}
            />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm md:text-base leading-relaxed">
              Hello guys! saya pandu, saya adalah mahasiswa primakara dengan
              jurusan informatika. hobby saya bermain <strong>Volley</strong>,
              <strong> Games </strong> dan <strong> Music </strong> saya lahir
              pada tanggal 20-02-2006 di kota Bangli dan saya lulusan dari SMA
              Negeri 2 Bangli. dan saya memiliki cita-cita menjadi seorang
              <strong> Programmer </strong> yang handal dan sukses di masa
              depan.
            </p>
          </div>
        </div>
      </section>
      {/* About me end */}
      {/* contact start */}
      <section className="py-16 md:py-20 border-b-white border-b" id="contact">
        <div className="flex justify-center mb-10">
          <h1 className="text-3xl md:text-4xl text-black font-bold">Contact</h1>
        </div>
        <div className="flex gap-8 md:gap-10 justify-center">
          <Link href="https://www.instagram.com/gungdepandu" target="_blank">
            <Image
              src="/ig.png"
              alt="Instagram"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform"
            />
          </Link>
          <Link href="mailto:gungpandu2006@gmail.com" target="_blank">
            <Image
              src="/email.png"
              alt="Email"
              width={60}
              height={60}
              className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform"
            />
          </Link>
        </div>
      </section>
      {/* contact end */}

      {/* footer start */}
      <footer className="flex justify-center py-10 items-center">
        <p className="text-sm md:text-base">&copy; 2026 Gung Pandu.</p>
      </footer>
      {/* footer end */}
    </main>
  );
}
