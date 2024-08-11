import Image from "next/image";
import Cat_0 from "@/public/ani_0_Cat@2x.png";
import Cat_1 from "@/public/ani_1_Cat@2x.png";
import Cat_2 from "@/public/ani_2_Cat@2x.png";

function Cat() {
  return (
    <div className="relative float-left translate-x-[100px] -mt-[180px]">
      <div className="absolute-center w-full h-full">
        <Image
          src={Cat_0}
          className="bounce-cat m-auto"
          alt="cat_0"
          width={600}
          height={800}
        />
      </div>

      <div className="w-full h-full">
        <Image
          src={Cat_1}
          className="bounce-cat2 m-auto"
          alt="cat_1"
          width={600}
          height={800}
        />
      </div>
      <div className="absolute-center w-full h-full">
        <Image
          src={Cat_2}
          className="m-auto"
          alt="cat_2"
          width={600}
          height={800}
        />
      </div>
    </div>
  );
}

export default Cat;
