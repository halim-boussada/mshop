const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const shopOwnerRouter = require("./router/shopOwnerRoute.js");
const adminRouter = require("./router/adminRouter.js");
const productRouter = require("./router/productRouter.js");
const orderRouter = require("./router/orderRouter.js");
const authAdminRout = require("./auth/admin/adminAuthRouter/router.js");
const authShopOwnerRout = require("./auth/shopOwner/shopOwnerAuthRouter/router.js");

const PORT = process.env.PORT || 3636;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth/shopowner", authShopOwnerRout);
app.use("/auth/admin", authAdminRout);
app.use("/shopOwner", shopOwnerRouter);
app.use("/product", productRouter);
app.use("/admin", adminRouter);
app.use("/order", orderRouter);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
