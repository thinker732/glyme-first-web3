//https://eth-goerli.g.alchemy.com/v2/fFXpgpOcu5qvG9u5khwFEXfrLJiCE5CZ

//require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/fFXpgpOcu5qvG9u5khwFEXfrLJiCE5CZ",
      accounts: [
        "4d3a9e8d11a55ae89341758cd7aaaf5ac11ecc855e283155c2421f87b29302bc",
      ],
    },
  },
};
