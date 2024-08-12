import { designPojects, IDesign } from "@/app/design/designData";
import Image from "next/image";
import Link from "next/link";

const DesignItem = (props: IDesign) => {
  return (
    <Link
      href={`/design/${props.keyIndex}`}
      className="relative w-full aspect-square h-full shadow-sm group transition-common rounded overflow-hidden"
    >
      <Image
        src={props.src[0]}
        alt={props.projectTitle}
        width={800}
        height={800}
        className="h-full w-full transition-common object-cover group-hover:blur-sm group-hover:scale-105"
      />
      <div className="absolute text-white flex flex-col justify-end bottom-0 w-full h-full bg-sky-900/40 p-6 opacity-0 transition-common group-hover:opacity-100">
        <div className="text-bold text-xl mb-2">{props.projectTitle}</div>
        <div>{props.tagline}</div>
      </div>
    </Link>
  );
};

export default function Design() {
  return (
    <div className="grid gap-5 lg:grid-cols-3 md:grid-cols-2 w-full p-[80px]">
      {designPojects.map((item, index) => (
        <DesignItem {...item} key={index} />
      ))}
    </div>
  );
}
