import Image from "next/image";
import IconDoubleRight from "./IconDoubleRight";
import { useEffect, useState, useRef, SetStateAction, Dispatch } from "react";
import { twMerge } from "tailwind-merge";
import { projectInfo, IProjectDescriptionProps } from "./projectInfo";

const ImageSlide = ({
  images,
}: {
  images: { src: string; title?: string }[];
}) => {
  const [pause, setPause] = useState(false);
  const [imageIdx, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (pause && timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
      return;
    }

    if (!pause && !timerRef.current) {
      timerRef.current = setInterval(() => {
        setIndex((prev) => {
          return (prev + 1) % images.length;
        });
      }, 3000);
      return;
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [pause]);
  return (
    <div
      className={
        "w-full md:w-1/2 shrink-0 flex gap-2 justify-center items-center"
      }
    >
      <div
        className="relative overflow-hidden h-[600px] no-scrollbar w-full"
        onMouseEnter={() => {
          setPause(true);
        }}
        onMouseLeave={() => {
          setPause(false);
        }}
      >
        <div
          className={
            "flex h-full transition-all duration-500 absolute top-0 left-0"
          }
          style={{ transform: `translateX(-${imageIdx * 100}%)` }}
        >
          {images.map((item, index) => (
            <div
              className={`h-full flex w-full shrink-0 px-2 justify-center items-center gap-2 flex-col`}
              key={index}
            >
              <Image
                alt="muse_ai"
                className="object-cover aspect-video shadow-md border border-1 w-full rounded"
                width={800}
                height={800}
                src={item.src}
              />
              <div className="font-semibold text-sky-900">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const VideoComponent = ({ videoLink }: { videoLink: string }) => {
  return (
    <div className="w-full md:w-1/2 shrink-0 h-full flex flex-col justify-center">
      <video
        controls
        className="w-full shadow-md rounded border border-1 aspect-video object-cover"
      >
        <source src={videoLink} type="video/mp4" />
      </video>
    </div>
  );
};
const ProjectItem: React.FC<
  IProjectDescriptionProps & {
    selectedInex: number;
    setSelectedIndex: (index: number) => void;
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
  achieved,
}) => {
  const expand = currentIndex === selectedInex;

  return (
    <div
      className={twMerge(
        "bg-white p-6 rounded-lg relative shadow-lg flex flex-col md:flex-row gap-10 h-[200px] transition-common overflow-hidden",
        expand && "h-[800px]",
        achieved && !expand && "opacity-50"
      )}
      onMouseEnter={() => {
        setSelectedIndex(currentIndex);
      }}
      onMouseLeave={() => {
        setSelectedIndex(-1);
      }}
    >
      {expand && images?.length && <ImageSlide images={images} />}

      {expand && video && <VideoComponent videoLink={video} />}

      <div
        className={twMerge(
          !expand && "flex",
          expand && "flex flex-col justify-center gap-1"
        )}
      >
        <a
          href={link}
          target="_blank"
          className={twMerge(
            "flex gap-2 items-center text-sky-500 cursor-pointer hover:text-sky-800 hover:underline transition-common text-2xl font-bold mb-2",
            expand && "animate-bounce",
            achieved && !expand && "text-neutral-500"
          )}
        >
          {!achieved || expand ? (
            <IconDoubleRight />
          ) : (
            <div className="w-[30px]"></div>
          )}

          <div className={twMerge(!expand && "w-[300px]")}> {title}</div>
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
            <h3 className="text-xl font-semibold text-sky-600">Contents:</h3>
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
            <ul className="list-disc list-inside px-10">
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}

        {!expand && (
          <div
            className={twMerge(
              "whitespace-nowrap m-auto text-center font-semibold text-[24px] leading-8 text-sky-700 w-[200px]",
              achieved && !expand && "text-neutral-700"
            )}
          >
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
  const [selectedIndex, _setSelectedIndex] = useState(-1);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const setSelectedIndex = (index: number) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      _setSelectedIndex(index);
    }, 500);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);
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
