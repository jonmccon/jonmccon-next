const userData = {
  githubUsername: "jonmccon",
  name: "Jonny McConnell",
  designation: "Hybrid Creative",
  avatarUrl: "/avatar.jpg",
  email: "jonmccon@gmail.com",
  phone: "+1 2066177598",
  address: "Seattle, WA",
  projects: [
    //
    // TOP FEATURED PROJECTS
    //    
    {
      title: "Resonance AI",
      // Do I need a subtitle here?
      // subtitle: "Content Performance Analysis",
      tags: [
        "ai",
        "ml",
        "react",
        "product",
        "uxui",
        "startup",
        "engineering",
      ],
      featured: true,
      // link: "https://tailwindmasterkit.com", dropping this to check if it links to the project page
      thumbURL: "/tmk.jpg", // this is for the thumbnail image on the projects page 
      sections: [
        {
          subtitle: "Teaching the machine to watch tv",
          description: [
            `A small startup of about a dozen folks, I came on as the sole designer tasked with a refresh and reapproach
            to the company. I worked closely with the product owner and machine learning scientists to understand capabilities of
            the exisiting product and pain points in the exisiting customer feedback, as well as the company's customer acquisition 
            and reporting processes.`,
            `Reimagining the product as a data visualization tool, I created an updated brand and visual language for the company and platform.
            Initially the insights were being represented as individual data points and the customer success group needed to decipher 
            and present the story of their work to customers for each report. After developing a comprehensive understanding of how the 
            data was being captured and the story the company wanted to tell, I created a new visual language and data visualization system. 
            I prototyped my data visualizations in Plotly & Databricks consolidating each show's performance and, in collaboration with Dan Wiegand, 
            piped them into a custom email template I built that allowed the customer success team to automate the process of consolidating and 
            presenting actionable insights being sent out daily and weekly to each customer. The result was a dramatic increase in customer 
            satisfaction and retention, as well as a major decrease in hours spent manually developing reports.`,
            ``,
            ``,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ]
        },
        {
          subtitle: "Section Title",
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ]
        },
        {
          subtitle: "Section Title",
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ]
        },
      ],
      
    },
    {
      title: "Second Project",
      tags: [
        "beep",
      ],
      featured: true,
      // link: "https://tailwindmasterkit.com",
      thumbURL: "/tmk.jpg", // this is for the thumbnail image on the projects page 
      sections: [
        {
          subtitle: "Section Title",
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ]
        },
        {
          subtitle: "Section Title",
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ]
        },
        {
          subtitle: "Section Title",
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ]
        },
      ],
      
    },
    //
    // Rest of the Projects
    //
    {
      title: "Placeholder Tech",
      featured: false,
      tags: [
        "boop",
        "React",
        "Next.js",
        "TailwindCSS",
        "HeadlessUI",
        "Heroicons",
        "Framer Motion",
      ],
      link: "https://placeholdertech.in",
      thumbURL: "/placeholdertech.png",
      sections: [
        {
          subtitle: "Section Title",
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ]
        },
        {
          subtitle: "Section Title",
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png",
            "/projects/devmedium.png",
            "/projects/devmedium.png",
          ],
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ]
        },
        {
          subtitle: "Section Title",
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ]
        },
      ],
    },
  ],
  about: {
    title:
      "I'm a software developer that loves building products and web applications that impact millions of lives",
    description: [
      `I've been developing full-stack application since I was 10 years old. I didn't know what full-stack meant at that time because the term was not coined back then. I'm so out of content right now that I'm literally crying writing this text since lorem text is so 2012 now.`,
      `After learning HTML and struggling with CSS, I came up with a brilliant idea of using bootstrap so that I don't have to style everything by myself and - for obvious reasons - if you knew bootstrap, you were cool.`,
      `But now, I'm a legend. I've been coding in React, Angular, Vue, Svelte, Node.js, Express, Fastify, MongoDB, MySQL, Bootstrap, Tailwind, C, C++, C#, Rust, Haskell, Perl, PHP, Assembly, Logo and YouDontKnowShit programming language etc to name a few. Although I barely know the syntax (Psst, Stack overflow!), I consider myself a Ninja developer I'm laughing right now.`,
    ],
    currentProject: "Tailwind Master Kit",
    currentProjectUrl: "https://tailwindmasterkit.com",
  },
  experience: [
    {
      title: "Software Developer",
      company: "mroads",
      year: "2021",
      companyLink: "https://mroads.com",
      desc: "Contributed to our flagship product - Panna - which is an AI powered candidate interviewing product.",
    },
    {
      title: "Founder and Developer",
      company: "TailwindMasterKit",
      year: "2021",
      companyLink: "https://tailwindmasterkit.com",
      desc: "Developed a marketplace for tailwind web components (React, HTML and Angular) and templates.",
    },
    {
      title: "Founder and Developer",
      company: "Algochurn",
      year: "2021",
      companyLink: "https://algochurn.com",
      desc: "Your last moment revision friend right before a Tech coding interview. Practice problems and get hired at top Product based companies.",
    },
    {
      title: "Internship",
      company: "Intel Corporation",
      year: "2019",
      companyLink: "https://intel.com",
      desc: "Developed pothole detection system with OpenCV and computer vision, detects potholes on roads and informs the driver.",
    },
    {
      title: "Graduation",
      company: "UPES, Dehradun.",
      year: "2019",
      companyLink: "https://upes.co.in",
      desc: "Major in Computer Science and Engineering with a CGPA of 7.0. Nobody asks this but it's okay.",
    },
    {
      title: "High School",
      company: "Delhi Public School, Jaipur.",
      year: "2015",
      companyLink: "https://upes.co.in",
      desc: "Subjects being PCM - I barely survived with 93.6% marks aggregate. Flex fridays, fellas.",
    },
  ],
  resumeUrl:
    "https://drive.google.com/file/d/1xmE3BOmgM7TAOOgVp36xQIQvYDntDYoo/view?usp=sharing",
  socialLinks: {
    instagram: "https://instagram.com/jonmccon",
    twitter: "https://twitter.com/jonmccon",
    linkedin: "https://linkedin.com/in/jonmccon",
    github: "https://github.com/jonmccon",
    // facebook: "https://facebook.com/",
    // peerlist: "https://peerlist.io/manuarora",
  },
};

export default userData;
