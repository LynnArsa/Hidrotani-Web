const express = require('express');
const cors = require('cors');
const router = require('./routes/userRoutes');
const app = express();
require('dotenv').config();


app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});