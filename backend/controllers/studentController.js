const db = require('../models');
const Student = db.student;
const Major = db.major;

const getSavedMajors = async (req, res) => {
  try {
    const studentID = req.params.id || req.body.studentID || req.query.studentID;
    if (!studentID) {
      return res.status(400).json({ error: 'studentID is required' });
    }

    const student = await Student.findOne({
      where: { studentID },
      include: [
        {
          model: Major,
          through: { attributes: [] }
        }
      ]
    });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    return res.json({ savedMajors: student.majors });
  } catch (error) {
    return res.status(500).json({ error: error.message || 'Server error' });
  }
};

module.exports = {
  getSavedMajors
};