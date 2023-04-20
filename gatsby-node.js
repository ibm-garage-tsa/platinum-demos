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
      fromPath: '/300-business-automation/demo-preparation',
      toPath: '/300-business-automation-straight-through-processing/demo-preparation',
      isPermanent: true,
      redirectInBrowser: true
    });

    createRedirect({
      fromPath: '/300-business-automation/demo-script',
      toPath: '/300-business-automation-straight-through-processing/demo-script',
      isPermanent: true,
      redirectInBrowser: true
    });
  
    createRedirect({
      fromPath: '/300-integration/demo-preparation',
      toPath: '/300-integration-api-enabled-application-integration//demo-preparation',
      isPermanent: true,
      redirectInBrowser: true
    });

    createRedirect({
      fromPath: '/300-integration/demo-script',
      toPath: '/300-integration-api-enabled-application-integration/demo-script',
      isPermanent: true,
      redirectInBrowser: true
    });
  };
  