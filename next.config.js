
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const API_KEY = "74f93e7781dc08e6c879b7393a26a388"


module.exports = {
  nextConfig,
  reactStrictMode:true,
  async redirects(){
    return[
      {
        source:"/contact",
        destination:"/form",
        permanent:false,
      }
    ]
  },
  async rewrites(){
    return [{
      source:"/api/movies",
      destination:`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    },
    {
      source:"/api/movies/:id",
      destination:`https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}`
    }
  ]
  }
}
