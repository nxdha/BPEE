const router = require("express").Router();
const userModel = require("../models/Users");
const bcrypt = require("bcrypt");


router.put("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(req.body);

    const newUser = new userModel({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      age: req.body.age,
      phone: req.body.phone
    });
    const User = await newUser.save();
    res.status(200).json(User);
  } catch (error) {
    console.log(error);
  }
});

router.put("/login", async (req, res) => {
  try {
    console.log(req.body);
    let user = await userModel.findOne({ email: req.body.email });
    let flag = -1;
    if (!user) {
      flag = 1;
      user = { name: "User not found" };
      res.status(200).json({error: true});
    }
    if (flag == -1) {
      let validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        user = { name: "Wrong password" };
        res.status(200).json({error: true});
        flag = 0;
      }
    }
    if (flag == -1) res.status(200).json(user);
  } catch (err) {
    res.status(200).json("user doesn't exist");
  }
});

router.put("/ticket", async (req, res) => {
  try {
    console.log(req.body);
    let user = await userModel.findOne({ name: req.body.name });
    if(!user) {
      res.status(400).json({error:true});
    }

    const ticket = {
      destination: req.body.end,
      startroute: req.body.start,
      numberOfTickets: req.body.number,
      fare: req.body.fare
    }

    const result = await userModel.updateOne(
      { name: req.body.name },
      { $set: { ticket: ticket } }
    );

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
});

router.put("/getdata", async (req, res) => {
  try {
    console.log(req.body);
    let user = await userModel.findOne({ name: req.body.name });
    if(!user) {
      res.status(400).json({error:true});
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put("/getticket", async (req, res) => {
  try {
    console.log(req.body);
    let user = await userModel.findOne({ name: req.body.name });
    let ticket = user.ticket.startroute
    if(!ticket) {
      res.status(200).json({error:true});
    }
    else
      res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
});

router.put("/delete", async (req, res) => {
  try {
    console.log(req.body);
    let user = await userModel.findOne({ name: req.body.name });
    if(!user.ticket) {
      res.status(200).json({error:true});
    }
    else
    {
      const result = await userModel.updateOne(
        {name:req.body.name },
        { $unset: { ticket: {} } }
      );
      res.status(200).json(result);
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
