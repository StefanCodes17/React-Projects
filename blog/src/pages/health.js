import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import WidthTitle from '../components/common/with-title'
import PostGrid from '../components/common/post-grid'
import { GET_POSTS_BY_CATEGORIES_QUERY } from '../queries/posts'


const catIds = [6]

export default function Health() {
    const { data, error } = useQuery(GET_POSTS_BY_CATEGORIES_QUERY, {
        variables: {
            cat_ids: catIds
        }
    })
    console.log(data, error)
    if (error) {
        console.log(error)
        return 'Something went wrong.'
    }

    return WidthTitle(
        'Health',
        data?.posts ? <PostGrid post={data.posts} /> : 'Loading'
    )
}
