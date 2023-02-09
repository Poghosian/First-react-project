import React from "react";
import s from './MyPosts.module.css'
import Post from './Posts/Post'

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post id={p.id} message={p.message} key={p.id} likesCount={p.likesCount} />)
    let newPostText = props.profilePage.newPostText

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText = newPostElement.current.value;
        props.changeNewPostChange(newText)
    }

    return (
        <div className={s.postsBlock}>
            <h3 >my posts</h3>
            <div className={s.newPost}>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          value={newPostText}
                />
                <button onClick={onAddPost}>Add Post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts