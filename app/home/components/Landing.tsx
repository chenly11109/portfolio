import Arch_1 from "@/public/ani_0_Architecture@2x.png";
import Arch_2 from "@/public/ani_1_Architecture@2x.png";
import Arch_3 from "@/public/ani_2_Architecture@2x.png";
import Image from "next/image";
import ResumeDownload from "@/app/resume/components/ResumeDownlod";

function Architecture() {
  return (
    <div className="relative h-full">
      <div className="absolute-center w-full h-full">
        <Image
          src={Arch_1}
          className="m-auto"
          alt="arch_1"
          width={600}
          height={800}
        />
      </div>
      <div className="absolute-cente w-full h-fullr">
        <Image
          src={Arch_2}
          className="bounce-landing m-auto"
          alt="arch_1"
          width={600}
          height={800}
        />
      </div>
      <div className="absolute-center w-full h-full">
        <Image
          src={Arch_3}
          className="m-auto"
          alt="arch_1"
          width={600}
          height={800}
        />
      </div>
      <div className="w-full text-center">@Smith House</div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="grid grid-cols-2 justify-between mt-20 gap-6">
      <Architecture />
      <div className="h-full items-center text-pretty justify-center flex">
        <div className="max-w-[700px] mt-10">
          <div className="text-3xl mb-5 font-bold text-primary-500 text-sky-500">
            Welcome to My Portfolio!
          </div>
          <div className="text-xl font-medium text-sky-800">
            <div className="mb-4">
              I&apos;m <span className="text-sky-500">Lingya Chen</span>,
            </div>{" "}
            A{" "}
            <span
              className="text-sky-500 cursor-pointer
              hover:underline hover:text-sky-700 transition-common"
            >
              front-end developer
            </span>{" "}
            with extensive experience in&nbsp;
            <span
              className="text-sky-500 cursor-pointer
              hover:underline hover:text-sky-700 transition-common"
            >
              full-stack development
            </span>
            ,&nbsp;
            <span
              className="inline-block text-sky-500 cursor-pointer
              hover:underline hover:text-sky-700 transition-common"
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
              hover:underline hover:text-sky-700 transition-common"
              >
                {" "}
                architectural design
              </span>
              .
            </div>
            Explore my website to discover my work and expertise.
          </div>

          <ResumeDownload />
        </div>
      </div>
    </div>
  );
}
