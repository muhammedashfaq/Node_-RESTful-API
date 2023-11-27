const Conatct = require("../models/conatctModels");


/////====get All Contacts===//////

const getContact = async (req, res) => {

  const findcontact = await Conatct.find()

  res.status(200).json(findcontact);
};

/////====Create Contacts===//////

const createConatct = async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    res.status(200).json({ message: "craete Contact failed" });
  } else {
    const addcontact = await Conatct.create(req.body);
    res.status(200).json(addcontact);
  }
};

/////====get single Contacts===//////

const getaContact = async (req, res) => {

  const getacontact = await Conatct.findById(req.params.id)
  if (!getacontact) {
    res.status(404)
    throw new Error("there is no contact")
  } else {

    res.status(200).json(getacontact);
  }
};

/////====Edit&Update Contacts===//////

const updateConatct = async (req, res) => {
  const getcontact = await Conatct.findById(req.params.id)
  if (!getcontact) {
    res.status(404)
    throw new Error("there is no contact")

  } else {
    const updatethecontact = await Conatct.findByIdAndUpdate(req.params.id,
      req.body,
      { new: true })
    res.status(200).json(updatethecontact);

  }
};

/////====Delete a Contacts===//////

const deleteConatct = async (req, res) => {
  const getcontact = await Conatct.findById(req.params.id)
  if (!getcontact) {
    res.status(404)
    throw new Error("there is no contact")
  } else {

    await Conatct.deleteOne(getcontact);
    res.status(200).json(getcontact);
  }


};

module.exports = {
  getContact,
  deleteConatct,
  updateConatct,
  getaContact,
  createConatct,
};
