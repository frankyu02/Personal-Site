require("dotenv").config({ path: ".env" })
const{
  SANITY_TOKEN,
} = process.env
const isProd = process.env.NODE_ENV === "production"
module.exports = {
  siteMetadata: {
    title: `Frank Yu Personal Site`,
    siteUrl: `https://frank-yu.netlify.app/`,
    description: 'Personal Site of Frank Yu'
  },
  plugins: [
    "gatsby-plugin-styled-components", 
    {
    resolve: 'gatsby-source-sanity',
    options: {
      watchMode: !isProd,
      "projectId": "p67lswln",
      "dataset": "production",
      token: SANITY_TOKEN,
    }
  }, "gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", `gatsby-plugin-react-helmet`,
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  `gatsby-plugin-netlify`,
]
};