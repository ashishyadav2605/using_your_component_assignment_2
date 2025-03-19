import LikeButton from "./likebutton";

const PostCard = ({post}) => {


    return(
        <div className="parent">
            <img style={{width: "200px", backgroundSize: "contain"}} src={post.profileImage} alt="image" />
            <h2>Name: {post.username} </h2>
            <p> {post.content} </p>
            <LikeButton />
        </div>
    )
}

export default PostCard;