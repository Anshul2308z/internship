"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const Auth_1 = __importDefault(require("./routes/Auth"));
const List_1 = __importDefault(require("./routes/List"));
const Admin_1 = __importDefault(require("./routes/Admin"));
const Users_1 = __importDefault(require("./models/Users"));
const app = (0, express_1.default)();
// Connect to MongoDB
(0, db_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use("/api/auth", Auth_1.default);
app.use("/api/fetch", List_1.default);
app.use("/api/admin", Admin_1.default);
(async () => {
    try {
        await Users_1.default.create({
            name: "Anshul",
            email: "anshulusesmail@gmail.com",
            role: "admin",
        });
    }
    catch (error) {
        console.error("Error creating admin user:", error);
    }
})();
app.get("/", (req, res) => {
    res.send("Hello World");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
