
export const experienceData = [
    {
        time: "2022-2024",
        company: "Tezign",
        location: "Shanghai, China",
        companyDesc: `Tezign is a leading AIGC tech unicorn in China, transforming
                content production, management, and analysis for top enterprises
                with cutting-edge generative AI.`,
        jobTitle: "Full-Stack Developer",
        jobDesc: [
            `Led the development of a comprehensive system that managed the entire
  workflow from artwork generation to artwork management within an existing
  platform.
  `,
            `Collaborated closely with AI engineers to ensure seamless front-end integration with complex backend systems.`,
        ],
        type: "developer",
    },
    {
        time: "2021-2022",
        company: "Yunlian (CloudChain) Technology",
        location: "Beijing, China",
        companyDesc: `Yunlian is a Web3 startup that has successfully secured angel
                round funding. The company’s primary project is a no-code
                development platform aimed at attracting developers who are
                interested in Web3 but lack coding experience.`,
        jobTitle: "Frontend Developer",
        jobDesc: [
            `Developed visually compelling and expressive interfaces using
                Three.js, leveraging strong aesthetics to craft engaging
                narratives for investor presentations.
  `,
            `Played a key role as a front-end developer in the creation of a
                no-code platform, enabling users to build and deploy Web3
                applications with ease.`,
        ],
        type: "developer",
    },

    {
        time: "2019-2021",
        company: "OJB Landscape Architecture",
        location: "San Diego",
        companyDesc: `OJB is a collective landscape and urban planning practice
                  inspired to create beauty and find unexpected moments in the
                  natural world.`,
        jobTitle: "Landscape Architect",
        projectDes: [
            {
                name: "Willow Village(Facebook Campus), CA",
                content: `Schematic Design & Design Devlopment
                    phase`,
            },
            {
                name: "Westside Pavilion (Google Campus) , LA, CA",
                content: `Design Devlopment phase`,
            },
        ],
        type: "designer",
    },

    {
        type: "certificate",
        content: "LARE \n (American Landscape Certificate)",
    },

    {
        time: "2018-2019",
        company: "GROUND Landscape Architecture",
        location: "Boston",
        companyDesc: `Ground Inc. is an award-winning landscape architecture practice 
      committed to the creation of exceptional, artful, and sustainable landscape design.`,
        jobTitle: "Landscape Architect",
        projectDes: [
            {
                name: "Tufts Cummings, Medford, MA",
                content: `Tufts University Campus Design, Constructed`,
            },
            {
                name: "Winthrop Square, Boston, MA",
                content: `Concept Design, Design Development, Construction Drawing`,
            },
        ],
        type: "designer",
    },

    {
        time: "2016-2018",
        school: "Harvard University",
        program: "Graduate School of Design, Master of Landscape Architecture | AP",
        type: "education",
    },
    {
        time: "2011-2016",
        school: "Tsinghua University",
        program: "Bachelor of Architecture",
        type: "education",
    },
];

export type IExperience = (typeof experienceData)[number];
