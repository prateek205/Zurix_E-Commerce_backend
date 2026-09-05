import mongoose from "mongoose";

const categoryModel = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
    },
    images: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const categories = mongoose.model("categories", categoryModel);

export default categories;
