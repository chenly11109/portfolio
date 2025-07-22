"use client";
import Image from "next/image";
import IconDoubleRight from "./components/IconDoubleRight";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import { twMerge } from "tailwind-merge";
import {
  projectInfo,
  IProjectDescriptionProps,
} from "./components/projectInfo";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ImageSlide = ({
  images,
}: {
  images: { src: string; title?: string }[];
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // <-- only on mount
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      exit={{
        // <-- on unmount, no delay
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="w-full md:w-1/2 shrink-0 flex justify-center items-center"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
        }}
        className="w-full"
      >
        {images.map((item, idx) => (
          <SwiperSlide
            key={idx}
            className="flex flex-col justify-center items-center gap-2 px-2"
          >
            <Image
              src={item.src}
              alt={item.title || "slide image"}
              width={800}
              height={600}
              className={twMerge(
                "object-contain aspect-video shadow-md border w-full rounded mb-4",
                !item.title && "mb-10"
              )}
            />
            {item.title && (
              <div className="font-semibold text-sky-900 w-full text-center mb-10">
                {item.title}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

const VideoComponent = ({ videoLink }: { videoLink: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // <-- only on mount
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        },
      }}
      exit={{
        // <-- on unmount, no delay
        opacity: 0,
        transition: {
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
      className="w-full md:w-1/2 shrink-0 h-full flex flex-col justify-center my-auto"
    >
      <video
        controls
        className="w-full shadow-md rounded border border-1 aspect-video object-cover"
      >
        <source src={videoLink} type="video/mp4" />
      </video>
    </motion.div>
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
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={wrapperRef}
      // no layout prop
      style={{ overflow: "hidden" }}
      initial={{ height: 200 }}
      animate={{ height: expand ? "auto" : 200 }}
      transition={{
        // tween on height only – no spring bounce at all
        height: { type: "tween", duration: 0.3, ease: "easeInOut" },
      }}
      className={twMerge(
        "bg-white p-6 rounded-lg relative shadow-lg flex flex-col md:flex-row gap-10 h-[200px] transition-common overflow-hidden",
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
        {!expand && (
          <div
            className={twMerge("text-gray-700 mb-4 px-10", !expand && "m-auto")}
          >
            {description}
          </div>
        )}

        {expand && (
          <motion.div
            onAnimationComplete={() => {
              if (expand && wrapperRef.current) {
                const rect = wrapperRef.current.getBoundingClientRect();
                const targetScroll =
                  rect.bottom + window.pageYOffset - window.innerHeight + 30;
                window.scrollTo({ top: targetScroll, behavior: "smooth" });
              }
            }}
            style={{ overflow: "hidden" }}
            initial={{ height: 0 }}
            animate={{
              height: "auto",
              transition: {
                delay: 0.3,
                duration: 1,
                ease: "easeIn",
              },
            }}
            transition={{
              // tween on height only – no spring bounce at all
              height: {
                type: "tween",
                duration: 1.5,
                ease: "easeInOut",
                delay: 0.2,
              },
            }}
          >
            <div
              className={twMerge(
                "text-gray-700 mb-4 px-10",
                !expand && "m-auto"
              )}
            >
              {description}
            </div>
            {contributions?.length && (
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

            {contents?.length && (
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

            {skills?.length && (
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
          </motion.div>
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
    </motion.div>
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
    }, 300);
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
