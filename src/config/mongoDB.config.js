import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
      mongoose.connect("mongodb+srv://g18delatorre:jEnoQgieIPLiRAJA@backenduno.ce2xng0.mongodb.net/backend1")
      console.log("MongoDB connected");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}