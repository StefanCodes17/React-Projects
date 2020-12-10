//const trendingPosts = require('./mocks/trending')
//const featuredPosts = require('./mocks/featured')
const fs = require('fs')
const path = require('path')
const PostService = require('../../api/posts')
const { errorHandler } = require('../../api/utils')


const getPostsWithAuthors = (cb) =>
    async (parent, args, ctx, info) => {
        const posts = await cb(args, parent)
            .catch(errorHandler)

        if (!posts.length) return []

        const authors = await PostService.getPostsAuthors(
            //maps through an array of authors .. creates a set, removing duplicates then turning 
            //it back into an array
            [... new Set(post.map(({ author_id }) => author_id))]
        )

        const authorMap = authors.reduce((map, author) => {
            map[author.id] = `${author.first_name} ${author.last_name}`
        })

        return posts.map(({ categories, author_id, ...rest }, index) => {
            return {
                categories: categories.split(','),
                author: authorMap[author_id],
                ...rest
            }
        })
    }

module.exports = {
    resolvers: {
        Query: {
            getPostsByType: getPostsWithAuthors(
                async ({ type }) => await PostService.getPosts(type)
            ),
            getPostsByCategory: getPostsWithAuthors(
                async ({ category_id }) => await PostService.getPosts(category_id)
            )
        }
    },
    schema: fs.readFileSync(
        path.resolve(
            __dirname,
            './posts-schema.graphql'
        )
    ).toString()
}