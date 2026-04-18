const express = require('express');
const app = express();

const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Users & Orders API is running...');
});

app.use('/users', userRoutes);
app.use('/orders', orderRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});