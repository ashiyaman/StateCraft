import { useSelector } from "react-redux";

const Posts = () => {
    const data = useSelector(state => state.posts)

    console.log(data)
    return (
        <>
            {
                data.posts.map(post => 
                    <div key={post.postId}>
                        <p>{post.caption}</p>
                        <p>{post.likes}</p>
                    </div>
                )
            }
        </>
    )
}

export default Posts