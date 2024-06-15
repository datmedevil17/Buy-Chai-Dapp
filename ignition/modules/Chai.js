const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("Chai", (m) => {
    const Chai = m.contract("Chai", []);

  return { Chai };
});
