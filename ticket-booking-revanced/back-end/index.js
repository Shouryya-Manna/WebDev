const express = require("express");
const PORT = 8000;
const { connectDB } = require("./connection");
const app = express();
const eventRouter = require("./routes/event");
const ticketRouter = require("./routes/ticket");
const cors = require ("cors");

app.use(express.json());


connectDB("mongodb://localhost:27017/ticket-booking").then(() => {
  console.log("MongoDB connected");
});

app.use(cors());


app.use(eventRouter);
app.use(ticketRouter);

app.listen(PORT, () => {
  console.log(`Server Started At PORT ${PORT}`);
});
