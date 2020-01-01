const config = {
  siteTitle: "Rogério Moreira",
  siteTitleShort: "Rogério Moreira",
  siteTitleAlt: "Rogério Moreira",
  siteLogo: "/logos/logo-512.png",
  siteUrl: "https://www.rgllm.com",
  repo: "https://github.com/rgllm/rgllm/",
  pathPrefix: "",
  dateFromFormat: "YYYY-MM-DD",
  dateFormat: "MMMM Do, YYYY",
  siteDescription: "Rogério Moreira is a full stack developer.",
  siteRss: "/rss.xml",
  googleAnalyticsID: "",
  userEmail: "r@rgllm.com",
  userTwitter: "rgllm",
  menuLinks: [
    {
      name: "Me",
      link: "/me/"
    },
    {
      name: "Articles",
      link: "/blog/"
    },
    {
      name: "Contact",
      link: "/contact/"
    }
  ],
  themeColor: "#3F80FF", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff"
};

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
