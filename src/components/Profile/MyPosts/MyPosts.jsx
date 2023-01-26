import React from "react";
import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = (props) => {

    let postsElements =
        props.posts.map(p => <Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div className={s.postsBlock}>
            <h3 >my posts</h3>
            <div className={s.newPost}>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts