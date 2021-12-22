import "reflect-metadata";
import express from "express";
import router from "./routes";

const app = express();
app.use(router);

app.listen(8000, () => {
  console.log(`Example app listening`);
});
