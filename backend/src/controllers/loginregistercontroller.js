const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const router = express.Router();

// API Đăng ký người dùng
router.post("/register", async(req, res) => {
    try {
        const { name, email, password } = req.body;

        // Kiểm tra xem email đã tồn tại chưa
        let existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "❌ Email đã được sử dụng!" });
        }

        // Hash mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10);

        // Tạo người dùng mới
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: "✅ Đăng ký thành công!" });
    } catch (error) {
        console.error("❌ Lỗi khi đăng ký:", error);
        res.status(500).json({ message: "❌ Lỗi server" });
    }
});

// API Lấy danh sách người dùng
router.get("/getuserlist", async(req, res) => {
    try {
        const users = await User.find().select("-password"); // Ẩn mật khẩu
        res.json(users);
    } catch (error) {
        console.error("❌ Lỗi khi lấy danh sách người dùng:", error);
        res.status(500).json({ message: "❌ Lỗi server" });
    }
});

module.exports = router;


//Nguyen Van Duc - 20-10-2003