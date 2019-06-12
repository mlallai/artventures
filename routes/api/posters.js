const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Load Validation
const validatePostersInput = require("../../validation/posters");

// Load Poster Model
const Poster = require("../../models/Poster");
// Load User Model
const User = require("../../models/User");

// @route GET api/posters/test
// @ desc Tests posters route
// @access public
router.get("/test", (req, res) => res.json({ msg: "Posters works" }));

// @route GET api/posters
// @desc Get All Posters
// @access Public
router.get("/", (req, res) => {
  Poster.find()
    .sort({ date: -1 })
    .then(posters => res.json(posters))
    .catch(err => res.status(404).json({ noposterfound: "No Poster found" }));
});

// @route GET api/posters
// @desc Get All Posters
// @access Public
router.get("/", (req, res) => {
  Poster.find()
    .sort({ date: -1 })
    .then(posters => res.json(posters))
    .catch(err => res.status(404).json({ noposterfound: "No Poster found" }));
});

// @route GET api/posters/:id
// @desc Get Poster by Id
// @access Public

router.get("/:id", (req, res) => {
  Poster.findById(req.params.id)
    .then(poster => res.json(poster))
    .catch(err =>
      res.status(404).json({ noposterfound: "No Poster found with that ID" })
    );
});

// @route POST api/posters
// @desc Create Poster item
// @access Private

router.post(
  "/",
  passport.authenticate("jwt", {
    session: false
  }),
  async (req, res) => {
    try {
      // Non-admin users are not authorized to create poster items
      if (!req.user.isAdmin) {
        return res
          .status(401)
          .json({ msg: "User is not authorized to add posters" });
      } else {
        const createPoster = () => {
          const { errors, isValid } = validatePostersInput(req.body);

          // Check validation
          if (!isValid) {
            // Return any errors with 400 status
            return res.status(400).json(errors);
          } else {
            let posterFields = {};
            const {
              defaultUri,
              smallUri,
              mediumUri,
              largeUri,
              category,
              units
            } = req.body;
            defaultUri ? (posterFields.defaultUri = defaultUri) : "";
            smallUri ? (posterFields.smallUri = smallUri) : "";
            mediumUri ? (posterFields.mediumUri = mediumUri) : "";
            largeUri ? (posterFields.largeUri = largeUri) : "";
            category ? (posterFields.category = category) : "";
            units ? (posterFields.units = units) : 0;

            // Create Poster
            new Poster(posterFields).save().then(poster => res.json(poster));
          }
        };

        // Get the poster json object as the response
        await createPoster();
      }
    } catch (e) {
      return res.json(e);
    }
  }
);

module.exports = router;
