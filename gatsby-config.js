require("dotenv").config({ path: ".env" })
const{
  SANITY_TOKEN,
} = process.env
const isProd = process.env.NODE_ENV === "production"
module.exports = {
  siteMetadata: {
      title: `Personal Site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp', 
    'gatsby-transformer-sharp', 
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        disableVendorPrefixes: true
      }
    },
     {
    resolve: 'gatsby-source-sanity',
    options: {
      watchMode: !isProd,
      "projectId": "p67lswln",
      "dataset": "production",
      token: SANITY_TOKEN,
    }
  }, 
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