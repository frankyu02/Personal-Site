require("dotenv").config({ path: ".env" })
const{
  SANITY_TOKEN,
} = process.env
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
      "projectId": "p67lswln",
      "dataset": "production",
      watchMode: true,
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
]
};