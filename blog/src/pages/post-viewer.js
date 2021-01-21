import React, { useEffect, useRef } from 'react';
import { useQuery } from '@apollo/react-hooks'
import { Button } from 'antd';
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import { GET_POST_QUERY } from '../queries/posts'
import { useParams } from 'react-router';

export default function BlogPostViewer() {
    const contentContainer = useRef(null)
    const { id } = useParams()
    const { data, error, loading } = useQuery(GET_POST_QUERY, {
        variables: {
            id
        }
    })
    useEffect(() => {
        let article = document.createElement('article')
        const options = {
            placeholder: 'Edit the post..',
            //readOnly: 'true',
        }
        new Quill(article, options)

        //setTimeout(() => { contentContainer.current.appendChild(article) }, 0);
    }, [])

    return (
        <main className="post-viewer">
            <section ref={contentContainer}>
                <Button type="primary">Edit Post</Button>
            </section>
        </main>
    )
}