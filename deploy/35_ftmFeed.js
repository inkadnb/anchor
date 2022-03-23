module.exports = async ({
    deployments,
    getNamedAccounts
  }) => {
    console.log("35. Deploy Ftm Feed")
    const {deploy} = deployments;
    const {deployer, ftmFeed, ethFeed} = await getNamedAccounts();

    await deploy('FtmFeed', {
      from: deployer,
      args:[
        ftmFeed,
        ethFeed
      ]
    });
  };

  module.exports.tags = ['FtmFeed'];