import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        mongoose.connect(process.env.Mongo_URI)
            .then(() => console.log("MongoDB Connected"))
            .catch((err) => console.error("MongoDB Connection Error:", err));

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;