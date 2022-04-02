const express = require("express");
const { Client } = require("../database/schemas");

const router = express.Router();
router.post("/newClient", async (req, res) => {
  const client = req.body;

  const newClient = await new Client({
    fullName: client.fullName,
    phoneNumber: client.phoneNumber,
  });

  Client.find({ fullName: client.fullName }, (err, client) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }
    if (client[0]) {
      res.status(400).send({ message: "Client exists" });
      return;
    }

    newClient.save((err, savedClient) => {
      if (err || !savedClient) {
        res.status(400).send({ message: "Saving client failed", err });
      } else {
        res.status(200).json(savedClient);
      }
    });
  });
});

router.get("/getClients", (req, res) => {
  Client.find({}, (err, clientsList) => {
    if (err) {
      res.status(400).send({ message: "Error in find function", err });
      return;
    }

    res.send(clientsList);
  });
});

router.delete("/deleteClient", (req, res) => {
  console.log(req.body.clientId);
  const client = Client.findByIdAndRemove(req.body.clientId, (err, doc) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Removed Client : ", doc);
      res.status(200).json({ id: req.body.clientId });
    }
  });
  if (!client) {
    res.status(400).send({ message: "client was not found" });
  }
});

module.exports = router;
