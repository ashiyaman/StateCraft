import { useDispatch, useSelector } from "react-redux";
import { likeButtonPressed } from "./postSlice";

const Posts = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.posts)
    return (
        <>
            {
                data.posts.map(post => 
                    <div key={post.postId}>
                        <p>{post.caption}</p>
                        <button onClick={() => dispatch(likeButtonPressed(post.postId))}>
                            {post.likes} likes
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default Posts