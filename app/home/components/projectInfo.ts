export interface IProjectDescriptionProps {
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

export const projectInfo: IProjectDescriptionProps[] = [
  {
    title: "MuseAI Toolbox",
    description:
      "MuseAI Toolbox is an advanced web application designed for creating and editing digital content using AI technologies. It offers intuitive tools for image manipulation and text generation.",
    contributions: [
      {
        title: "Image AI Tools",
        content:
          "Developed a React-based interface utilizing the Canvas API for advanced image editing features including inpainting, outpainting, erasing with image segmentation, and image composition, powered by Stable Diffusion. Additional features include editing history tracking, image processing, and image exports.",
      },
      {
        title: "Text AI Generation",
        content:
          "Developed text generation capabilities with large language models like GPT and Claude, using prompt templates to generate relevant outputs.",
      },
      {
        title: "Enterprise Version",
        content:
          "Led the development of an enterprise version that enhances the points system based on the existing user role management system, incorporating LoRA training and customized AI workflows.",
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

  {
    title: "MuseAI Toolbox",
    description:
      "MuseAI Toolbox is an advanced web application designed for creating and editing digital content using AI technologies. It offers intuitive tools for image manipulation and text generation.",
    contributions: [
      {
        title: "Image AI Tools",
        content:
          "Developed a React-based interface utilizing the Canvas API for advanced image editing features including inpainting, outpainting, erasing with image segmentation, and image composition, powered by Stable Diffusion. Additional features include editing history tracking, image processing, and image exports.",
      },
      {
        title: "Text AI Generation",
        content:
          "Developed text generation capabilities with large language models like GPT and Claude, using prompt templates to generate relevant outputs.",
      },
      {
        title: "Enterprise Version",
        content:
          "Led the development of an enterprise version that enhances the points system based on the existing user role management system, incorporating LoRA training and customized AI workflows.",
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