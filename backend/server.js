const express = require('express');
const app = express();
const PORT = 5012; // Dein Port, z.B. 5012

// Füge hier eine Route für '/' hinzu
app.get('/', (req, res) => {
  res.send('Server is running on port 5012');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

