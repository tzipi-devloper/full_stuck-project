const express = require("express");
const router = express.Router();
const {  addUser, updateUser, deleteUser, getUserById } = require("../controllers/users");

// נתיבים לפונקציות
router.post('/', addUser); // הוספת משתמש חדש
router.delete('/:userId', deleteUser); // מחיקת משתמש
router.put('/:userId', updateUser); // עדכון משתמש
router.get('/:id', getUserById); // קבלת משתמש לפי ID


module.exports = router;
