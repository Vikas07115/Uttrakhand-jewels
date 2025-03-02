  const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const EmployeeModel = require('./models/Employee'); // Ensure correct path

mongoose.connect("mongodb://127.0.0.1:27017/employee")
    .then(async () => {
        console.log("✅ MongoDB Connected");

        // Find all users
        const users = await EmployeeModel.find();
        for (let user of users) {
            if (!user.password) {
                console.log(`⚠️ Skipping user (no password found): ${user.email}`);
                continue; // Skip users without a password
            }

            if (!user.password.startsWith("$2b$")) {  // Check if password is already hashed
                const hashedPassword = await bcrypt.hash(user.password, 10);
                await EmployeeModel.updateOne({ _id: user._id }, { password: hashedPassword });
                console.log(`🔹 Updated password for: ${user.email}`);
            }
        }

        console.log("🎉 All plaintext passwords are now hashed!");
        mongoose.connection.close();
    })
    .catch(err => console.error("❌ MongoDB Connection Error:", err));
