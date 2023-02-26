const getAllProducts = (req, res) => {
  res.status(200).json({ msg: "product testing route" });
};

const getAllStaticProducts = (req, res) => {
  //   throw new Error("Testing async error package");
  res.status(200).json({ msg: "product route" });
};

module.exports = { getAllProducts, getAllStaticProducts };
