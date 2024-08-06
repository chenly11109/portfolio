import Image from "next/image";
import IconDoubleRight from "./IconDoubleRight";
import { useEffect, useState, useRef, SetStateAction, Dispatch } from "react";
import { twMerge } from "tailwind-merge";

interface IProjectDescriptionProps {
  title: string;
  description: string;
  contributions?: {
    title: string;
    content: string;
  }[];
  contents?: {
    title: string;
    content: string;
  }[];
  skills: string[];
  shortDesc: string[];
  images?: { title?: string; src: string }[];
  video?: string;
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
          "Led the development of an enterprise version, providing deployment on multiple cloud, enhancingzpoints system based on existing user role management system, LoRA training, and customized AI workflows.",
      },
    ],
    skills: [
      "React (NextJS)",
      "MySQL (Prisma ORM)",
      "Cloud Services(Aliyun, Tencent Cloud, AWS, Azure)",
      "Canvas API (Konva Canvas)",
      "AI Image Generation (Stable Diffusion & ComfyUI/Fooocus)",
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
  {
    "title": "Computer Graphics + WebGPU",
    "description": "This project is a revamped version of a computer graphics course assignment initially based on C++, now utilizing WebGPU and JavaScript. Learn how to initialize and use WebGPU for basic rendering directly in the browser.",
    "contributions": [
      {
        "title": "WebGPU Basics",
        "content": "Introduction to WebGPU, setup and configuration in a browser environment, using ArrayBuffer for data storage, creating vertex and fragment shaders in WGSL, and establishing a basic rendering pipeline."
      },
      {
        "title": "Computer Graphics Basics",
        "content": "Fundamentals of computer graphics, exploring 2D and 3D transformation matrices including scaling, translating, and rotation operations, and how these transformations impact rendering objects in a scene."
      },
      {
        "title": "Camera System",
        "content": "Detailed exploration of camera systems in computer graphics, including the setup and use of orthographic and perspective cameras, and how to configure the view matrix based on eye location."
      },
      {
        "title": "Lighting",
        "content": "Overview of lighting techniques in computer graphics, covering object lighting such as diffuse and specular lighting, and context lighting which includes point lights and atmospheric lights."
      }
    ],
    "skills": [
      "WebGPU",
      "WGSL",
      "React + TypeScript",
      "Computer Graphics (CSE 167)"
    ],
    "images": [
      {
        "src": "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/MuseAI.jpg?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=5322742536&Signature=Ew2foDRfmkhuAQV5%2BztVW0D4RSk%3D",
        "title": "Lighting Demo"
      },
      {
        "src": "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/MuseAI_1.jpg?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=3600001722761192&Signature=SURWSLWQU141Yg%2BwwGOFKTKghGA%3D",
        "title": "Matrix Study Notes"
      }
    ],
    "link": "https://chenly11109.github.io/computer-graphics-for-web-developer/",
    "shortDesc": [
      "WebGPU",
      "Computer Graphics"
    ]
  },
  {
    "title": "Virtual Earth",
    "description": "This project is a display project using three.js to  display data on a virtual earth",
    "contents": [
      {
        "title": "hot spot mode",
        "content": "using shader to "
      },
      {
        "title": "Computer Graphics Basics",
        "content": "Fundamentals of computer graphics, exploring 2D and 3D transformation matrices including scaling, translating, and rotation operations, and how these transformations impact rendering objects in a scene."
      },
      {
        "title": "Camera System",
        "content": "Detailed exploration of camera systems in computer graphics, including the setup and use of orthographic and perspective cameras, and how to configure the view matrix based on eye location."
      },
      {
        "title": "Lighting",
        "content": "Overview of lighting techniques in computer graphics, covering object lighting such as diffuse and specular lighting, and context lighting which includes point lights and atmospheric lights."
      }
    ],
    "skills": [
      "WebGPU (successor of WebGL)",
      "WGSL (WebGPU Shading Language)",
      "Computer Graphics (based on course CSE 167)",
      "React + TypeScript",

    ],
    // "images": [
    //   {
    //     "src": "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/MuseAI.jpg?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=5322742536&Signature=Ew2foDRfmkhuAQV5%2BztVW0D4RSk%3D",
    //     "title": "Lighting Demo"
    //   },
    //   {
    //     "src": "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/MuseAI_1.jpg?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=3600001722761192&Signature=SURWSLWQU141Yg%2BwwGOFKTKghGA%3D",
    //     "title": "Matrix Study Notes"
    //   }
    // ],

    "video": 'https://personal-use-images.oss-cn-shanghai.aliyuncs.com/MuseAI.jpg?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=5322742536&Signature=Ew2foDRfmkhuAQV5%2BztVW0D4RSk%3D',
    "link": "https://chenly11109.github.io/computer-graphics-for-web-developer/",
    "shortDesc": [
      "WebGPU",
      "Computer Graphics"
    ]
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


const VideoComponent = ({ videoLink }: { videoLink: string }) => {

  return <video controls
    className="w-full md:w-1/2 shrink-0 shadow-md rounded border border-1"
  >

    <source src={videoLink} type="video/mp4" />


  </video>
}
const ProjectItem: React.FC<
  IProjectDescriptionProps & {
    selectedInex: number;
    setSelectedIndex: Dispatch<SetStateAction<number>>;
    currentIndex: number;
  }
> = ({
  images,
  video,
  title,
  description,
  contributions,
  contents,
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
          "bg-white p-6 rounded-lg relative shadow-lg flex flex-col md:flex-row gap-10 h-min-[200px] transition-common overflow-hidden",
          expand && "h-min-[800px]"
        )}
        onMouseEnter={() => {
          setSelectedIndex(currentIndex);
        }}
        onMouseLeave={() => {
          setSelectedIndex(-1);
        }}
      >
        {expand && images?.length && <ImageSlide images={images} />}
        {expand && video && <VideoComponent videoLink={video} />
        }


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

            <div className=" w-[300px]"> {title}</div>
          </a>
          <div
            className={twMerge("text-gray-700 mb-4 px-10", !expand && "m-auto")}
          >
            {description}
          </div>
          {expand && contributions?.length && (
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

          {expand && contents?.length && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-sky-600">
                Contents:
              </h3>
              <ul className="list-disc list-inside px-10">
                {contents.map((item) => (
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
              {
                skills.map((skill, index) => <div key={index}>
                  {skill}
                </div>)
              }
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
