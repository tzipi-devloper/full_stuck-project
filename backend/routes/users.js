const express = require("express")
const router = express.Router()
const User = require("../models/users");
const {addUser,updateUser,deleteUser,getUserById} = require("../controllers/Users");

router.post('/', addUser);
router.delete('/:userId', deleteUser);
router.put('/:userId', updateUser);
router.get('/:Id', getUserById);

module.exports = router