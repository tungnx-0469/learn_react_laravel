import React from 'react'
import Row from '@/Components/Row';
import { Link } from '@inertiajs/react';

function PostList(props) {
    console.log(props.posts)
    return (
    <>
    <h1 className='mx-auto w-fit mt-5'>Post list</h1>
    <table className='table table-bordered max-w-3xl mx-auto mt-5'>
        <thead className='justify-content-center'>
            <td>STT</td>
            <td>title</td>
            <td>content</td>
            <td>Sửa</td>
            <td>Xóa</td>
        </thead>
        {props.posts.map(post => <Row key={post.id} id={post.id} title={post.title} content={post.content} />)}
    </table>
    


    <Link href={route('my-logout')} method="post" as="button" className='btn btn-danger px-4 py-2 mx-auto w-max'>
        Log Out
    </Link>


    </>
  )
}

export default PostList