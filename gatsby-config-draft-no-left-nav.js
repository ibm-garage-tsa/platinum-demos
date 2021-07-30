const pathPrefixVar = process.env.PATH_PREFIX || "/platinum-demos";
const baseUrlVar = process.env.BASE_URL || "https://ibm-garage-tsa.github.com/platinum-demos";

module.exports = {
  siteMetadata: {
    title: "IBM Automation Platinum Demos",
    description: "A hub for IBM Automation Platinum Demos",
    keywords: "IBM,t,carbon",
  },
  pathPrefix: pathPrefixVar,
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        navigationStyle: 'header',
      },
    },
  ],
      resolve: 'gatsby-theme-carbon',
      options: {
        isSearchEnabled: true,
        repository: {
          baseUrl: baseUrlVar,
          subDirectory: '',
          branch: 'master',
        },
      },
    }
