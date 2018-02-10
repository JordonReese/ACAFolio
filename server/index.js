// dotenv allows us to declare environment variables in a .env file, \
// find out more here https://github.com/motdotla/dotenv
require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import passport from "passport";
import authenticationRoutes from "./routes/AuthenticationRoutes";
import listRoutes from "./routes/ListRoutes";
import articleRoutes from "./routes/blog/ArticleRoutes";
import ActivityRoutes from "./routes/ActivityRoutes.js";
import ProfileRoutes from "./routes/ProfileRoutes.js";
import CommentRoutes from "./routes/CommentRoutes.js";
import UserRoutes from "./routes/UserRoutes.js";


mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://public:public@ds149763.mlab.com:49763/acafolio");

const app = express();
app.use(express.static("public"));
//
// app.get('*', function (req, res) {
//   res.sendFile("index.html", { root: path.join(__dirname, 'public') })
// })
// app.get("*", (req, res, next) => {
//   res.sendFile("public/index.html");
// });
app.use(bodyParser.json());
app.use(authenticationRoutes);


const authStrategy = passport.authenticate("authStrategy", { session: false });
app.use(authStrategy);
app.use(listRoutes);
app.use(articleRoutes);
app.use(ActivityRoutes);
app.use(CommentRoutes);
app.use(ProfileRoutes);
app.use(UserRoutes);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send(err.message);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});
