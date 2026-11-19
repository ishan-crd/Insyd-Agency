// Who we are, in one place: used by the about and press pages, the footer and the search data.

export const SITE = "https://www.insyd.in";

export const STUDIO = {
  name: "Insyd Studios",
  short: "Insyd",
  email: "hello@insyd.in",
  based: "Delhi, India",
  founded: "2026",
};

export const FOUNDER = {
  name: "Ishan Gupta",
  role: "Founder, Insyd Studios",
  photo: "/press/ishan-gupta.jpg",
  website: "https://ishandev.in",
  linkedin: "https://linkedin.com/in/ishan2131",
  github: "https://github.com/ishan-crd",
};

export const GAME = {
  name: "Bambai",
  tagline: "An open-world game set in South Mumbai",
  itch: "https://sneakypp.itch.io/bambai",
  platform: "PC (Windows)",
  engine: "Unreal Engine 5",
  status: "In development. Free playable build on itch.io",
  views: "1.5M+",
};

/** The numbers that tell the story fast. */
export const FACTS = [
  { value: "1", label: "developer" },
  { value: "5", label: "weeks to the first playable" },
  { value: GAME.views, label: "views on the gameplay reel" },
  { value: "UE5", label: "built in Unreal Engine 5" },
];

export const SCREENSHOTS = [
  { src: "/bambai/img/marinedrive.jpg", alt: "Marine Drive after the rain" },
  { src: "/bambai/img/rajabai.jpg", alt: "Rajabai Clock Tower over the Oval" },
  { src: "/bambai/img/taj.jpg", alt: "The Taj and the harbour" },
  { src: "/bambai/img/csmt.jpg", alt: "The Fort" },
];

/** Search data: tells Google that Insyd Studios, Ishan Gupta and Bambai are one connected story. */
export function searchData() {
  const org = `${SITE}/#studio`;
  const person = `${SITE}/about#ishan`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": org,
        name: STUDIO.name,
        alternateName: ["Insyd", "Insyd Studio"],
        url: SITE,
        logo: `${SITE}/press/insyd-logo-512.png`,
        email: STUDIO.email,
        foundingDate: STUDIO.founded,
        founder: { "@id": person },
        address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
        sameAs: [GAME.itch],
      },
      {
        "@type": "Person",
        "@id": person,
        name: FOUNDER.name,
        jobTitle: "Founder",
        worksFor: { "@id": org },
        image: `${SITE}${FOUNDER.photo}`,
        url: `${SITE}/about`,
        sameAs: [FOUNDER.website, FOUNDER.linkedin, FOUNDER.github],
      },
      {
        "@type": "VideoGame",
        "@id": `${SITE}/#bambai`,
        name: GAME.name,
        description:
          "Bambai is an open-world game set in South Mumbai, built street by street in Unreal Engine 5: Marine Drive, the Fort, the Taj, the Gateway of India, taxis, crowds and the monsoon.",
        url: SITE,
        image: `${SITE}/bambai/img/og.jpg`,
        genre: ["Open world", "Action adventure"],
        gamePlatform: "PC",
        operatingSystem: "Windows",
        author: { "@id": person },
        publisher: { "@id": org },
        creator: { "@id": org },
        sameAs: [GAME.itch],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE}/#site`,
        name: STUDIO.name,
        url: SITE,
        publisher: { "@id": org },
      },
    ],
  };
}

export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}
