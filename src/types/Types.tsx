export type Token = {
  accessToken: string;
  user: {
    email: string;
    role: string;
    id: number;
  };
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
  qty: number;
  pricetotal: number;
};

export type Orders = {
  client: string;
  table: string;
  products: [
    {
      id: number;
      name: string;
      price: number;
      qty: number;
      pricetotal: number;
      image: string;
      type: string;
      dateEntry: string;
    }
  ];
  dateEntry: string;
  dateFinal: string;
  id: number;
  status: string;
};

export type Workers = {
  name: string;
  email: string;
  role: string;
  id: number;
  password: string
};
