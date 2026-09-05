import Category from "../models/CategoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { name, image } = req.body;

    if (!name || !image) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are mandatory" });
    }

    const existCategory = await Category.findOne({ name });
    if (!existCategory) {
      return res
        .status(409)
        .json({ success: false, message: "Category Already Exists" });
    }

    const newCategory = new Category({ name, image });

    await newCategory.save();

    res.status(200).json({
      success: true,
      message: "All category fetch successfully",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
