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

    console.log(pause, imageIdx, timerRef.current);
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
        className="relative overflow-hidden no-scrollbar h-[600px] w-full"
        onMouseEnter={() => {
          console.log("triggered");
          setPause(true);
        }}
        onMouseLeave={() => {
          console.log("untriggered");
          setPause(false);
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
      //   onMouseLeave={() => {
      //     setSelectedIndex(-1);
      //   }}
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
            <h3 className="text-xl font-semibold text-sky-600">Skills</h3>
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
