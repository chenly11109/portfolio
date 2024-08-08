import Link from "next/link";
import IconGithub from "./components/IconGithub";

export default function HomeLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav className="px-10 flex items-center w-full h-[50px] text-[14px] justify-between">
          <Link href="/home">Home | Lingya`s portfolio</Link>

          <div className="flex gap-5">
            <Link
              href="mailto: chenlingya109@gmail.com"
              className="leading-8 cursor-pointer text-cyan-800/50 font-semibold hover:text-cyan-800 transition-common"
            >
              Contact
            </Link>

            <Link
              href={"./Resume.pdf"}
              target="_blank"
              download="Resume_Lingya.pdf"
              className="leading-8 cursor-pointer text-cyan-800/50 font-semibold hover:text-cyan-800 transition-common"
            >
              Resume
            </Link>

            <Link
              href="https://github.com/chenly11109/portfolio"
              target="_blank"
              className="w-4"
            >
              <IconGithub />
            </Link>
          </div>
        </nav>

        {children}
      </section>

      <footer className="w-full h-full h-[60px] text-white bg-sky-900 text-center leading-[60px]">
        Copyright © Lingya Chen (chenlingya109@gmail.com). All Rights Reserved.
      </footer>
    </main>
  );
}
