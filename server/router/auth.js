import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const router = express.Router();

router.use(express.json());

// import dum from "../models/dumSchema.js";
import gen from "../models/stpgenSchema.js";
import "../db/conn.js";

router.post("/general", async (req, res) => {
  const { Student_name, DOB, Email, Mobile_no } = req.body;

  if (!Student_name || !DOB || !Email || !Mobile_no) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    // const userExist = await dum.findOne({ email: email });
    // if (userExist) {
    //   return res.status(409).json({ error: "Email already Exist" });
    // }
    const newData = new gen({ Student_name, DOB, Email, Mobile_no });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to registered " });
    console.log(`${error} `);
  }
});

router.get("/", (req, res) => {
  res.send(`HEMLO bhai`);
});

router.post("/register", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).json({ error: "Plz fill the form properly " });
  }
  console.log(req.body);
  //res.json({message: req.body})

  try {
    const userExist = await dum.findOne({ email: email });
    if (userExist) {
      return res.status(409).json({ error: "Email already Exist" });
    }
    const newData = new dum({ email, password });

    await newData.save();

    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: "Failed to registered " });
    console.log(`${error} `);
  }
});

//login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill data" });
    }
    const userLogin = await dum.findOne({ email: email });
    console.log(userLogin);

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      if (!isMatch) {
        res.json({ message: "Invalid data" });
      } else {
        res.json({ message: "Signing successfull" });
        //const token = await userLogin.generateAuthToken();
      }
    } else {
      res.json({ error: "not login" });
    }
  } catch (err) {
    console.log(err);
  }
});

export default router;
