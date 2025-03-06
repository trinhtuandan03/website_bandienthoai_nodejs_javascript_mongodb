const mongoose = require("mongoose");

const connectDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/crud");
        console.log("✅ Kết nối MongoDB thành công!");
    } catch (error) {
        console.error("❌ Kết nối MongoDB thất bại:", error);
        process.exit(1);
    }
};

module.exports = connectDB;