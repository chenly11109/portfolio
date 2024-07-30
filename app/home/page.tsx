import Arch_1 from "@/public/ani_0_Architecture@2x.png";
import Arch_2 from "@/public/ani_1_Architecture@2x.png";
import Arch_3 from "@/public/ani_2_Architecture@2x.png";
import Image from "next/image";
// import { FiGithub } from "react-icons/fi";

function Architecture() {
  return (
    <div className="relative mt-10">
      <Image
        src={Arch_1}
        alt="arch_1"
        className="absolute left-1/2 -translate-x-1/2 top-0"
        width={600}
        height={800}
      />
      <div className="absolute left-1/2 w-[600px] h-[800px] -translate-x-1/2 top-0">
        <Image
          src={Arch_2}
          className="animate-bounce"
          alt="arch_1"
          width={600}
          height={800}
        />
      </div>
      <Image
        src={Arch_3}
        className="absolute left-1/2 -translate-x-1/2 top-0"
        alt="arch_1"
        width={600}
        height={800}
      />
    </div>
  );
}

export default function home() {
  return (
    <div className="grid grid-cols-2 justify-between w-full h-full">
      <Architecture />
      <div className="h-full pt-[150px] px-8 text-pretty justify-center flex">
        <div className="max-w-[700px]">
          <div className="text-[40px] mb-5 font-bold text-primary-500 text-sky-500">
            Welcome to My Portfolio!
          </div>
          <div className="text-[28px] font-medium text-sky-800">
            <div className="mb-4">
              I&apos;m <span className="text-sky-500">Lingya Chen.</span>,
            </div>{" "}
            A front-end developer with extensive experience in&nbsp;
            <span
              className="text-sky-500 cursor-pointer
            hover:underline tracking-wide hover:font-semibold hover:text-sky-700 transition-common"
            >
              full-stack development
            </span>
            ,&nbsp;
            <span
              className="inline-block text-sky-500 cursor-pointer
            hover:underline tracking-wide hover:font-semibold hover:text-sky-700 transition-common"
            >
              AI generative content&nbsp;
            </span>
            and&nbsp;
            <span
              className="inline-block text-sky-500 cursor-pointer
            hover:underline tracking-wide hover:font-semibold hover:text-sky-700 transition-common"
            >
              3D
            </span>
            .
            <div className="my-4">
              I also have over 5 years of experience in
              <span
                className="inline-block text-sky-500 cursor-pointer
            hover:underline tracking-wide hover:font-semibold hover:text-sky-700 transition-common"
              >
                {" "}
                architectural design
              </span>
              .
            </div>
            Explore my website to discover my work and expertise.
            {/* <FiGithub className="w-4 h-4 pointer" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
