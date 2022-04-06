import Product from "../models/productModel";

// Getting All Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById();
    res.json(product);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }

  const saveProduct = async (req, res) => {
    try {
      const savedProduct = await Product.save();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  const updateProduct = async (req, res) => {
    try {
      const updatedProduct = await Product.updateOne(
        { _id: req.params.id },
        { $set: req.body }
      );
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };

  const deleteProduct = async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (!product) return res.status(404).json({ message: "No Data Found" });

    try {
      const deleteProduct = await Product.deleteOne();
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
};
