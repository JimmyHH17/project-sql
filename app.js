const express = require("express");

const app = express();

const userRoutes = require("./routes/user");

const adminRoutes = require("./routes/admin");

const userMiddelware = require("./middlewares/user");

app.use(express.json());

app.use(userRoutes);
app.use(adminRoutes);

app.listen(3000);
