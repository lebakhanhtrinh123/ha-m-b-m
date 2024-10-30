require("dotenv").config();
const express = require("express");
const { ethers } = require("ethers");
const cors = require("cors");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Kết nối với nhà cung cấp Ethereum
const provider = new ethers.providers.InfuraProvider("goerli", process.env.INFURA_API_KEY);

// Khóa riêng của ví
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Địa chỉ hợp đồng và ABI
const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Thay bằng địa chỉ hợp đồng đã triển khai
const contractABI = [ /* ABI của hợp đồng */ ]; // Thay bằng ABI hợp đồng của bạn

const contract = new ethers.Contract(contractAddress, contractABI, wallet);

// Endpoint chuyển token
app.post("/transfer", async (req, res) => {
    const { to, amount } = req.body;

    try {
        const tx = await contract.transfer(to, ethers.utils.parseUnits(amount, 18));
        await tx.wait();
        res.send({ success: true, txHash: tx.hash });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: error.message });
    }
});

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
