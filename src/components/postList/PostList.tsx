import styles from "./postList.module.css"
import {likes, tags, posts} from "./postList.types"
import searchBar from '../../assets/images/searchBar.png';
import likeImage from '../../assets/images/likeImage.svg';
import { PostCard } from "./post/PostCard";


export function PostList(){
    return <div className = {styles['post-list-container']}>
        <div className = {styles['filters-container']}>
            <div className = {styles['search-bar']}>
                <img src = {searchBar} className = {styles["search-bar-image"]}/>
                <input type="text" placeholder="Search" className = {`${styles["text-20px"]} ${styles["shadow"]} ${styles['search-input']}`}/>
            </div>

            <div className = {styles['tags-container']}>
                <div className={styles["tags-1"]}>

                    <div className = {styles["tags-title"]}>
                        <p className = {styles["text-20px"]}>Tags</p>
                    </div>

                    <div className = {styles["tags"]}>
                        {tags.map(tag => { return (
                            <div key = {tag.name as string} className = {styles["input-tags"]}>
                                <input type="checkbox" />
                                <p className = {styles['text-18px']}>{tag.name}</p>
                            </div>
                        )})}
                    </div>
                </div>

                <div className={styles["tags-1"]}>

                    <div className = {styles["tags-title"]}>
                        <p className = {styles["text-20px"]}>Likes</p>
                    </div>

                    <div className = {styles["tags"]}>
                        {likes.map((like) => (
                        <label key = {like} className = {styles["input-tags"]}>
                            <input type="radio" name="likes" value={like} />
                            <span className = {styles["text-18px"]}>{like}</span>
                            {/* <img src = {likeImage} className = {styles["likeImage"]}/> */}
                        </label>
                        ))}
                    </div>
                </div>

            </div>

            
        </div>

        {/* <div className = {styles["post-container"]}>
            <div className = {styles["first-posts-column"]}>
                {posts.map(post => {
                    const processedDesc = post.description
                    return <PostCard
                        name = {post.name}
                        avatar = {post.avatar}
                        author = {post.author}
                        description = {post.description}
                        image = {post.image}
                        likes = {post.likes}
                        tags = {post.tags}
                        id = {post.id}
                    ></PostCard>
                })}
            </div>
        </div> */}

        <div className={styles["post-container"]}>
            <div className={styles["first-posts-column"]}>
                {[...posts].reverse().map((post, i) =>
                    i < posts.length / 2 && (
                        <PostCard key={post.id} {...post} />
                    )
                )}
            </div>

            <div className={styles["second-posts-column"]}>
                {[...posts].reverse().map((post, i) =>
                    i >= posts.length / 2 && (
                        <PostCard key={post.id} {...post} />
                    )
                )}
            </div>
        </div>

    </div>
}