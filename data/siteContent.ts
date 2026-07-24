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
  detailHeroImage?: string;
  rearImage: string;
  imageAlt: string;
  imagePosition: string;
  description: string;
  highlights: string[];
  gallery?: Array<{
    src: string;
    alt: string;
  }>;
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
    email: "hello@modenaperformance.com",
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
      copy: "An evolving selection of performance vehicles, chosen and presented with consideration.",
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
      image: "/images/inventory/views/g63-amg-front.png",
      detailHeroImage: "/images/inventory/g63-detail/hero.png",
      rearImage: "/images/inventory/views/g63-amg-rear.png",
      imageAlt: "Black Mercedes-AMG G63 shown from front and rear in a warehouse",
      imagePosition: "50% 50%",
      description:
        "The G63 pairs its unmistakable form with a 4.0-litre V8, permanent four-wheel drive and a cabin finished for long-distance use.",
      highlights: ["4.0-litre V8", "Nine-speed automatic", "Three differential locks", "Black exterior specification"],
      gallery: [
        {
          src: "/images/inventory/g63-detail/side.png",
          alt: "Side profile of the black Mercedes-AMG G63",
        },
        {
          src: "/images/inventory/g63-detail/interior.png",
          alt: "Black leather interior of the Mercedes-AMG G63",
        },
        {
          src: "/images/inventory/g63-detail/wheel.png",
          alt: "Black alloy wheel and front bodywork of the Mercedes-AMG G63",
        },
      ],
    },
    {
      slug: "bmw-x5m-competition",
      manufacturer: "BMW",
      model: "X5M Competition",
      year: "2024",
      mileage: "3,600 miles",
      transmission: "Automatic",
      price: "Price On Application",
      image: "/images/inventory/views/x5m-competition-front.png",
      rearImage: "/images/inventory/views/x5m-competition-rear.png",
      imageAlt: "Black BMW X5 M Competition shown from front and rear in a warehouse",
      imagePosition: "50% 50%",
      description:
        "The X5 M Competition combines a twin-turbocharged V8 and M xDrive with the space and composure of BMW’s full-size performance SUV.",
      highlights: ["4.4-litre V8", "Eight-speed automatic", "M xDrive", "Competition specification"],
    },
    {
      slug: "porsche-911-gt3-touring",
      manufacturer: "Porsche",
      model: "911 GT3 RS",
      year: "2023",
      mileage: "6,200 miles",
      transmission: "PDK",
      price: "Price On Application",
      image: "/images/inventory/views/911-gt3-rs-front.png",
      rearImage: "/images/inventory/views/911-gt3-rs-rear.png",
      imageAlt: "Black Porsche 911 GT3 RS shown from front and rear in a warehouse",
      imagePosition: "50% 50%",
      description:
        "A focused 911 shaped around its naturally aspirated flat-six, active aerodynamics and an uncompromising connection between road and driver.",
      highlights: ["4.0-litre flat-six", "Seven-speed PDK", "Active aerodynamics", "Rear-wheel drive"],
    },
    {
      slug: "audi-rs6-avant",
      manufacturer: "Audi",
      model: "RS 6 Avant",
      year: "2023",
      mileage: "9,800 miles",
      transmission: "Automatic",
      price: "Price On Application",
      image: "/images/inventory/views/rs6-avant-front.png",
      rearImage: "/images/inventory/views/rs6-avant-rear.png",
      imageAlt: "Grey Audi RS 6 Avant shown from front and rear in a warehouse",
      imagePosition: "50% 50%",
      description:
        "The RS 6 Avant brings together a twin-turbocharged V8, quattro traction and genuine estate-car utility in one resolved package.",
      highlights: ["4.0-litre V8", "Eight-speed automatic", "Quattro all-wheel drive", "Avant body"],
    },
    {
      slug: "bmw-m5-competition",
      manufacturer: "BMW",
      model: "M5 Competition",
      year: "2022",
      mileage: "14,500 miles",
      transmission: "Automatic",
      price: "Price On Application",
      image: "/images/inventory/views/m5-competition-front.png",
      rearImage: "/images/inventory/views/m5-competition-rear.png",
      imageAlt: "Black BMW M5 Competition shown from front and rear in a warehouse",
      imagePosition: "50% 50%",
      description:
        "A discreet performance saloon built around BMW’s twin-turbocharged V8, M xDrive and the everyday clarity of the F90 generation.",
      highlights: ["4.4-litre V8", "Eight-speed automatic", "M xDrive", "Competition specification"],
    },
    {
      slug: "audi-rsq8",
      manufacturer: "Audi",
      model: "RS Q8",
      year: "2024",
      mileage: "4,200 miles",
      transmission: "Automatic",
      price: "Price On Application",
      image: "/images/inventory/views/rsq8-front.png",
      rearImage: "/images/inventory/views/rsq8-rear.png",
      imageAlt: "Black Audi RS Q8 shown from front and rear in a warehouse",
      imagePosition: "50% 50%",
      description:
        "Audi’s flagship performance SUV balances its twin-turbocharged V8 and quattro system with a quiet, generously proportioned interior.",
      highlights: ["4.0-litre V8", "Eight-speed automatic", "Quattro all-wheel drive", "RS specification"],
    },
    {
      slug: "lamborghini-urus-performante",
      manufacturer: "Lamborghini",
      model: "Urus Performante",
      year: "2024",
      mileage: "3,100 miles",
      transmission: "Automatic",
      price: "Price On Application",
      image: "/images/inventory/views/urus-performante-front.png",
      rearImage: "/images/inventory/views/urus-performante-rear.png",
      imageAlt: "Black Lamborghini Urus Performante shown from front and rear in a warehouse",
      imagePosition: "50% 50%",
      description:
        "The Urus Performante sharpens Lamborghini’s performance SUV with reduced weight, a lower chassis and a more direct road-focused character.",
      highlights: ["4.0-litre V8", "Eight-speed automatic", "All-wheel drive", "Performante specification"],
    },
  ] satisfies Vehicle[],
};

export const vehicles: Vehicle[] = siteContent.vehicles;
