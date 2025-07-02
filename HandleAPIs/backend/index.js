import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';

// it simply reads your .env file and injects values into process.env.
dotenv.config();

const app = express();

// If Vite Proxy is used in frontend, Then no need to use cors in backend
// Fetch the CORS ORIGIN from env file
// app.use(cors({
//   origin: process.env.CORS_ORIGIN,
// }));

// ✅ Allow all origins
// app.use(cors());

app.get('/', (req, res) => {
  console.log("Chill Mode On, Server is Running !!!");
  res.send('Server is Chilling...');
})

app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: "Modern Wooden Chair",
      price: 499,
      image: "https://images.unsplash.com/photo-1602524201490-52e5bcb22c63?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 2,
      name: "Oak Coffee Table",
      price: 799,
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 3,
      name: "Minimalist Bookshelf",
      price: 650,
      image: "https://images.unsplash.com/photo-1616627983044-dfa1c1292d65?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 4,
      name: "Cozy Fabric Sofa",
      price: 999,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
    },
    {
      id: 5,
      name: "Rustic Bed Frame",
      price: 899,
      image: "https://images.unsplash.com/photo-1598300051390-cd1a3c2e7c94?auto=format&fit=crop&w=500&q=80"
    },
  ];

  // To Achieve: http://localhost:3000/api/products?search=wood

  // Filter the data based on the search query
  // console.log(req.query);
  
  if(req.query.search) { // It will give the value inside the search query
    const filterProducts = products.filter(product => product.name.toLowerCase().includes(req.query.search.toLowerCase()));
    res.send(filterProducts);
    return;
  }

  // Send the data after 3s
  setTimeout(() => {
    res.send(products);
  }, 3000);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});