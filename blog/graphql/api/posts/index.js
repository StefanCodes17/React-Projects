const db = require('../../database/mysql')
const { errorHandler } = require('../utils')
const intersection = require('lodash/intersection')
const { categoryColors } = require('../../../src/components/common/styles')


module.exports = {
    getPost: async (id) => {
        return await db
            .select('*')
            .from('blog_posts')
            .where({ id })
            .andWhere(function () {
                this.where('active', '=', 1)
            })
            .catch(errorHandler)
    },
    getPosts: async (type, category_ids) => {
        let qry = db.select(
            'blog_posts.id',
            'blog_posts.description',
            'blog_posts.author_id',
            'title',
            'image',
            'created_at',
            'updated_at',
            db.raw('GROUP_CONCAT(label) as categories'),
            db.raw('GROUP_CONCAT(blog_categories.id) as cat_ids')
        )
            .from('blog_posts')
            .leftJoin('blog_post_categories', 'blog_posts.id', 'blog_post_categories.post_id')
            .leftJoin('blog_categories', 'blog_categories.id', 'blog_post_categories.category_id')
            .where({ active: 1 })
            .groupBy('blog_posts.id')

        qry = {
            trending: () => {
                return qry
                    .select(db.raw('COUNT(blog_post_likes.author_id) as likes'))
                    .leftJoin('blog_post_likes', 'blog_post_likes.post_id', 'blog_posts.id')
                    .groupBy('blog_posts.id')
                    .orderBy('likes', 'desc')
                    .limit(5)
            },

            featured: () => {
                return qry
                    .whereIn('blog_posts.id', [1, 2, 3, 4])
            },

            recent: () => {
                return qry
                    .orderBy('updated_at', 'desc')
                    .limit(5)
            },

            default: () => {
                return qry
            }
        }[type || 'default']()

        return qry.then(data => {
            if (category_ids) {
                return data.filter(post => {
                    return intersection(
                        post.cat_ids
                            .split(',')
                            .map(int => parseInt(int)),
                        category_ids
                    ).length > 0
                })
            }
        }).catch(errorHandler)
    },

    getPostsLikeCounts: async (id) =>
        await db.select(db.raw('COUNT(author_id) as likes'), 'post_id')
            .from('blog_post_likes')
            .where({ post_id: id })
            .groupBy('post_id')
            .catch(errorHandler),

    getPostComments: async () =>
        await db.select('*')
            .from('blog_post_comments')
            .where('post_id', id)
            .catch(errorHandler),

    getPostAuthors: async (ids) =>
        await db.select('*')
            .from('users')
            .whereIn('id', ids)
            .catch(errorHandler)

}