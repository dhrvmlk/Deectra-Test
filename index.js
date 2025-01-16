const express = require("express");

const rootRouter = require("./routes/rootRoutes");

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/", rootRouter);

app.listen(PORT, () => {
  console.log(`App listening on Port ${PORT}`);
});
