import s from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = () => {
    return (
        <div >
            my posts
            <div>
                new post
            </div>
            <div className={s.posts}>
                <Post message='Hi, How are yor?'/>
                <Post message="It's my firsy post"/>
                {/* <Post />
                <Post />
                <Post /> */}
            </div>
        </div>
    )
}


export default MyPosts