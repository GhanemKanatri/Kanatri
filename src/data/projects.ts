export interface Project {
  slug: string;
  title: string;
  type: string;
  location: string;
  category: string;
  overview: string;
  role: string;
  achievements: string[];
  impact: string;
}

export const projects: Project[] = [
  {
    slug: "al-dandashi-villa",
    title: "Al Dandashi Villa",
    type: "Interior Design",
    location: "Turkey, Mersin",
    category: "INTERIOR DESIGN",
    overview:
      "A luxury residential villa in Mersin designed with modern finishes, including full architectural design.",
    role: "Architect, 3D Visualizer, Lead Engineer for Woodwork",
    achievements: [
      "Delivered full set of designs within tight deadlines",
      "Introduced innovative woodwork details that enhanced project quality",
    ],
    impact:
      "Elevated the residential experience through innovative woodwork and high-end interior finishes.",
  },
  {
    slug: "mr-zaid-villa",
    title: "Mr.Zaid Villa",
    type: "Exterior Design",
    location: "Turkey, Mersin",
    category: "EXTERIOR DESIGN",
    overview:
      "A luxury residential villa in Mersin designed with modern finishes, including full architectural design.",
    role: "Architect, 3D Visualizer, Lead Engineer for Woodwork",
    achievements: [
      "Delivered full set of designs within tight deadlines",
      "Introduced innovative woodwork details that enhanced project quality",
    ],
    impact:
      "Delivered a striking modern exterior that set a new standard for luxury residential design in the area.",
  },
  {
    slug: "emirates-keys",
    title: "Emirates Keys & Diagnostic Tools",
    type: "Interior Design",
    location: "Turkey, Mersin",
    category: "INTERIOR DESIGN",
    overview:
      "A commercial company headquarter in Mersin designed with modern finishes, including full architectural design.",
    role: "Architect, 3D Visualizer",
    achievements: [
      "Delivered full set of designs within tight deadlines",
      "Introduced innovative woodwork shop drawings that enhanced project quality",
    ],
    impact:
      "Created a functional and visually impressive headquarters that reflects the brand's professional identity.",
  },
  {
    slug: "mr-ramzan-apartment",
    title: "Mr.Ramzan Apartment",
    type: "Interior Design",
    location: "Turkey, Mersin",
    category: "INTERIOR DESIGN",
    overview:
      "A luxury residential apartment in Mersin designed with modern finishes, including full architectural design.",
    role: "Architect, 3D Visualizer, Lead Engineer for Woodwork",
    achievements: [
      "Delivered full set of designs within tight deadlines",
      "Introduced innovative woodwork details that enhanced project quality",
    ],
    impact:
      "Transformed a standard apartment into a luxury living space through thoughtful design and premium finishes.",
  },
  {
    slug: "mr-omar-aslan",
    title: "Mr.Omar Aslan",
    type: "Exterior Design",
    location: "Turkey, Mersin",
    category: "EXTERIOR DESIGN",
    overview:
      "A luxury residential villa in Mersin designed with modern finishes, including full architectural design.",
    role: "Architect, 3D Visualizer",
    achievements: ["Delivered full set of designs within tight deadlines"],
    impact:
      "Introduced innovative landscape details that enhanced the overall project quality and outdoor experience.",
  },
  {
    slug: "ms-ghader-mediterranean-villa",
    title: "Ms.Ghader Mediterranean Villa",
    type: "Interior Design",
    location: "Saudi Arabia, Jeddah",
    category: "INTERIOR DESIGN",
    overview:
      "A Mediterranean design villa in Jeddah designed with CLASS finishes, including full architectural design.",
    role: "Architect, 3D Visualizer, Lead Engineer for Woodwork",
    achievements: [
      "Delivered full set of designs within tight deadlines",
      "Introduced innovative woodwork details that enhanced project quality",
    ],
    impact:
      "Delivered a refined Mediterranean residence with high-class finishes and bespoke woodwork, setting a benchmark for luxury villas in Jeddah.",
  },
  {
    slug: "al-bab-industrial-city-square",
    title: "Al Bab Industrial City Square",
    type: "Urban/Landscape Design",
    location: "Syria, Al-Bab",
    category: "URBAN / LANDSCAPE DESIGN",
    overview:
      "Delivered a functional and symbolic design representing the industrial identity of the city at the main roundabout of Al-Bab Industrial City.",
    role: "Architect, 3D Visualizer",
    achievements: ["Delivered full set of designs within tight deadlines"],
    impact:
      "Provided a clear execution package that facilitated construction without design delays.",
  },
  {
    slug: "al-kayalli-villa",
    title: "Al Kayalli Villa",
    type: "Exterior/Landscape Design",
    location: "Turkey, Mersin",
    category: "EXTERIOR / LANDSCAPE DESIGN",
    overview:
      "A luxury residential villa complex in Mersin City designed with modern finishes, including full architectural design.",
    role: "Architect, 3D Visualizer",
    achievements: ["Delivered full set of designs within tight deadlines"],
    impact:
      "Provided a clear execution package that facilitated construction without design delays.",
  },
  {
    slug: "the-chedi-hegra",
    title: "The Chedi Hegra",
    type: "FIT Interior Fit-out",
    location: "Saudi Arabia, AlUla",
    category: "FIT INTERIOR FIT-OUT & JOINERY WORKS",
    overview:
      "The Chedi Hegra is the first luxury heritage hotel developed within the UNESCO World Heritage Site of Hegra in AlUla. The project is part of Saudi Arabia's Vision 2030.",
    role: "Fit-out Works Manager & Technical Architect",
    achievements: [
      "Successfully managed the execution of bespoke woodwork and luxury finishes aligned with the hotel's high standards",
    ],
    impact:
      "Maintained quality control by applying preventive technical measures and ensuring compliance with heritage-sensitive guidelines.",
  },
  {
    slug: "taiba-square",
    title: "Taiba Square",
    type: "Exterior Design",
    location: "Saudi Arabia, Al Madinah",
    category: "EXTERIOR DESIGN",
    overview:
      "Renovation of a commercial complex in Al Madinah Al Munawarah to comply with the city's visual identity standards.",
    role: "Project Manager – handled design proposals, documentation, and full project coordination",
    achievements: [
      "Delivered approved design proposals aligned with city identity",
      "Managed timely submittals and smooth coordination with authorities",
    ],
    impact:
      "Upgraded the complex's visual quality and compliance, setting a reference for future urban projects in the city.",
  },
  {
    slug: "ruby-jewelry-showroom",
    title: "Ruby Jewelry Showroom",
    type: "Luxury Retail / Interior Design & Fit-out",
    location: "Saudi Arabia, Jeddah",
    category: "LUXURY RETAIL / INTERIOR DESIGN & FIT-OUT",
    overview:
      "A luxury jewelry shop in Jeddah designed with modern finishes, including full architectural design and fit-out execution.",
    role: "3D Visualizer, Lead Architect & Project Manager",
    achievements: ["Delivered full set of designs within tight deadlines"],
    impact:
      "Provided end-to-end service: from design concept to full execution and client handover.",
  },
  {
    slug: "3d-design-series",
    title: "3D Design Series",
    type: "Conceptual & Personal Works",
    location: "Interior & Exterior & Landscape",
    category: "3D DESIGN — CONCEPTUAL & PERSONAL WORKS",
    overview:
      "A series of self-initiated conceptual projects designed using AI Architecture tools. These works explore creative ideas, enhance design skills, and propose innovative concepts for potential future developments.",
    role: "3D Visualizer & Concept Designer",
    achievements: [
      "Explored innovative architectural concepts using AI Architecture tools",
      "Developed a diverse range of interior, exterior, and landscape designs",
    ],
    impact:
      "Demonstrated creative versatility and a forward-thinking design approach across multiple architectural typologies.",
  },
];
