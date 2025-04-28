const express = require("express");
const router = express.Router();
const { addUser, updateUser, deleteUser, getUserById } = require("../controllers/users");

// ייבוא האמצעי לאימות טוקן
const verifyJWT = require('../middleware/verifyJWT');

// שמירה על האימות לכל בקשה שדורשת גישה
router.post('/', addUser); 
router.delete('/:userId', verifyJWT, deleteUser); 
router.put('/:userId', verifyJWT, updateUser); 
router.get('/:id', verifyJWT, getUserById); 

module.exports = router;
