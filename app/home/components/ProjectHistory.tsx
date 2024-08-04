"use client";
import { Dispatch, SetStateAction, useState, useRef } from "react";
import { twMerge } from "tailwind-merge";
import Projects from "./Projects";
import Design from "./Design";
import Experience from "./Experience";

enum ICategory {
  PROJECT,
  DESIGN,
  EXPERIENCE,
}

function CategoryButton({
  name,
  currentCategory,
  category,
  setCategory,
}: {
  name: string;
  currentCategory: ICategory;
  category: ICategory;
  setCategory: Dispatch<SetStateAction<ICategory>>;
}) {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    // Scroll the element into view
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setCategory(currentCategory);
  };
  return (
    <div className="pt-20" ref={targetRef}>
      <div
        className={twMerge(
          "category-button",
          category === currentCategory && "selected"
        )}
        onClick={handleClick}
      >
        {name}
      </div>
    </div>
  );
}

export default function ProjectHistory() {
  const [category, setCategory] = useState(ICategory.PROJECT);
  return (
    <div>
      <div className="w-full justify-center mt-20 flex gap-4">
        <CategoryButton
          name="PROJECTS"
          category={category}
          currentCategory={ICategory.PROJECT}
          setCategory={setCategory}
        />
        <div className="text-[20px] pt-20 font-medium">·</div>
        <CategoryButton
          name="DESIGN"
          category={category}
          currentCategory={ICategory.DESIGN}
          setCategory={setCategory}
        />
        <div className="text-[20px] pt-20 font-medium">·</div>
        <CategoryButton
          name="EXPERIENCE"
          category={category}
          currentCategory={ICategory.EXPERIENCE}
          setCategory={setCategory}
        />
      </div>

      <div className="w-full overflow-hidden">
        {category === ICategory.PROJECT && <Projects />}
        {category === ICategory.DESIGN && <Design />}
        {category === ICategory.EXPERIENCE && <Experience />}
      </div>
    </div>
  );
}
