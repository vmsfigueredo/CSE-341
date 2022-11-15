const { ObjectId } = require('mongodb');
const Contact = require('../../models/contacts');

const contactController = {
  create: async (req, res) => {
    const { firstName, lastName, favoriteColor, birthday } = req.body;
    if (!firstName) {
      res.status(422).json({ error: 'First Name is required' });
      return;
    }
    if (!lastName) {
      res.status(422).json({ error: 'Last Name is required' });
      return;
    }
    if (!favoriteColor) {
      res.status(422).json({ error: 'Favorite Color is required' });
      return;
    }
    if (!birthday) {
      res.status(422).json({ error: 'Birthday is required' });
      return;
    }
    let contact = {
      firstName,
      lastName,
      favoriteColor,
      birthday,
    };
    try {
      contact = await Contact.create(contact);
      res.status(201).json({ acknowledged: true, insertId: contact._id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  get: async (req, res) => {
    let contacts = await Contact.find();
    contacts = contacts.map(contact => {
      return contact;
    });
    res.status(200).json(contacts);
  },
  show: async (req, res) => {
    const { id } = req.params;
    if (ObjectId.isValid(id)) {
      try {
        const contact = await Contact.findOne({ _id: id });
        if (!contact) {
          res.status(404).json({ message: `Contact ${id} not found.` });
          return;
        }
        res.status(200).json(contact);
      } catch (error) {
        res.status(500).json({ error });
      }
    } else {
      res
        .status(500)
        .json({ message: `Inserted ID (${id}) is not a valid ObjectId` });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    if (ObjectId.isValid(id)) {
      try {
        const contact = await Contact.findOne({ _id: id });
        if (!contact) {
          res.status(404).json({ message: `Contact ${id} not found.` });
          return;
        }
        try {
          const { firstName, lastName, favoriteColor, birthday } = req.body;
          if (firstName) {
            contact.firstName = firstName;
          }
          if (lastName) {
            contact.lastName = lastName;
          }
          if (favoriteColor) {
            contact.favoriteColor = favoriteColor;
          }
          if (birthday) {
            contact.birthday = birthday;
          }
          await contact.save();

          res.status(204).json({});
        } catch (error) {
          res.status(500).json({ error: error.message, line: 83 });
        }
      } catch (error) {
        res.status(500).json({ error: error.message, line: 86 });
      }
    } else {
      res
        .status(500)
        .json({ message: `Inserted ID (${id}) is not a valid ObjectId` });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    if (ObjectId.isValid(id)) {
      try {
        const contact = await Contact.findOne({ _id: id });
        if (!contact) {
          res.status(404).json({ message: `Contact ${id} not found.` });
          return;
        }
        try {
          contact.delete();
          res
            .status(200)
            .json({ message: `Contact ${id} deleted successfuly.` });
        } catch (error) {
          res.status(500).json({ error });
        }
      } catch (error) {
        res.status(500).json({ error });
      }
    } else {
      res
        .status(500)
        .json({ message: `Inserted ID (${id}) is not a valid ObjectId` });
    }
  },
};
module.exports = contactController;
