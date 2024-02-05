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
        "branding",
        "dataviz",
        "email",
        "automation",
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
            `A small startup of about a dozen folks working on video processing, content & sentiment recognition, and their correlation 
            to onscreen talent and audience viewer counts- I came on as the sole designer tasked with a refresh and reapproach
            to the product. I worked closely with the ceo, product owner, and machine learning scientists to understand capabilities of
            the exisiting platform and pain points in the exisiting customer feedback, as well as the company's customer acquisition 
            and reporting processes.`,
            `Refocusing the product as a data visualization tool, I created an updated brand and visual language for the company and platform.
            Initially the insights were being represented as individual data points and the customer success group needed to decipher 
            and present the story of their work to customers for each report. After developing a comprehensive understanding of how the 
            data was being captured and the story the company wanted to tell, I created a new visual language and data visualization system. 
            I prototyped my data visualizations in Plotly & Databricks consolidating each show's performance and, in collaboration with Dan Wiegand, 
            piped them into a custom email template I built that allowed the customer success team to automate the process of consolidating and 
            presenting actionable insights being sent out daily and weekly to each customer. The result was a dramatic increase in customer 
            satisfaction and retention, as well as a major decrease in hours spent manually developing reports.`,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ]
        },
        {
          subtitle: "Process",
          description: [
            `I worked with the product owner to understand the existing primary customer research (TV show and News producers) and their goals in 
            hiring a company to determine the granular performance of a show beyond pure viewer count (Nielsen ratings). With the initial 
            product exposing each tracked data point individually, I was able to consolidate the overall video processing work into a series 
            of composite charts that could be chained together to tell a customer oriented view of what was determing a show's performance.`,
            `As with all my work, I sketch as much as possible and keep everything at the lowest fidelity so that I can iterate quickly.
            Moving up a fidelity level, I used Figma to create a series of wireframes and user flows that I could test with the customer success
            team and the product owner. Once we had a solid understanding of the new direction and the data we wanted to present, the new branding
            and visual language was developed and applied to the wireframes.`,
            `After this success my next focus was to conduct research, wireframe and design an entire episode analysis tool enabling users to 
            look at the data acutely along with the original video playback. This was built on top of the design and dataviz systems that 
            had put into place. This feature was prototyped but unreleased at the time of an acquihire and layoffs.`,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
        },
      ],
      
    },
    {
      title: "Metastream",
      tags: [
        "founder",
        "react",
        "product",
        "uxui",
        "startup",
        "engineering",
        "branding",
        "dataviz",
        "wireframes",
        "userflows",
        "research",
        "sales",
        "business",
        "fundraising",
        "leadership",
        "teambuilding",
      ],
      featured: true,
      // link: "https://tailwindmasterkit.com",
      thumbURL: "/tmk.jpg", // this is for the thumbnail image on the projects page 
      sections: [
        {
          subtitle: "Rich Location Based Media",
          description: [
            `In an effort to strengthen our spatial citizenship, I cofounded a startup that sought to engage
            with the cohabitants of a city through an augmented reflection of our environmental timeline. A minimap in 
            your hand to see and understand surrounding realtime data, accessible only by being near a physical locale. 
            First we leveraged available user content from Instagram & Twitter and placed each post at its point of origin 
            was valuable, but eventually found that the most valuable data was the data we could collect ourselves in form 
            of realtime reactions to a point of interest.`,
            `In collaboration with technical cofounder Mike Shrieve who built a progressive webapp that leveraged React,  
            Mapbox, Firebase, Google Cloud platform, and Gitlab. And in collaboration with the Open Streetmap community and 
            public data from the City of Seattle.`,
            `After about five years of teaching ourselves everything from web development, to data science, to product management,
            to user research, to marketing, to sales, to business development, to fundraising, to leadership, to team building-
            we built a beta product that met our original goals. However, we ultimately decided to close the company and move on, 
            still citing the experience as more valuable than most paid work we had done.`,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],

        },
        {
          subtitle: "Process",
          description: [
            `Ultimately there were two user stories we wanted to address: one being "what's happening here right now?" and the other
            being "what can I do here?" These manifested in two feature sets as well: a realtime feed of user generated content and
            secondly a set of actions tied to a locale. Many of the ui explorations I did were in an effort to balance these somewhat
            competing sets of data and actions.`,
            `Many of my wireframes are developed in this lofi style where I can call out data requirements, key interactions
            and map user flows while also working on overall interaction style. I struggled with the representation of
            how information changed over time in the same location and at first chose to use a similar cartographic method developed 
            for military use to distinguish varying reports of troop movements vs last known confirmation of the data. Moderning this
            approach of pattern building and clustering, I decided to superimpose data analysis on top of the map based on user focus.`,
            `Lots of experimentation, lots of leanring as fast as we could, and lots of late night research of engineering effort to
            deliver on ideas. An incredible experience of learning balance and I'm proud of the work we did.`,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
        },
      ],
      
    },
    {
      title: "Lumedic",
      featured: true,
      tags: [
        "web3",
        "angular",
        "blockchain",
        "android",
        "design system",
        "healthcare",
        "research",
        "wireframes",
        "userflows",
        "research",
        "product",
        "uxui",
        "branding",
      ],
      link: "https://placeholdertech.in",
      thumbURL: "/placeholdertech.png",
      sections: [
        {
          subtitle: "Section Title",
          description: [
            `thing 1`,
            `thing 2`,
            `thing 3`,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
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
    {
      title: "Providence St. Joseph Health",
      featured: true,
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
  //
  // Rest of the Projects
  //
  {
    title: "Lumedic",
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
