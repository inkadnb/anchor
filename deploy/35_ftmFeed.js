module.exports = async ({
    deployments,
    getNamedAccounts
  }) => {
    console.log("35. Deploy Ftm Feed")
    const {deploy} = deployments;
    const {deployer, ftmEthFeed, ethFeed} = await getNamedAccounts();

    await deploy('FtmFeed', {
      from: deployer,
      args:[
        ftmEthFeed,
        ethFeed
      ]
    });
  };

  module.exports.tags = ['FtmFeed'];