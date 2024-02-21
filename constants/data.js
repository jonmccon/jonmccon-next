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
        "automation",
        "branding",
        "dataviz",
        "email",
        "engineering",
        "ml",
        "product",
        "react",
        "startup",
        "uxui",
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
        "branding",
        "business",
        "dataviz",
        "engineering",
        "founder",
        "fundraising",
        "leadership",
        "product",
        "react",
        "research",
        "sales",
        "startup",
        "teambuilding",
        "uxui",
        "userflows",
        "wireframes",
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
        "android",
        "angular",
        "blockchain",
        "branding",
        "design system",
        "healthcare",
        "product",
        "prototype",
        "research",
        "uxui",
        "userflows",
        "web3",
        "wireframes",
      ],
      // link: "https://placeholdertech.in",
      thumbURL: "/placeholdertech.png",
      sections: [
        {
          subtitle: "On-Chain HIPAA Compliant Medical Records",
          description: [
            `I spent most of 2020 looking at opportunities to help the general public navigate the public health crisis. 
            Lumedic, a Providence portfolio company, had an existing broad use medical-record-on-blockchain technology that 
            we pivoted to serve as a single use digital passport. Our product planning & research followed as the science & 
            politics evolved throughout the year, first as a time oriented test result passport and eventually also containing
            vaccine status card.`,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
        },
        {
          subtitle: "Process",
          description: [
            `The prototype was based on an existing structure from Connect.me, a blockchain engineering partner. I first audited the boilerplate app from a 
            user experience pov with the goal of creating room for a Holder & Verifier handshake scenario, while obfuscating any extra steps that would
            create a point of user confusion. My work centered around architecting the multimodal experience of permissions, mobile devices scanning QR 
            codes on desktop web apps, and on each other's devices, working with user expectations and building prototypes with my UX Research partner 
            Jeanine Ledoux.`,
            `The prototype was first tested in Providence hospitals for staff returning to work, this provided data around how many checkpoints a staff member would
            see throughout a day, how long the system would take to confirm a result, and who would need to be trained on any new hardware that needed to be implemented
            operationally. In addition to serving as the daily scrum designer for the web app and both iOS & Android releases, I iterated on the messaging to 
            positively respond to the available user data.`,
            `Wireframing was done remotely in Miro and Figma to confirm that while we met the technical requirements to access and display on-chain data, we were also
            meeting preexisting expectations of how medical workers share data. In tandem with an internal design system team, I helped to expand the visual branding work, 
            built on top of IBM's Carbon ui, to include mobile and tablet oriented ui components.`,  
            `Illustration work by Smashing Ideas. Previously available on iOS & Android`,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png",
            "/projects/devmedium.png",
            "/projects/devmedium.png",
          ],

        },
      ],
    },
    {
      title: "Providence St. Joseph Health",
      featured: true,
      tags: [
        "branding",
        "design system",
        "healthcare",
        "product",
        "react",
        "research",
        "startup",
        "uxui",
        "userflows",
        "video chat",
        "wireframes",
      ],
      // link: "https://placeholdertech.in",
      thumbURL: "/placeholdertech.png",
      sections: [
        {
          subtitle: "Video calling for the Emergency Room",
          description: [
            `My time with Providence Health & Services' Digital Innovation Group focused on two distinct digital product categories. 
            First, due to the short availability of specialty doctors for treating acute health issues the innovation group was asked to 
            research and implement an on-demand emergency room video call platform with remote diagnostic instruments, specifically targeting stroke treatment. 
            This would allow remote staff to fill in for a local doctor and provide more comprehensive diagnoses and treatment plans than the existing 
            practice of a voice call.`,
            `Partnering with Sunny Lee & Kelly Elston to research Providence's established caregiver process, protocol, and hardware used in the ER 
            for stroke cases we designed and tested low fidelity service workflows and case management tools. These were tested in a series of remote and 
            in-person scenarios with the goal of reducing the time to treatment and increasing the quality of care. This work was done in tandem
            with our enigineering team that started with developing the secure backend video call infrastructure and then transitioned into 
            developing the frontend patient and doctor facing applications.`,
            `The second effort was rearchitecting a quartet of established care services as a suite of Express Care options on a shared marketing 
            & scheduling platform with a multitenant architecture. This leveraged the video chat infrastructure and was designed to further establish
            use in the consumer market. This was a large project that required a lot of collaboration with the engineering team to ensure that the
            new platform was able to handle the load of the existing services and the new services. Prototyping was done in Sketch and Invision, tested
            in live environments, and iterated on until we found the right balance of business goals and patient understanding.`,
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png"
          ],
        },
        {
          subtitle: "Process",
          description: [
            `I also helped develop a visual language for the suite of provider & patient healthcare tools. A team process of leveraging Abstract, 
            Sketch, Invision, Zeplin, along with the Adobe Creative Cloud when all these tools were seperatly good at their individual strengths. 
            The visual design system was based on Google's early Material language before it was more publicly available. Out of the box it felt too 
            cold for the healthcare world so I took on a reverse design process to understand the components and changes to humanize the ui. 
            Partnering with the more frontend focused engineering peers, we developed a solution of taking React Toolbox and subbing in a humanistic typeface, 
            rounded some corners and generally opened up the proportions across the system (more padding) while maintaining the existing behaviors. 
            By working with these tools, we were able to more fluently migrate interaction & visual work into React components via direct collaboration in Storybook.`,
            // `Interactive prototype (Invision / Craft) - https://invis.io/C3GJN9VJ6TE#/287567188_Top_-_Virtual_Landing
            // Integrated Consumer Experience - Web & Native design preview - https://drive.google.com/open?id=1ss_K_amsJ9OYZBD8vctijzRE01LrXCpc_uov3vu_fBA
            // Scheduling & Registration wireframe review - https://drive.google.com/open?id=1sx5oSIAm3E5Iy58XSNeil_Sm9JZLPkbQ8cuO9EfFSzI
            // Account Management wireframe review - https://drive.google.com/open?id=1le_gtlHi5ts94gTg8oRfCq3uBW-u4xO7HZUxbrvMl9o`            
          ],
          images: [
            "/projects/devmedium.png", 
            "/projects/devmedium.png",
            "/projects/devmedium.png",
            "/projects/devmedium.png",
          ],
        },
      ],
    },
  //
  // Rest of the Projects
  //
  {
    title: "The Plot Quickens",
    featured: false,
    tags: [
      "arudino",
      "p5",
      "generative",
      "raspberry pi",
      "store",
      "founder",
      "photogrammetry",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Generative studies in p5, photogrammetry & print making",
        description: [
          `Originally in 2016 I built a single head printer from a Makeblock kit to draw vectors and while that was fun, 
          I decided that multi color registration and complex cnc instructions were needed. I didn't feel I had 
          enough control over the fidelity of the drawings. So I stripped all the electronics and rebuilt the 
          plotter with an Arduino + gShield, a gentler printhead, and much more power. These refinements also
          required me to learn 3d printing in order to make the custom components I needed.`,
          `I have split my time with the plotting between extracting vectors from photogrammetry models and 
          generative art based primarily in p5js. Early scans with a sony a6 were actually somewhat troublesome 
          dealing with focus and resolution.Many forums later, I was able to build a rotating turntable and 
          python server that ran on my phone to take photos which allows for consistent detail on smaller objects
          and convinced me that phone cameras are an easier go for photogrammetry work (in common less controlled scenarios).`,
          `This work is for sale @theplotquickens on instagram and theplotquickens.today`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Seattle Creative Directory",
    featured: false,
    tags: [
      "nextjs",
      "postgres",
      "react",
      "seo",
      "startup",
      "uxui",
      "branding",
      "dataviz",
      "email",
      "engineering",
      "founder",
      "product",
      "research",
      "sales",
      "gatsby",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Learning react to catalog my neighbors",
        description: [
          `Seattle's creative community has a strong identity but its data is disparate, resources exist but aren't 
          comprehensive or easy to find. So I'm starting to catalog the design studios, inhouse product groups, architecture firms, 
          printers, photographers, letterers (and everyone in between) so we can support each other.`,
          `In tandem with the website, I'm recording audio interviews with the owners of these companies in an effort to 
          understand them, but also to understand what it means to be a creative professional.`,
          // `A nice profile of the work was written up in Marketing NW - https://bit.ly/New-Sea-Directory
          // Available on Github - https://github.com/jonmccon/scd-next
          // SeattleCreative.Directory - https://seattlecreative.directory/
          // SeattleCreative.Show - https://seattlecreative.show/`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
        subtitle: "Process",
        description: [
          `After encouragement from a friend, I prototyped the phonebook just in a simple google sheet and collected 
          multiple mailing lists from multiple controibutors. This data was then used in a Gatsby app to create a static
          page with limited tagging, filtering, and a lot of upkeep work.`,
          `Between freelance contracts I decided that it was a great means to learn Next.js and migrate all the static markdown data 
          into a postgres database. This allowed for a more robust search and filter system, and a more dynamic user experience.`
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Vinewars",
    featured: false,
    tags: [
      "illustration",
      "research",
      "sales",
      "uxui",
      "branding",
      "dataviz",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Hacking Twitter into a game",
        description: [
          `When Vine launched there was no way to view the best videos and no means of pulling them 
          into an interface outside of the app itself. I partnered with Angel Samano to not only take 
          a crack at scraping the Twitter API but make it into its own game. That team at Vine has since built, 
          and shuttered, their first party API for exploring content.`,
          `Under the direction of Tether Labs & lots of 16-bit illustrations later, we had a working prototype 
          for the collection, voting, ranking and sharing of the best Vines. Sometimes the best work isn't public, 
          but sometimes it's worth the trouble to give life to new tools.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "AIGA Seattle",
    featured: false,
    tags: [
      "wordpress",
      "branding",
      "community",
      "dataviz",
      "email",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Non profit marketing & operations tools",
        description: [
          `As a programming co-director for the Seattle chapter of AIGA I was responsible for event production 
          and general chapter engagement with the public. However, after a handful of years of being involved in 
          varying on-the-ground capacities before taking a board position, I was able to see where we had 
          stumbled operationally. So in the process of streamlining my planning, promoting and running events 
          I built out structure on varying web platforms and adapted them into chapter wide processes.`,
          `Implementing a digital portfolio of tools, the chapter handled ticketing and checkin on Eventbrite. 
          Square readers were still on hand for any merch or drinks (with distributed gray accounts for volunteers' personal phones).`, 
          `The national office had provided chapters a wordpress theme to use, but I found it to be unfocused. 
          I took it upon myself to research and design a custom theme for the chapter. Desined in collaboration 
          with Ben Hubbard it was built but eventually not used due to politics.`,
          `In additional collaboration with my co-director Calvin Carter, we digitized internal processes to leverage 
          Google Forms and data routed to the correct board member, and developed a server structure for shared 
          resources on our Google Apps account.`,
          `The geometric graphic work was a part of a membership rebrand from Kiss Me I'm Polish done at the same time.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Studio Tours",
    featured: false,
    tags: [
      "illustration",
      "research",
      "marketing",
      "email",
      "branding",
      "community",
      "dataviz",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Open the doors & let the people in",
        description: [
          `To keep the neighborhood tradition alive, I helped produce the Capitol Hill & Pioneer Square studio tours. 
          Collaborations with Neil Palmer to build promotional and mobile mapping tools made it feel like a proper gallery walk.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Pixels of Fury",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Live design fights & the magic of cardboard",
        description: [
          `Shutterstock wanted the Seattle AIGA chapter to host one of its battles in the Pixels of Fury championship 
          and I was able to play ringmaster at the lovely Makers Space for a night. Fueled by pizza, cupcakes and Hilliards beer, 
          six local designers duked it out in front of creative directors from Tether and Digital Kitchen in three rounds of 
          20 minute poster battles announced by Terry Marks. I built my own 3D cardboard & hot glue adaptation of the newly 
          announced Adobe CC logo to have it disassembled in a festive smashing mere seconds after announcing the final winner. 
          Luckily we had a proper crystal trophy, just in case.`,
          `Built by Neil Palmer`,
          `Photography from Erik Simkins`,
          // `https://www.shutterstock.com/blog/design/design-inspiration/pixels-of-fury
          // http://simkinsphotography.com/
          // Whole photoset is available here -https://www.flickr.com/photos/aiga_seattle/sets/72157632061861162/
          // https://www.linkedin.com/pub/neil-palmer/48/215/245`
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Decibel Festival Opening Ceremony",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "A poster show for the people, by the people",
        description: [
          `I produced the first & second annual official Decibel Festival Popup Artshows featuring over 40 local poster designers. 
          The 2013 centennial show called upon the talents of Benajmin Van Citters, Nick Bartoletti, Chris Blohm and Patrick Wright 
          to projection map and augment the whole show (from window displays, to rotating poster frames, to dancing skeleton tracking via Kinnect). 
          One monday night quadruple kegger later, it was the highest attended opening event in the festival's history.`,
          `2014 marked the introduction of EMP Museum's partnership with Decibel and made the poster festival a part of the Opening Gala in the Skychurch. 
          Email is often overlooked, but when approached at a person-to-person scale, it can be a powerful and honest driving force to inspire being 
          a part of a poster show full of your friends. All it takes is a Google Form, a spreadsheet, Mailchimp's merge tags, a heavy dose of 
          heartfelt honesty and you're just a pushpin supply away from an artshow.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Amazon Fire OS ",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Translating Material features for Fire tablet",
        description: [
          `As a member of the Digital Devices Group, I helped migrate the release of Android P into Amazon's Kindle tablet operating system. 
          I developed ux adaptations & updated visual treatments of existing and net new system level features including the architecture 
          of the home app launcher, content organization & recommendations, search results, top toggle, status alerts, and dark theme treatments.
          Along with balancing the performance on a different hardware spec and different appstore architecture of the Amazon product ecosystem.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Google Meet Detours",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "The web meets the desktop meets the telephone",
        description: [
          `As a member of the Hangouts Meet team, I worked on connections alternatives to better serve customers 
          with infrastructure limitations and explore hardware enhanced performance. My role was two-fold, one in helping to prototype 
          a downloadable Windows & Mac adaptation of the existing webapp. This required collaboration with the Material team to discuss appropriate 
          translations of the design system language outside of the browser. Including early visual explorations of dark mode on the desktop.`,
          `My secondary role was in designing a more robust web-to-phone connection that is currently a business feature in production. 
          This allows a user to join a meeting with the audio of their phone and the video of their computer which required direct collaboration
          with a team of engineers to understand the limitations of the existing multimedia infrastucture and how to improve it with shared goals.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Bakedin",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "An image wrapper for sharing",
        description: [
          `As a product designer for Stripes39, I balanced needs from the marketing and engineering teams to develop an
          identity and product positioning for an embeddable image wrapper tool targeted at infographic marketing. 
          Backed by an analytics platform to track where the image ended up being shared. As well as providing author, data sources, & promotion tools.`,
          `This was about the same time that Pinterest would have been a closed beta and there was no shared tooling around image makrketing. I have a distinct
          memory of locking myself in a room, filling a whiteboard of sketches for how it should work, what we needed to enable other companies to use it, '
          branding & naming options, and just emerging from the room with a plan ready to go.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Yakitate",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Freshly Baked",
        description: [
          `Identity system for an exhibition of emerging Japanese product designers at Dwell Magazine's 2011 Dwell on Design Conference in the LA Convention Center.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Awake Chocolate",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Directions to the caffeinated chocolate",
        description: [
          `Digital cartography platforms are notably difficult to theme visually due to the quantity of information presented and 
          how they're rendered. I asked myself just how far could I push Google Maps with a simple JSON styling tool and GPS locationing. 
          Honestly that led to me pushing myself to the brink of copy & paste insanity when I needed to geocode all the gas stations 
          across greater Ontario that carried these.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Microsoft Basel Concept",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "A gridnik from redmond",
        description: [
          `While at Wunderman I got the chance to work with a conceptual Microsoft design language meant to be flat like Metro, but more typography oriented`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "LYFE Foods & Kitchen",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Everything is part of your brand",
        description: [
          `Tether was the agency of record for Lyfe Foods, both a restaurant & available in frozen aisles. 
          I played the roles of web master for the marketing & online ordering site, as well as helping define the 
          modular visual language for email campaigns, the mobile website, and a living wall of user and first party content.`,
          `If brands are able to connect on a realistic person to person level, then they truly are part of a lifestyle. 
          Context of connection, just think through the whole of the system and your internet will keep pace.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Microsoft Learning Platform",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Holistic classroom surface",
        description: [
          `When Microsoft approached Tether to concept a digital learning platform that leveraged the capabilities 
          of its Surface tablets, the team got out the sticky notes & whiskey and went to town. The shared space of 
          collaborative writing, watching, and personal data management is still rich with potential despite the platform
          not taking off.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "XBOX One Smartglass",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Second screen ftw",
        description: [
          `While a part of the Xbox One R&D group I helped produce the TV Guide app to universally control 
          your watching experience. I as the primary designer available to engineering teams for simultaneous 
          development on iOS / Android / Microsoft phone & tablet for a 10-foot controller experience, voice, and Kinnect.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "A Few from Western",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "Graduating showcase in the Tether Gallery",
        description: [
          `In the North, near an arboretum strewn with brick, was a small tower dedicated to learning the craft of applied design thinking. 
          Problem was, no one ventured up there much. I was able to pull together an extra graduating show, planned with a handful of students, 
          in Seattle's Pioneer Square at the Tether Gallery. Single projects from 16 seniors, packed house, ridiculous guest book, what's better?`,
          `Design and production in collaboration with Riley Hoonan, Glenn Newcomer, photography from Erik Simkins. Special thanks to Daniel Petrzelka 
          & Bebet Caguin of Tether and the WWU Class of 2010.`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  {
    title: "Selection of work from school",
    featured: false,
    tags: [
      "00",
    ],
    // link: "https://placeholdertech.in",
    thumbURL: "/placeholdertech.png",
    sections: [
      {
        subtitle: "TITLE",
        description: [
          `Posters
          Hallie Anderson portfolio
          Blackspot show
          Design Day 09
          Klipsun magazine
          Simkins show poster
          This is Us
          Unosolo
          Short Shorts and Lawn Sports
          This Film is Free`,
        ],
        images: [
          "/projects/devmedium.png", 
          "/projects/devmedium.png"
        ],
      },
    ],
  },
  // {
  //   title: "PROJECT",
  //   featured: false,
  //   tags: [
  //     "00",
  //   ],
  //   // link: "https://placeholdertech.in",
  //   thumbURL: "/placeholdertech.png",
  //   sections: [
  //     {
  //       subtitle: "TITLE",
  //       description: [
  //         `DESCRIPTION`,
  //       ],
  //       images: [
  //         "/projects/devmedium.png", 
  //         "/projects/devmedium.png"
  //       ],
  //     },
  //   ],
  // },
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
