// MODENA editable website content
// --------------------------------
// This is the main file to edit when you want to update website text,
// contact details, services, or vehicles.
//
// Keep quotation marks around text values.
// Vehicle images should live in: /public/images/vehicles/
// In this file, image paths start with: /images/vehicles/

export type Vehicle = {
  slug: string;
  manufacturer: string;
  model: string;
  year: string;
  mileage: string;
  transmission: string;
  price: string;
  image: string;
  imageAlt: string;
  imagePosition: string;
  description: string;
  highlights: string[];
};

export const siteContent = {
  brand: {
    name: "MODENA",
    fullName: "MODENA PERFORMANCE",
    logo: "/brand/modena-performance-gold.png",
    copyright: "© 2026 MODENA. All rights reserved.",
  },

  contact: {
    // Update these when the business contact details change.
    email: "concierge@modenaperformance.com",
    phoneDisplay: "WhatsApp Concierge",
    whatsappUrl:
      "https://wa.me/971000000000?text=Hello%20MODENA%2C%20I%20would%20like%20to%20discuss%20a%20vehicle.",
    whatsappBaseUrl: "https://wa.me/971000000000",
    whatsappShortLabel: "WhatsApp",
    location: "United Kingdom",
  },

  navigation: [
    { label: "Vehicles", href: "/vehicles" },
    { label: "Sourcing", href: "/sourcing" },
    { label: "Brokerage", href: "/sell-your-car" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  metadata: {
    title: "MODENA | Luxury Automotive Sales, Sourcing and Brokerage",
    description:
      "MODENA is a luxury automotive sales, sourcing and brokerage house for exceptional performance cars and private clients.",
    siteUrl: "https://modenaperformance.com",
  },

  home: {
    hero: {
      eyebrow: "PRIVATE CLIENT AUTOMOTIVE",
      headline: "MODENA PERFORMANCE",
      supportingHeadline: "Private automotive brokerage.",
      supportingCopy: "Sales, sourcing and brokerage for collectors, enthusiasts and private clients.",
      imageLabel: "Image reserved",
    },
    featuredVehicles: {
      eyebrow: "Featured vehicles",
      heading: "Represented with precision.",
      linkLabel: "View vehicles",
    },
    services: {
      eyebrow: "Services",
      heading: "Sales, sourcing and brokerage.",
      items: [
        {
          title: "Private Sales",
          copy: "Professional representation for exceptional vehicles and the clients who own them.",
        },
        {
          title: "Private Sourcing",
          copy: "A considered search guided by specification, provenance and timing.",
        },
        {
          title: "Brokerage",
          copy: "Advisory, negotiation and transaction management handled with discretion.",
        },
      ],
    },
    about: {
      eyebrow: "About",
      heading: "Exclusively considered.",
      imageLabel: "Image reserved",
      paragraphs: [
        "MODENA represents collectors, enthusiasts and private clients with a considered approach to vehicle sales, sourcing and brokerage.",
        "Every engagement is handled with attention to specification, provenance, presentation and long-term client relationships.",
        "Whether sourcing a single vehicle or managing an entire collection, the objective remains the same: professional representation delivered with discretion.",
      ],
    },
    contact: {
      eyebrow: "Contact",
      heading: "Begin privately.",
      copy: "Request a consultation regarding a vehicle acquisition, sale or sourcing requirement.",
    },
  },

  pages: {
    vehicles: {
      metadataTitle: "Vehicles",
      metadataDescription: "Review selected luxury and performance vehicles represented through MODENA.",
      eyebrow: "Vehicles",
      heading: "Vehicles represented with discretion.",
      copy: "A concise view of current and representative opportunities, prepared for future image assets and detailed provenance files.",
      backLabel: "Back to vehicles",
      yearLabel: "Year",
      mileageLabel: "Mileage",
      transmissionLabel: "Transmission",
      priceLabel: "Price",
      detailHighlightsLabel: "Highlights",
      enquiryEyebrow: "Private enquiry",
      enquiryHeading: "Discuss this vehicle.",
    },
    sourcing: {
      metadataTitle: "Sourcing",
      metadataDescription: "Private automotive sourcing for rare, luxury and performance cars through MODENA.",
      eyebrow: "Sourcing",
      heading: "A private search, conducted with discretion.",
      copy: "From market mapping to inspection, negotiation and handover, MODENA supports clients seeking the right car rather than the merely available car.",
      steps: ["Brief", "Source", "Secure"],
      stepCopy: "A clear, client-led process designed around specification, timing, provenance and confidence.",
      formHeading: "Begin a sourcing brief.",
      formIntent: "Sourcing enquiry",
    },
    sellYourCar: {
      metadataTitle: "Sell Your Car",
      metadataDescription: "Sell or consign a luxury performance car through MODENA.",
      eyebrow: "Sell your car",
      heading: "Position your vehicle for the right buyer.",
      copy: "MODENA supports private owners with pricing guidance, preparation, presentation, buyer handling and discreet brokerage.",
      points: [
        "Valuation and market position",
        "Presentation preparation",
        "Confidential buyer outreach",
        "Negotiation and handover",
      ],
      formHeading: "Request a private valuation.",
      formIntent: "Sell your car enquiry",
    },
    about: {
      metadataTitle: "About",
      metadataDescription: "Learn about MODENA, a luxury automotive sales, sourcing and brokerage house.",
      eyebrow: "About",
      heading: "Exclusively considered.",
      copy: "MODENA represents collectors, enthusiasts and private clients with a considered approach to vehicle sales, sourcing and brokerage.",
      paragraphs: [
        "Every engagement is handled with attention to specification, provenance, presentation and long-term client relationships.",
        "Whether sourcing a single vehicle or managing an entire collection, the objective remains the same: professional representation delivered with discretion.",
      ],
      values: [
        {
          title: "Discreet",
          copy: "A quieter standard of automotive representation for buyers and sellers.",
        },
        {
          title: "Precise",
          copy: "A quieter standard of automotive representation for buyers and sellers.",
        },
        {
          title: "Client-led",
          copy: "A quieter standard of automotive representation for buyers and sellers.",
        },
      ],
    },
    contact: {
      metadataTitle: "Contact",
      metadataDescription: "Contact MODENA for luxury automotive sales, sourcing and brokerage enquiries.",
      eyebrow: "Contact",
      heading: "Begin privately.",
      copy: "Request a consultation regarding a vehicle acquisition, sale or sourcing requirement.",
      whatsappLabel: "Open WhatsApp",
    },
  },

  forms: {
    // Edit form labels and button text here.
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone / WhatsApp",
      message: "Message",
    },
    submitLabel: "Send Enquiry",
    defaultIntent: "General enquiry",
  },

  footer: {
    description: "Luxury automotive sales, sourcing and brokerage for collectors, enthusiasts and private clients.",
    servicesHeading: "Services",
    contactHeading: "Contact",
  },

  vehicles: [
    {
      slug: "mercedes-g63-amg",
      manufacturer: "Mercedes-Benz",
      model: "G63 AMG",
      year: "2024",
      mileage: "2,900 miles",
      transmission: "Automatic",
      price: "Price On Application",
      image: "/images/vehicles/g63.jpg",
      imageAlt: "Black Mercedes-AMG G63",
      imagePosition: "50% 66%",
      description:
        "A highly specified G63 AMG presented for clients seeking presence, capability and long-term desirability.",
      highlights: ["Considered specification", "Documented provenance", "Low mileage", "Private client presentation"],
    },
    {
      slug: "bmw-x5m-competition",
      manufacturer: "BMW",
      model: "X5M Competition",
      year: "2024",
      mileage: "3,600 miles",
      transmission: "Automatic",
      price: "Price On Application",
      image: "/images/vehicles/x5m.jpg",
      imageAlt: "BMW X5M Competition",
      imagePosition: "54% 58%",
      description:
        "A performance SUV selected for its breadth, condition and suitability as a refined daily performance car.",
      highlights: ["Competition specification", "Performance SUV", "Detailed history", "Inspection-led representation"],
    },
    {
      slug: "porsche-911-gt3-touring",
      manufacturer: "Porsche",
      model: "911 GT3 Touring",
      year: "2023",
      mileage: "5,200 miles",
      transmission: "Manual",
      price: "Price On Application",
      image: "/images/vehicles/gt3.jpg",
      imageAlt: "Porsche 911 GT3 Touring",
      imagePosition: "50% 54%",
      description:
        "A Touring configuration shaped for clients who value mechanical purity, discretion and lasting relevance.",
      highlights: ["Manual gearbox", "Touring package", "Driver-focused specification", "Provenance review"],
    },
  ] satisfies Vehicle[],
};

export const vehicles = siteContent.vehicles;
