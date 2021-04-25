// module requirement
const express = require(`express`);
const app = express();
const http = require(`http`);
const server = http.createServer(app);
const path = require(`path`)

// load routes file
const userRoutes = require(`./routes/user`);
const authRoutes = require(`./routes/auth`);

// read public folder
app.use(express.static('public'));

// use route
app.use(userRoutes);
app.use(authRoutes);

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`connect to port ${port}`);
});