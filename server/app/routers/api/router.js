const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */
const { sayWelcome } = require("../../controllers/sayActions");
const itemsRouter = require("./items/router");
const programRouter = require("./programs/router");

router.get("/", sayWelcome);

router.use("/items", itemsRouter);

router.use("/programs", programRouter);

/* ************************************************************************* */

module.exports = router;
