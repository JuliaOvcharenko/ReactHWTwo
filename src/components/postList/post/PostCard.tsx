import styles from "./postCard.module.css"
import { PostList } from "../postList.types";
import likeImage from '../../../assets/images/likeImage.svg';


export function PostCard(props: PostList){
    const {id,
        avatar,
        author,
        name,
        description,
        image,
        likes,
        tags} = props

    return <div className = {styles["current-post"]}>
        <div className = {styles["author-container"]}>
            <img src = {avatar} className = {styles["author-image"]}/>
            <p className = {styles["text-16px"]}>{author}</p>
        </div>
        <p className = {styles["text-18px"]}>{name}</p>
        <p className = {`${styles["text-16px"]} ${styles["add"]}`}>{description}</p>
        <img src = {image} className = {styles["post-image"]}/>
        <div className={styles["tags"]}>
            <p className= {`${styles["tag"]} ${styles["text-10px"]}`}>
                {tags?.map(tag => 
                    `#${tag?.name}`).join(" ")
                }
            </p>
        </div>
        <button className = {`${styles["likes-button"]} ${styles["text-12px"]}`}>
            <img src = {likeImage} className = {styles["likeImage"]}/>
            {likes}
        </button>
    </div>
}