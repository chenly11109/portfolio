"use client";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

import { usePathname, useRouter } from "next/navigation";

enum ICategory {
  PROJECT = "projects",
  DESIGN = "design",
  EXPERIENCE = "experience",
}

function CategoryButton({
  name,
  category,
}: {
  name: string;
  category: ICategory;
}) {
  const targetRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const handleClick = () => {
    router.push(`/home/${category}`);
    // Scroll the element into view
    if (targetRef.current) {
      setTimeout(() => {
        targetRef.current!.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  };
  return (
    <div className="pt-20" ref={targetRef}>
      <div
        className={twMerge(
          "category-button",
          pathname.includes(category) && "selected"
        )}
        onClick={handleClick}
      >
        {name}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <div className="w-full justify-center flex gap-4">
        <CategoryButton name="PROJECTS" category={ICategory.PROJECT} />
        <div className="text-xl pt-20 font-medium">·</div>
        <CategoryButton name="DESIGN" category={ICategory.DESIGN} />
        <div className="text-xl pt-20 font-medium">·</div>
        <CategoryButton name="EXPERIENCE" category={ICategory.EXPERIENCE} />
      </div>
    </div>
  );
}
