interface Shoes {
  id: string;
  name: string;
  size: number;
  color: string;
  image: string;
  offer: boolean;
}

export const ShoesMock: Shoes[] = [
  {
    id: "1",
    name: "Vans Old Skool",
    size: 42,
    color: "negro",
    image: "/vans.webp",
    offer: true,
  },
  {
    id: "2",
    name: "Nike Air Max",
    size: 44,
    color: "negro",
    image: "/nike.jpg",
    offer: false,
  },
  {
    id: "3",
    name: "Adidas Superstar",
    size: 43,
    color: "blanco",
    image: "/adidas.jpg",
    offer: true,
  },
  {
    id: "4",
    name: "Converse Chuck Taylor",
    size: 41,
    color: "negro",
    image: "/converse.jpg",
    offer: false,
  },
];