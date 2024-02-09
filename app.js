const express = require('express');
const app = express();

const tugasRoutes = require ('./routes/tugasRoutes');
app.use('/', tugasRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});