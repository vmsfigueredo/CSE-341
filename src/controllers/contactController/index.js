const Contact = require('../../models/contacts')
const ObjectId = require("mongodb").ObjectId
const contractController = {
    create: () => {

    },
    get: async (req, res) => {
        let contacts = await Contact.find();
        console.log(contacts);
        contacts = contacts.map(contact => {
            return {
                ...contact._doc,
                link: `/contact/${contact._id}`,
            }
        })
        res.status(200).json(contacts)
    },
    show: async (req, res) => {
        const id = req.params.id;
        if (ObjectId.isValid(id)) {
            try {
                const contact = await Contact.findOne({_id: id});
                if (!contact) {
                    res.status(404).json({message: `Contact ${id} not found.`})
                    return;
                }
                res.status(200).json(contact)
            } catch (error) {
                res.status(500).json({error});
            }
        } else {
            res.status(500).json({message: `Inserted ID (${id}) is not a valid ObjectId`});
        }

    }
}
module.exports = contractController;