export interface IProjectDescriptionProps {
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
    "title": "Computer Graphics + WebGPU",
    "description": "This project is a revamped version of a computer graphics course assignment initially based on C++, now utilizing WebGPU and JavaScript. Learn how to initialize and use WebGPU for basic rendering directly in the browser.",
    "contents": [
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
        "src": "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/CG_1.JPG?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=37722949464&Signature=OHMEJ9QGzjJXg7Xux4Q%2F1lHOKCE%3D",
        "title": "Lighting Demo"
      },
      {
        "src": "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/CG_2.JPG?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=3600000001722949000&Signature=OWjCiZKFAZEI1xEjYHfrRSoQE1o%3D",
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
    "description": "This project is a revamped version of a computer graphics course assignment initially based on C++, now utilizing WebGPU and JavaScript. Learn how to initialize and use WebGPU for basic rendering directly in the browser.",
    "contents": [
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
    video: 'https://personal-use-images.oss-cn-shanghai.aliyuncs.com/Project-web3.mp4?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=5322949641&Signature=9Nb8huM5katgQawCUcJJNBSGtrk%3D',
    "link": "https://chenly11109.github.io/computer-graphics-for-web-developer/",
    "shortDesc": [
      "WebGPU",
      "Computer Graphics"
    ]
  },

  {
    title: "Plant Selection",
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
    link: "https://plant-selection.netlify.app/",
    shortDesc: ["NextJS", "AI Generation"],
  },
];