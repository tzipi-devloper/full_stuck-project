const Competition = require('../models/competitions')
exports.addCompetition = async (req, res) => {
  const { userId, category, score, email, file } = req.body;

  if (!userId || !category || !score || !email || !file) {
      return res.status(400).json({ message: 'Missing required fields' });
  }

  const newCompetition = new Competition({
      userId,
      category,
      score,
      email,
      file
  });

  try {
      const savedCompetition = await newCompetition.save();
      res.status(201).json(savedCompetition);
  } catch (error) {
      console.error('Failed to add competition:', error);
      res.status(500).json({ message: 'Failed to add competition' });
  }
};

  exports.deleteCompetition = async (req, res) => {
      const competitionId = req.params.competitionId;
      console.log(competitionId);
      try {
          const deletedCompetition = await Competition.findOneAndDelete({ _id: competitionId });
          if (!deletedCompetition) {
              return res.status(404).json({ message: 'Competition not found' });
          }
          res.json({ message: 'Competition deleted successfully' });
      } catch (error) {
          console.error('Failed to delete competition:', error);
          res.status(500).json({ message: 'Failed to delete competition' });
      }
  };
  
  
exports.getAllCompetitions = async (req, res) => {
    try {       
      const competitions = await Competition.find();
      res.json(competitions);
    } catch (error) {
      console.error('Failed to get competitions:', error);
      res.status(500).json({ message: 'Failed to get competitions' });
    }
  };
  exports.updateCompetition = async (req, res) => {
    const competitionId = req.params.competitionId;
    const { userId, category, score, email, file } = req.body;

    try {
        const updatedCompetition = await Competition.findOneAndUpdate(
            { _id: competitionId },
            { userId, category, score, email, file },
            { new: true }  // Return the updated document
        );

        if (!updatedCompetition) {
            return res.status(404).json({ message: 'Competition not found' });
        }

        res.json(updatedCompetition);
    } catch (error) {
        console.error('Failed to update competition:', error);
        res.status(500).json({ message: 'Failed to update competition' });
    }
};

exports.getCompetitionsByCategory = async (req, res) => {
    const {category} = req.params;
    console.log(category);
    if (!category) {
      return res.status(400).json({ message: 'Category is required' });
    }
    try {
      const competitions = await Competition.find({  category:category });
      console.log(competitions);
      
      res.json(competitions);

    } catch (error) {
      console.error('Failed to get competitions by category:', error);
      res.status(500).json({ message: 'Failed to get competitions by category' });
    }
  };
  