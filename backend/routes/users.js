const express = require("express")
const router = express.Router()
const {addUser,updateUser,deleteUser,getUserById} = require("../controllers/users");
router.post('/', addUser);
router.delete('/:userId', deleteUser);
router.put('/:userId', updateUser);
router.get('/:Id', getUserById);
module.exports = router