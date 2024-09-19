import { connect } from "mongoose";

const DBURI = "mongodb://127.0.0.1:27017/Akuy66";

export async function DBConnect() {
    try {
        await connect(DBURI);
        console.log("Successfully connected to the database");
    } catch (err) {
        throw err;
    }
}
