async function main() {
    const initialSupply = 1000;
    const MyToken = await ethers.getContractFactory("MyToken");
    const myToken = await MyToken.deploy(initialSupply);
    await myToken.deployed();
    console.log("Token deployed to:", myToken.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
