// not sure why - otherwise: Can't resolve 'fs'
exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      node: {
        fs: 'empty'
      }
    })
  }
  
  exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
  
    createRedirect({
      fromPath: '/300-business-automation',
      toPath: '/300-business-automation-straight-through-processing',
      isPermanent: true,
      redirectInBrowser: true
    });
  
    createRedirect({
        fromPath: '/300-integration',
        toPath: '/300-integration/demo-script',
        isPermanent: true,
        redirectInBrowser: true
      });
    };