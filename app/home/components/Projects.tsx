import Image from "next/image";
import IconDoubleRight from "./IconDoubleRight";
import { useEffect, useState, useRef, SetStateAction, Dispatch } from "react";
import { twMerge } from "tailwind-merge";

interface IProjectDescriptionProps {
  title: string;
  description: string;
  contributions: {
    title: string;
    content: string;
  }[];
  skills: string[];
  shortDesc: string[];
  images: { title?: string; src: string }[];
  link: string;
}

const projectInfo: IProjectDescriptionProps[] = [
  {
    title: "MuseAI Toolbox",
    description:
      "MuseAI Toolbox is an advanced web application for creating and editing digital content using AI technologies. It provides intuitive tools for image manipulation and text generation.",
    contributions: [
      {
        title: "Image AI Tools",
        content:
          "Developed a React-based interface with the Canvas API for image editing including inpainting, outpainting, eraser and image composing, powered by Stable Diffusion. Added features include editing history tracking, image processing, and image exports.",
      },
      {
        title: "Text AI Generation",
        content:
          "Developed text generation with LLMs like GPT and Claude, using prompt templates to generate relevant outputs.",
      },
      {
        title: "Enterprise Version",
        content:
          "Led the development of an enterprise version, enhancing points system based on existing user role management system, LoRA training, and customized AI workflows.",
      },
    ],
    skills: [
      "React (Next.js)",
      "MySQL (Prisma)",
      "Canvas API",
      "AI Image Generation (Stable Diffusion & ComfyUI)",
      "GPT Models",
    ],
    images: [
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/MuseAI.jpg?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=5322742536&Signature=Ew2foDRfmkhuAQV5%2BztVW0D4RSk%3D",
        title: "MuseAI Tools",
      },
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/MuseAI_1.jpg?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=3600001722761192&Signature=SURWSLWQU141Yg%2BwwGOFKTKghGA%3D",
        title: "Product Image Composer",
      },
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/MuseAI_2.jpg?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=3601722761217&Signature=Th50RnC%2FaDTtiTdcZocfeKjO%2Bak%3D",
        title: "Image Editing",
      },
    ],
    link: "https://app.museai.cc/",
    shortDesc: ["NextJS", "AI Generation"],
  },
];

const ImageSlide = ({
  images,
}: {
  images: { src: string; title?: string }[];
}) => {
  const pauseRef = useRef(false);
  const [imageIdx, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pauseRef.current) {
        setIndex((prev) => (prev + 1) % images.length);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={
        "w-full md:w-1/2 shrink-0 flex gap-2 justify-center items-center"
      }
    >
      <div
        className="relative overflow-hidden no-scrollbar h-[600px] w-full"
        onMouseEnter={() => {
          pauseRef.current = true;
        }}
        onMouseLeave={() => {
          pauseRef.current = false;
        }}
      >
        <div
          className={`flex h-full snap-center transition-all duration-500 absolute top-0 left-0
          -translate-x-[${imageIdx * 100}%]`}
        >
          {images.map((item, index) => (
            <div
              className={`h-full flex w-full shrink-0 px-2 justify-center items-center gap-2 flex-col`}
              key={index}
            >
              <Image
                alt="muse_ai"
                className="object-contain h-full shadow-md border border-1 w-full rounded"
                width={800}
                height={800}
                src={item.src}
              />
              <div className="font-semibold text-sky-900 text-[20px]">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectItem: React.FC<
  IProjectDescriptionProps & {
    selectedInex: number;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
    currentIndex: number;
  }
> = ({
  images,
  title,
  description,
  contributions,
  skills,
  link,
  shortDesc,
  currentIndex,
  selectedInex,
  setSelectedIndex,
}) => {
  const expand = currentIndex === selectedInex;

  return (
    <div
      className={twMerge(
        "bg-white p-6 rounded-lg relative shadow-lg flex flex-col md:flex-row gap-10 h-[200px] transition-common overflow-hidden",
        expand && "h-[800px]"
      )}
      onMouseEnter={() => {
        setSelectedIndex(currentIndex);
      }}
      onMouseLeave={() => {
        setSelectedIndex(-1);
      }}
    >
      {expand && <ImageSlide images={images} />}

      <div
        className={twMerge("text-lg flex justify-center", expand && "flex-col")}
      >
        <a
          href={link}
          target="_blank"
          className={twMerge(
            "flex gap-2 items-center text-sky-500 cursor-pointer hover:text-sky-800 hover:underline transition-common text-3xl font-bold mb-2",
            expand && "animate-bounce"
          )}
        >
          <IconDoubleRight />

          <div className=" w-[300px] text-nowrap"> {title}</div>
        </a>
        <div
          className={twMerge("text-gray-700 mb-4 px-10", !expand && "m-auto")}
        >
          {description}
        </div>
        {expand && (
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-sky-600">
              Contributions:
            </h3>
            <ul className="list-disc list-inside px-10">
              {contributions.map((item) => (
                <li key={item.title}>
                  <strong className="text-sky-600 font-semibold pr-2">
                    {item.title} :
                  </strong>
                  <span>{item.content}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {expand && (
          <div>
            <h3 className="text-xl font-semibold text-sky-600">
              Skills Demonstrated
            </h3>
            <div className="text-gray-700 px-10">{skills.join(", ")}</div>
          </div>
        )}

        {!expand && (
          <div className="whitespace-nowrap m-auto text-center font-semibold text-[20px] leading-8 text-sky-700 w-[200px]">
            {shortDesc.map((item) => (
              <div key={item}>{item}</div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <div className="space-y-4 w-full p-20">
      {projectInfo.map((item, i) => (
        <ProjectItem
          currentIndex={i}
          selectedInex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          {...item}
          key={item.title}
        />
      ))}
    </div>
  );
}
