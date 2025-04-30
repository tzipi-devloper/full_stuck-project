const express = require("express");
const router = express.Router();
const { addCompetition, getCompetitionsByCategory, deleteCompetition, getAllCompetitions, updateCompetition } = require("../controllers/competitions");
router.post('/', addCompetition);
router.get('/:category', getCompetitionsByCategory); 
router.delete('/:competitionId', deleteCompetition);
router.get('/', getAllCompetitions);
router.put('/:competitionId', updateCompetition); 

module.exports = router;
