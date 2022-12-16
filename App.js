const express = require("express");
const app = express();
const PORT = process.env.port || 3000;

app.get("/", (req, res) => {
  res.send("TRhis is a new serer");
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
