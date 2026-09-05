import mongoose from "mongoose";

const categoryModel = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required:true,
      unique: true,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Category = mongoose.model("Category", categoryModel);

export default Category;
