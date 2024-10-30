require("dotenv").config(); // Nạp biến môi trường
require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    goerli: {
        url: process.env.INFURA_API_URL,  // URL của Goerli qua Infura
        accounts: [process.env.PRIVATE_KEY]  // Khóa riêng từ file .env
    }
  }
};