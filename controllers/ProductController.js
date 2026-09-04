import Product from "../models/ProductMngmt";

export const CreateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      category,
      price,
      salePrice,
      size,
      colors,
      stock,
      isFeatured,
      isActive,
    } = req.body;

    if (
      !name ||
      !description ||
      !category ||
      !price ||
      !salePrice ||
      !size ||
      !colors ||
      !stock ||
      !isFeatured ||
      !isActive
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All feilds are mandatory..." });
    }

    const productExists = await Product.findOne({ name });
    if (!productExists) {
      return res
        .status(400)
        .json({ success: false, message: "Product Already Exists" });
    }

    const newProduct = new Product();

    await newProduct.save();

    res
      .status(201)
      .json({
        success: true,
        message: "Product Create Successfully!!!",
        data: newProduct,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
