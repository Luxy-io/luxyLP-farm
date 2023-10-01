const { ethers } = require('hardhat');

async function main() {

    // Get the contract to deploy
    const v3FactoryRollux = "0xeAa20BEA58979386A7d37BAeb4C1522892c74640";
    const nonFungiblePositionManager = "0x4dB158Eec5c5d63F9A09535882b835f36d3fd012";
    const maxIncentiveStartLeadTime = 15_552_800; // 6 months
    const maxIncentiveDuration = 0; // 0 seconds it can start at any time
    const ContractFactory = await ethers.getContractFactory("UniswapV3Staker");
    const deployed = await ContractFactory.deploy(v3FactoryRollux, nonFungiblePositionManager, maxIncentiveStartLeadTime, maxIncentiveDuration);

    console.log("Contract deployed to:", deployed.address);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });