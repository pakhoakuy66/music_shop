import express from "express";
import cors from "cors";
import { DBConnect } from "../src/db/setup";
import { userRoute } from "./src/routes/userRoute";
import { adminRoute } from "./src/routes/adminRoute";

const app = express();
const port = 3000;

// Middleware
app.use(cors({ origin: "*" }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/users", userRoute);
app.use("/admins", adminRoute);

// Kết nối tới MongoDB và khởi động server
app.listen(port, async () => {
    try {
        await DBConnect();
        console.log(`Listening at http://localhost:${port}`);
    } catch (err) {
        console.error("An error occurred when connecting to the database", err);
        process.exit(1);
    }
});
