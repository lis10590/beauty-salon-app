const clients = [
  {
    id: "1",
    fullName: "Dana Levi",
    phoneNumber: "0527654384",
    treatmentHistory: {
      treatmentName: ["Gel Nail Polish"],
      date: [new Date("2022-02-16")],
    },
    productsPurchased: [],
  },
  {
    id: "2",
    fullName: "Shir Falcon",
    phoneNumber: "0527675385",
    treatmentHistory: {
      treatmentName: ["Gel Nail Polish"],
      date: [new Date("2022-02-15")],
    },
    productsPurchased: [],
  },

  {
    id: "3",
    fullName: "Yael Israeli",
    phoneNumber: "0527675388",
    treatmentHistory: {
      treatmentName: ["Pedicure"],
      date: [new Date("2022-01-15")],
    },
    productsPurchased: ["Gold Cream"],
  },

  {
    id: "4",
    fullName: "Sivan Amir",
    phoneNumber: "0527675388",
    treatmentHistory: {
      treatmentName: ["Pedicure"],
      date: [new Date("2022-01-15")],
    },
    productsPurchased: ["Gold Cream"],
  },
];

export const accountDetails = {
  firstName: "Lis",
  lastName: "Setgasy",
  email: "lis@gmail.com",
};

export const productList = [
  {
    productName: "Purifying Extract",
    manufacturer: "Hava Zingboim",
    productType: "Serum",
    productGroup: "Acne",
    price: 290,
  },
  {
    productName: "Active Gel",
    manufacturer: "Hava Zingboim",
    productType: "Treatment Gel",
    productGroup: "Acne",
    price: 200,
  },
  {
    productName: "Gold Cream",
    manufacturer: "KB Pure",
    productType: "Moisturizer",
    productGroup: "Anti-Aging",
    price: 350,
  },
];

export const treatmentList = [
  "Manicure",
  "Pedicure",
  "Gel Nail Polish",
  "Hair Removal",
  "Facial Treatment",
];

export default clients;
