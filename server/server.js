const express = require("express");
const cors = require("cors");
const app = express();

const sampleRoutes = require("./routes/sampleRoutes")

const server = require("http").createServer(app);

app.use(cors({
    origin: "http://localhost:3000"
}));


require("./connection")
app.use('/api', sampleRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(5000, () => {
    console.log("Server running on Port : 5000");
})
