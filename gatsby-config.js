const pathPrefixVar = process.env.PATH_PREFIX || "/platinum-demos";
const baseUrlVar = process.env.BASE_URL || "https://ibm-garage-tsa.github.com/platinum-demos";

module.exports = {
  siteMetadata: {
    title: "IBM Platinum Demos",
    description: "A hub for IBM Automation Platinum Demos",
    keywords: "IBM,t,carbon",
  },
  pathPrefix: pathPrefixVar,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Carbon Design Gatsby Theme",
        icon: "src/images/favicon.svg",
        short_name: "Gatsby Theme Carbon",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
  navigationStyle: 'header',
        isSearchEnabled: false,
      },
    },
    'gatsby-plugin-meta-redirect'
  ],
};
