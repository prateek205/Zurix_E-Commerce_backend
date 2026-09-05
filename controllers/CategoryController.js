import categories from "../models/CategoryModel.js";

export const createCategory = async (req, res) => {
  try {
    const { name, images } = req.body;

    if (!name || !images) {
      res
        .status(404)
        .json({ success: false, message: "All feilds are mandatory" });
    }

    const existCategory = await categories.findOne({ name });
    if (!existCategory) {
      res
        .status(404)
        .json({ success: false, message: "Category Already Exists" });
    }

    const category = {
      name,
      images,
    };

    const newCategory = new categories(category);

    await newCategory.save();

    res.status(200).json({
      success: true,
      message: "All category fetch successfully",
      newCategory,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
