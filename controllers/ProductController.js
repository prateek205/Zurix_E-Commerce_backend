import Product from "../models/ProductMngmt.js";

// ==================================
// CREATE PRODUCT BUSINESS LOGIC
// ==================================

export const CreateProduct = async (req, res) => {
  try {
    // ********** stored the feilds from body which is create in the models **********

    const {
      name,
      description,
      price,
      salePrice,
      size,
      colors,
      stock,
      isFeatured,
      isActive,
    } = req.body;

    // ********** Validation for required feilds **********

    if (
      !name ||
      !description ||
      price == null ||
      salePrice == null ||
      !size ||
      !colors ||
      stock == null
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All feilds are mandatory..." });
    }

    // ********** Validation for product exists or not **********

    const productExists = await Product.findOne({ name });
    if (productExists) {
      return res
        .status(400)
        .json({ success: false, message: "Product Already Exists" });
    }

    // ********** stored all feilds in one variables **********

    const productData = {
      name,
      description,
      price,
      salePrice,
      size,
      colors,
      stock,
      isFeatured,
      isActive,
    };

    const newProduct = new Product(productData);

    // ********** save the product to Databased **********

    await newProduct.save();

    // ********** send response to cleint side **********

    res.status(201).json({
      success: true,
      message: "Product Create Successfully!!!",
      data: newProduct,
    });
  } catch (error) {
    // ********** check the error if above response is failed **********

    console.log("PRODUCT_DATA:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
