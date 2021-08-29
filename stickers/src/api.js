import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3000/stickers",
    headers: {
        "Content-Type": "application/json",
    },
});
