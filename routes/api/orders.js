const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validateOrdersInput = require("../../validation/orders");

// Load Poster Model
const Poster = require("../../models/Poster");
// Load User Model
const User = require("../../models/User");
// Load Order Model
const Order = require("../../models/Order");

// @route GET api/orders/test
// @ desc Test orders route
// @access public
router.get("/test", (req, res) => res.json({ msg: "Orders works" }));

// TODO: @route POST api/orders
// @ desc Create a new Order
// @access public but needs to have user information

// FIRST TESTS WITH STRIPE NATIVE CUSTOMERS & ORDERS API

module.exports = router;
