export interface Event {
    id: number;
    name: string;
    image: string;
    date: string;
    city: string;
    location: {
      latitude: string;
      longitude: string;
    },
    desc: string;
    categoryId: number;
    price: number;
}