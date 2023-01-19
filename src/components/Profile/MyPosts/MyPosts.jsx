import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = () => {

    let posts = [
        { id: 1, message: 'Hi, How are yor?', likesCount: 12 },
        { id: 2, message: 'Its my firty post', likesCount: 1 },
    ]

    let postsElements = posts.map(p => <Post id={p.id} post={p.message} key={p.id} likesCount={p.likesCount} />)

    return (
        <div className={s.postsBlock}>
            <h3 >my posts</h3>
            <div className={s.newPost}>
                <textarea></textarea>
                <button>Add Post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts