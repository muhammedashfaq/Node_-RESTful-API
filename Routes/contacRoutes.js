const express = require('express')

const router = express.Router()
const { getContact,
    deleteConatct,
    updateConatct,
    getaContact,
    createConatct, } = require("../controlles/contactController")


router.route('/').get(getContact)
router.route('/').post(createConatct)
router.route('/:id').get(getaContact).put(updateConatct).delete(deleteConatct);

module.exports = router