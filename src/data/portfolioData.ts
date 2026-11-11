/**
 * Portfolio Data Configuration for Malleshwari
 * Easily customizable data structure for all projects, skills, experience, and profile.
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: '3d-modelling' | 'product-viz' | 'environment' | 'texturing';
  categoryLabel: string;
  shortDescription: string;
  overview: string;
  coverImage: string;
  wireframeImage?: string;
  detailImages: string[];
  software: string[];
  modellingProcess: string;
  texturingProcess: string;
  polyCount?: string;
  completionYear: string;
  dimensions?: string;
  isFeatured?: boolean;
}

export interface SkillCategory {
  title: string;
  category: string;
  tools: {
    name: string;
    role: string;
    iconSvg: string;
    colorAccent?: string;
  }[];
}

export const PROFILE_DATA = {
  name: 'Malleshwari',
  brandName: 'MALLESHWARI®',
  title: '3D Artist',
  tagline: 'CRAFTING VISUALS. SHAPING DIMENSIONS.',
  designation: '3D Artist | 3D Modelling | Texturing | Visual Storytelling',
  education: 'Bachelor of Science (B.Sc.) in Visual Communication',
  company: 'Logistics Sector Skill Council (LSC)',
  companyDesignation: '3D Artist',
  joiningDateString: '05 March 2026',
  joiningDate: new Date(2026, 2, 5),
  status: 'PRESENT — CURRENTLY WORKING',
  email: 'domamalleshwari@gmail.com',
  location: 'India',
  bio: "I'm Malleshwari, a 3D Artist passionate about transforming creative ideas into immersive visual experiences through 3D modelling, product visualization, environments and texturing.",
  aboutText: [
    "I'm Malleshwari, a 3D Artist with a background in Visual Communication. I enjoy exploring creativity through digital design and traditional art. My interests include 3D modelling, material creation, product visualization, environment design, drawing, painting and crafting.",
    "Currently, I work as a 3D Artist at the Logistics Sector Skill Council, where I continue developing my creative and technical capabilities through professional projects.",
    "I believe every creative idea has the potential to become an engaging visual experience."
  ],
  socials: {
    linkedin: 'https://linkedin.com/in/malleshwari',
    behance: 'https://behance.net/malleshwari',
    artstation: 'https://artstation.com/malleshwari',
  },
  creativeInterests: [
    {
      title: 'Drawing',
      subtitle: 'Anatomy, Form & Proportion',
      description: 'Foundational charcoal and pencil studies that establish silhouettes, structural rhythm, and anatomical depth before digitizing in 3D.',
      skills: ['Life Drawing', 'Anatomy Studies', 'Gesture & Silhouette']
    },
    {
      title: 'Painting',
      subtitle: 'Color Harmonies & Lighting',
      description: 'Acrylic and digital painting exploring specular falloffs, color temperature relationships, and physical lighting behavior on varied planes.',
      skills: ['Color Theory', 'Light Value Mapping', 'Compositional Balance']
    },
    {
      title: 'Crafting',
      subtitle: 'Tactile Form & Sculpting',
      description: 'Hands-on clay sculpting and physical model fabrication providing tangible intuition for organic curvature and material wear patterns.',
      skills: ['Clay Sculpting', 'Tactile Prototyping', 'Surface Textures']
    }
  ]
};

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'heavy-recon-drone',
    title: 'Aeronautic Heavy Recon Drone',
    category: '3d-modelling',
    categoryLabel: '01 — 3D Modelling',
    shortDescription: 'Industrial hard-surface military recon drone with high-density poly mechanical joints and exposed carbon chassis.',
    overview: 'A production-grade hard-surface asset model designed for cinematic visualization. Focused on realistic mechanical ergonomics, articulating rotor arms, and avionics sensor enclosures.',
    coverImage: '/src/assets/images/project_3d_modelling_1794376826511.jpg',
    detailImages: [
      '/src/assets/images/project_3d_modelling_1794376826511.jpg',
      '/src/assets/images/project_environment_1794376828761.jpg'
    ],
    software: ['Autodesk Maya', 'Blender', 'Substance 3D Painter'],
    modellingProcess: 'Constructed using precision subdivision surface workflow in Maya and Blender. Clean quad topology maintained throughout articulating hinges and avionics mounts to enable deformation-free rigging.',
    texturingProcess: 'Textured inside Substance 3D Painter using multi-layered smart masks for edge scuffs, carbon weave anisotropic specular maps, and subtle micro-scratch roughness variations.',
    polyCount: '124,500 Quads',
    completionYear: '2026',
    dimensions: '2.4m x 2.1m x 0.85m',
    isFeatured: true
  },
  {
    id: 'chronograph-horology',
    title: 'Titanium Chronograph Masterpiece',
    category: 'product-viz',
    categoryLabel: '02 — Product Visualization',
    shortDescription: 'Luxury commercial product visualization of a brushed titanium mechanical chronograph watch with sapphire crystal.',
    overview: 'High-end commercial product visualization study highlighting realistic macro material properties: brushed bevels, anti-reflective sapphire crystal coating, and multi-layered dial indices.',
    coverImage: '/src/assets/images/project_product_viz_1794376827857.jpg',
    detailImages: [
      '/src/assets/images/project_product_viz_1794376827857.jpg',
      '/src/assets/images/project_texturing_1794376828991.jpg'
    ],
    software: ['Blender', 'Autodesk Maya', 'Photoshop'],
    modellingProcess: 'Precision CAD-informed polygon modeling of watch case, knurled crowns, rotating tachymeter bezel, and linked oyster bracelet with sub-millimeter chamfer tolerances.',
    texturingProcess: 'Realistic physical PBR shader setup with circular brushed radial anisotropy on the dial subdials, dual-layer anti-reflective glass dispersion, and tactile bead-blasted titanium roughness.',
    polyCount: '210,000 Quads',
    completionYear: '2026',
    dimensions: '42mm Case Diameter',
    isFeatured: true
  },
  {
    id: 'logistics-hangar-bay',
    title: 'Aether Logistics Hangar Bay',
    category: 'environment',
    categoryLabel: '03 — Environment Design',
    shortDescription: 'Industrial sci-fi cargo staging hub with volumetric atmospheric lighting and modular architectural assets.',
    overview: 'Expansive sci-fi logistical hub scene designed to showcase industrial scale, automated gantry systems, container staging bays, and volumetric atmospheric depth.',
    coverImage: '/src/assets/images/project_environment_1794376828761.jpg',
    detailImages: [
      '/src/assets/images/project_environment_1794376828761.jpg',
      '/src/assets/images/project_3d_modelling_1794376826511.jpg'
    ],
    software: ['Autodesk Maya', 'Blender', 'Substance 3D Painter', 'Photoshop'],
    modellingProcess: 'Modular kitbash architecture with interlocking structural girders, overhead crane tracks, hydraulic service lifts, and standardized heavy cargo shipping containers.',
    texturingProcess: 'Procedural tiling materials combined with custom Substance Painter hero props. Wet reflective floor puddles using layered roughness maps and volumetric fog scatter particles.',
    polyCount: '580,000 Polys',
    completionYear: '2026',
    dimensions: '120m x 80m x 35m Bay',
    isFeatured: true
  },
  {
    id: 'antique-patina-sphere',
    title: 'Substance Material Patina Study',
    category: 'texturing',
    categoryLabel: '04 — Texturing & Materials',
    shortDescription: 'Macro material study of weathered antique bronze and pitted matte plaster with physical roughness gradation.',
    overview: 'A deep-dive texturing exploration into historical material degradation, contrasting heavy oxidation and copper verdigris patina against porous, aged architectural plaster.',
    coverImage: '/src/assets/images/project_texturing_1794376828991.jpg',
    detailImages: [
      '/src/assets/images/project_texturing_1794376828991.jpg',
      '/src/assets/images/project_product_viz_1794376827857.jpg'
    ],
    software: ['Substance 3D Painter', 'Photoshop', 'Blender'],
    modellingProcess: 'Curvature-optimized test sphere with bisected split seam and irregular chipped edge geometry to stress-test high-frequency normal and displacement maps.',
    texturingProcess: 'Hand-painted curvature wear masks combined with procedural ambient occlusion dirt generators. 4K UDIM workflow with custom micro-height maps for authentic pitting.',
    polyCount: '48,000 Quads',
    completionYear: '2026',
    dimensions: 'Material Calibration Unit',
    isFeatured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: '3D Modelling',
    category: 'Primary Domain',
    tools: [
      {
        name: 'Autodesk Maya',
        role: 'Subdivision Surfaces, Hard-Surface Topology & UV Unwrapping',
        iconSvg: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
        colorAccent: '#0696D7'
      },
      {
        name: 'Blender',
        role: 'Parametric Props, Asset Prototyping & Procedural Layout',
        iconSvg: 'M12 3C6.48 3 2 7.48 2 13c0 3.2 1.52 6.04 3.86 7.84.44.34 1.07.03 1.07-.53v-2.12c0-.44-.26-.84-.66-1.01-1.39-.59-2.27-1.99-2.27-3.68 0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.29 1.7-.78 2.36-.26.35-.19.85.16 1.11l1.7 1.28c.37.28.9.18 1.14-.23C15.42 16.59 16 14.88 16 13c0-5.52-4.48-10-10-10z',
        colorAccent: '#EA7600'
      }
    ]
  },
  {
    title: 'Texturing & Shading',
    category: 'Material Craft',
    tools: [
      {
        name: 'Adobe Substance 3D Painter',
        role: 'PBR Shaders, Smart Materials, Curvature Masks & Hand-Painted Wear',
        iconSvg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8 12.5c0 .83-.67 1.5-1.5 1.5H7v-6h2.5c.83 0 1.5.67 1.5 1.5v3zm6 0c0 .83-.67 1.5-1.5 1.5h-3v-6h3c.83 0 1.5.67 1.5 1.5v3z',
        colorAccent: '#E11D48'
      }
    ]
  },
  {
    title: 'Graphic Design',
    category: 'Visual Foundation',
    tools: [
      {
        name: 'Adobe Photoshop',
        role: 'Texture Map Compositing, Concept Art & Visual Post-Processing',
        iconSvg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.5 15.5H7.75v-7h2.75c1.24 0 2 .76 2 1.88 0 1.25-.87 1.87-2 1.87H9.5v3.25zm4.75 0h-1.75V11.5h1.75c.96 0 1.5.54 1.5 1.38 0 .83-.54 1.37-1.5 1.37z',
        colorAccent: '#31A8FF'
      },
      {
        name: 'Adobe Illustrator',
        role: 'Vector Decals, Brand Insignias & Alpha Mask Generation',
        iconSvg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.8 12.5l-.65-2h-2.1l-.65 2H5l2.6-7h1.6l2.6 7h-1.6zm4.8 0h-1.6v-7h1.6v7z',
        colorAccent: '#FF9A00'
      }
    ]
  },
  {
    title: 'Video & Motion',
    category: 'Dynamic Presentation',
    tools: [
      {
        name: 'Adobe Premiere Pro',
        role: 'Showreel Assembly, Turnaround Cuts & Sound Design Sync',
        iconSvg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9.5 15.5H7.75v-7h2.75c1.24 0 2 .76 2 1.88 0 1.25-.87 1.87-2 1.87H9.5v3.25zm6.5 0h-1.75v-4.5h-1.5V9.75h3.25v5.75z',
        colorAccent: '#9999FF'
      },
      {
        name: 'Adobe After Effects',
        role: 'Camera Tracking, Depth Passes, Lens Flare & Turnaround Effects',
        iconSvg: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-8.8 12.5l-.65-2h-2.1l-.65 2H5l2.6-7h1.6l2.6 7h-1.6zm6.8-1.5c-.3.9-.9 1.5-2 1.5-1.4 0-2.2-1-2.2-2.5 0-1.6.9-2.5 2.2-2.5 1.1 0 1.7.6 2 1.5h-1.4c-.1-.4-.3-.6-.6-.6-.5 0-.8.4-.8 1.6 0 1.1.3 1.5.8 1.5.3 0 .5-.2.6-.6h1.4z',
        colorAccent: '#9999FF'
      }
    ]
  },
  {
    title: 'Traditional Creative Skills',
    category: 'Artistic Foundation',
    tools: [
      {
        name: 'Drawing',
        role: 'Form & Gesture: Foundational charcoal, perspective, and anatomical contouring',
        iconSvg: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
        colorAccent: '#C8FF55'
      },
      {
        name: 'Painting',
        role: 'Light & Color: Pigment temperature, light falloffs, and surface specular theory',
        iconSvg: 'M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.79-1.79C9.25 19.64 10.58 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-4.5 9c-.83 0-1.5-.67-1.5-1.5S6.67 9 7.5 9s1.5.67 1.5 1.5S8.33 12 7.5 12zm3-4c-.83 0-1.5-.67-1.5-1.5S9.67 5 10.5 5s1.5.67 1.5 1.5S11.33 8 10.5 8zm3 0c-.83 0-1.5-.67-1.5-1.5S12.67 5 13.5 5s1.5.67 1.5 1.5S14.33 8 13.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S15.67 9 16.5 9s1.5.67 1.5 1.5S17.33 12 16.5 12z',
        colorAccent: '#C8FF55'
      },
      {
        name: 'Crafting',
        role: 'Tactile Sculpting: Tangible volume understanding, polymer modeling, and spatial awareness',
        iconSvg: 'M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.991.991 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9z',
        colorAccent: '#C8FF55'
      }
    ]
  }
];
