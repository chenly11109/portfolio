import Link from "next/link";
import IconGithub from "./IconGithub";
export default function NavLink({ href }: { href: string }) {
  return (
    <nav className="px-10 flex items-center w-full h-[50px] text justify-between">
      <Link href={href}>Home | Lingya`s portfolio</Link>

      <div className="flex gap-5">
        <Link
          href="mailto: chenlingya109@gmail.com"
          className="leading-8 cursor-pointer text-cyan-800/50 font-semibold hover:text-cyan-800 transition-common"
        >
          Contact
        </Link>

        <Link
          href={"/resume"}
          target="_blank"
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
  );
}
