export type Inspiration = {
  id: string;
  title: string;
  image: string;
  tags: string[];
  creator: string;
  url: string;
};

export const inspirations: Inspiration[] = [
  {
    id: "1",
    title: "Minimal Dashboard UI",
    image: "/inspo/dashboard-01.jpg",
    tags: ["UI", "Dashboard", "Clean"],
    creator: "alexdsgn",
    url: "https://dribbble.com/shots/12345678-Minimal-Dashboard-UI",
  },
  {
    id: "2",
    title: "E-commerce Product Page",
    image: "/inspo/ecom-02.jpg",
    tags: ["UX", "E-commerce", "Cards"],
    creator: "jessgraphic",
    url: "https://dribbble.com/shots/23456789-Ecom-UX-Page",
  },
  // add more...
];
