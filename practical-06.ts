type ProductType = {
  name: string;
  price: number;
};

let discount: number = 10;

const product: ProductType[] = [
  {
    name: "Laptop",
    price: 30000,
  },
  {
    name: "Headphone",
    price: 2500,
  },
  {
    name: "Speaker",
    price: 1000,
  },
];

console.log(`Flat Discount Rate: ${discount}`);

console.log(
  `${product[0].name}: ${product[0].price}/- (Discount: ${(product[0].price * discount) / 100}/-)`,
);
console.log(
  `${product[1].name}: ${product[1].price}/- (Discount: ${(product[1].price * discount) / 100}/-)`,
);
console.log(
  `${product[2].name}: ${product[2].price}/- (Discount: ${(product[2].price * discount) / 100}/-)`,
);
