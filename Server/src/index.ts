import express, { Request, Response } from "express";
const { MongoClient } = require("mongodb");

const app = express();
const port = 3000;

// Cập nhật địa chỉ kết nối đến MongoDB
const url = "mongodb://127.0.0.1:27017/";
const client = new MongoClient(url);
const dbName = "Akuy66";
const collectionName = "Akuy";

// Middleware
const bodyParser = require("body-parser");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Kết nối tới MongoDB và thiết lập route
async function main() {
    try {
        // Kết nối tới MongoDB
        await client.connect();
        console.log("Kết nối thành công đến MongoDB!");

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Route để lấy dữ liệu từ MongoDB và hiển thị trên localhost
        app.get("/", async (req: Request, res: Response) => {
            try {
                const data = await collection.find({}).toArray(); // Tìm tất cả các tài liệu trong collection
                res.json(data); // Gửi dữ liệu dưới dạng JSON
            } catch (err) {
                console.error("Lỗi khi đọc dữ liệu từ MongoDB:", err);
                res.status(500).send("Lỗi server");
            }
        });

        app.listen(port, () =>
            console.log(`App đang chạy tại http://localhost:${port}`)
        );
    } catch (err) {
        console.error("Lỗi khi kết nối tới MongoDB:", err);
    }
}

// Gọi hàm main để chạy ứng dụng
main().catch(console.error);
