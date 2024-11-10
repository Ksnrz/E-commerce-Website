import express from "express";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import expressSession from "express-session";

const app = express();
const GOOGLE_CLIENT_ID = "";
const GOOGLE_CLIENT_SECRET = "";
const FACEBOOK_CLIENT_ID = "";
const FACEBOOK_CLIENT_SECRET = "";
app.listen(3001, () => {
  console.log("Server started on port 3001");
});
