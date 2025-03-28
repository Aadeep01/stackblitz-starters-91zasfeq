const express = require('express');
const app = express();
const booksRoutes = require('./routes/server'); 

app.use(express.json()); 

app.use('/books', booksRoutes); 

app.get('/', (req, res) => {
    res.send('Library Management API is running!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});