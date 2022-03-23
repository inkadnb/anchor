module.exports = async ({
    deployments,
    getNamedAccounts
  }) => {
    console.log("35. Deploy Ftm Feed")
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    await deploy('FtmFeed', {
      from: deployer
    });

  };

  module.exports.tags = ['FtmFeed'];