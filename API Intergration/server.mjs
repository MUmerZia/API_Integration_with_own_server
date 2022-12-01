import express from "express";
import path from "path";

const app = express();
const port = process.env.PORT || 5001;

app.get("/weather", (req, res) => {
  console.log(`${req.ip} is asking for weather`);
  res.send({
    city: "Karachi",
    temp_c: 26,
    max_temp_c: 36,
    min_temp_c: 19,
    humidity: 22,
  });
});

const _dirname = path.resolve();
app.get("/", express.static(path.join(_dirname, "/web/index.html")));
app.use("/", express.static(path.join(_dirname, "/web")));

///Users/bookingwhizz/Desktop/Railway-App/2.express server/API Intergration/web/index.html

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
