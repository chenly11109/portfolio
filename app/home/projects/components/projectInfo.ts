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
  achieved?: boolean;
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
          "Led the development of an enterprise version with enhanced points system based on user role management system, incorporating LoRA training and customized ComfyUI workflows.",
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
    title: "AI Undercover Game",
    description:
      "An experimental project designed to evaluate AI performance and interactions through the classic game 'Who is the Undercover'. It provides various modes to test AI strategy and decision-making.",
    contents: [
      {
        title: "Human-AI Hybrid Mode",
        content:
          "Players include both humans and AI to explore cooperative or competitive interactions.",
      },
      {
        title: "Pure AI Voting Mode",
        content:
          "Multiple AI agents participate by voting against each other to analyze different interaction patterns and strategic differences.",
      },
      {
        title: "Pure AI Gameplay Mode",
        content:
          "AI fully simulates the complete game process, including questioning, reasoning, and voting, showcasing independent AI capabilities.",
      },
    ],
    skills: ["MCP (Model Context Protocol: Introduction)", "Python + Vercel"],
    images: [
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/whoIsAI_2.png",
        title: "AI Undercover Game",
      },
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/whoIsAI_1.png",
        title: "LLM Model Selection",
      },
    ],
    link: "https://who-is-ai.vercel.app/",
    shortDesc: ["Python (Flask) + React", "AI Game"],
  },
  {
    title: "Computer Graphics + WebGPU",
    description: `This project is a study-focused initiative designed for frontend
              developers without a C++ background who are interested in learning
              computer graphics. It transitions a traditional C++ computer
              graphics assignment to a WebGPU and JavaScript-based approach.`,
    contents: [
      {
        title: "WebGPU Basics",
        content:
          "Introduction to WebGPU, setup and configuration in a browser environment, using ArrayBuffer for data storage, creating vertex and fragment shaders in WGSL, and establishing a basic rendering pipeline.",
      },
      {
        title: "Computer Graphics Basics",
        content:
          "Fundamentals of computer graphics, exploring 2D and 3D transformation matrices including scaling, translating, and rotation operations, and how these transformations impact rendering objects in a scene.",
      },
      {
        title: "Camera System",
        content:
          "Detailed exploration of camera systems in computer graphics, including the setup and use of orthographic and perspective cameras, and how to configure the view matrix based on eye location.",
      },
      {
        title: "Lighting",
        content:
          "Overview of lighting techniques in computer graphics, covering object lighting such as diffuse and specular lighting, and context lighting which includes point lights and atmospheric lights.",
      },
    ],
    skills: [
      "WebGPU",
      "WGSL",
      "React + TypeScript",
      "Computer Graphics (CSE 167)",
    ],
    images: [
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/CG_1.JPG?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=37722949464&Signature=OHMEJ9QGzjJXg7Xux4Q%2F1lHOKCE%3D",
        title: "Lighting Demo",
      },
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/CG_2.JPG?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=3600000001722949000&Signature=OWjCiZKFAZEI1xEjYHfrRSoQE1o%3D",
        title: "Matrix Study Notes",
      },
    ],
    link: "https://chenly11109.github.io/computer-graphics-for-web-developer/",
    shortDesc: ["WebGPU", "Computer Graphics"],
  },

  {
    title: "Virtual Earth",
    description:
      "This project uses Three.js to visualize data on a virtual globe. It offers two modes (hot spot mode & project mode) for presenting geographical and data information.",
    contents: [
      {
        title: "The Hot Spot Mode",
        content:
          "In this mode, data hot spots are highlighted using shader. Vertex shaders calculate the exact positions of data points on the globe based on geographic coordinates, while fragment shaders apply lighting effects to these points.",
      },
      {
        title: "The Project Mode",
        content:
          "This mode is designed for a more realistic representation of the Earth. It accurately displays the locations of projects with cities on a 3D globe. Users can interact with the globe through hovering effect.",
      },
      {
        title: "Geographic Coordinates Processing",
        content:
          "The conversion of geographic coordinates (longitude and latitude) into 3D spherical coordinates involves mapping the 2D coordinates on Earth's surface to 3D points on a sphere.",
      },
    ],
    skills: ["Three.js", "React + Typescript"],
    video:
      "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/Project-web3.mp4?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=5322949641&Signature=9Nb8huM5katgQawCUcJJNBSGtrk%3D",
    link: "https://chenly11109.github.io/earth-display/",
    shortDesc: ["Three.js"],
  },

  {
    title: "Plant Selection",
    description:
      "This project website is designed for a landscape company to facilitate the selection of plants for landscaping projects. Users can browse, select, display and export plants with various types and quantities.",
    contents: [
      {
        title: "Plant Selection",
        content:
          "Allows selection and display of plant types and quantities, providing previews with images and scientific names, and exporting to PDF format.",
      },
      {
        title: "Google Authentication",
        content: "Offers login options via email and Google Gmail.",
      },
    ],
    skills: ["React", "Firebase"],
    images: [
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/plant_1.JPG?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=5323126479&Signature=lX5osV3EDb1XNTRIl7Ov74BgKvM%3D",
      },
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/plant_2.JPG?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=5323126554&Signature=EOjROsr2cZDu8WF4WJx6QngQgas%3D",
      },
      {
        src: "https://personal-use-images.oss-cn-shanghai.aliyuncs.com/plant_3.JPG?OSSAccessKeyId=LTAI5tQqKs2njySmj22nM9DD&Expires=37723126589&Signature=zGNiAhPuhFbWyylpOo3jPSC7f%2BU%3D",
      },
    ],
    link: "https://plant-selection.netlify.app/",
    achieved: true,
    shortDesc: ["React"],
  },
];
