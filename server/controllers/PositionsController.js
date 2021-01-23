const mysql = require('../mysql/connection');

// @desc Get all positions
exports.getAllPositions = async (req, res, next) => {
  const query = "SELECT * FROM positions";

  await mysql.query(query, (err, result) => {
    if (err) {
        throw err;
    }

    return res.status(200).json({
      success: true,
      data: result
    });
  });
}
