import styles from './header.module.css'
import forumImage from '../../assets/images/forum_image.png'
import mainImage from '../../assets/images/main.png'
import posts from '../../assets/images/posts.png'
import createPost from '../../assets/images/create_post.png'
import profile from '../../assets/images/profile.png'
import changeLanguage from '../../assets/images/change_language.png'


export function Header(){
    return <header>
                <div className = {styles["forum-div"]}>
                    <span className = {`${styles["text-27px"]} ${styles["shadow"]}`}>Forum</span>
                    <img src = {forumImage} className = {styles["forum-image"]}/>
                </div>
                <div className = {styles["urls-div"]}>
                    <div className={`${styles.url} ${styles["main-url"]}`}>
                        <img className = {styles["main-image"]} src={mainImage}/>
                        <p className = {styles["text-18px"]}>Main</p>
                    </div>
                    <div className = {`${styles.url} ${styles["posts-url"]}`}>
                        <img className = {styles["post-image"]} src={posts}/>
                        <p className = {styles["text-18px"]}>Posts</p>
                    </div>
                    <div className = {styles["bth-change-div"]}>
                        <button className = {`${styles["btn"]} ${styles["create-post"]}`}>
                            <img className = {styles["post-image"]} src={createPost}/>
                            <p className = {styles["text-18px"]}>Create Post</p>
                        </button>
                        <button className = {`${styles["btn"]} ${styles["profile"]}`}>
                            <img className = {styles["profile-small"]} src={profile}/>
                            <p className = {styles["text-18px"]}>Profile</p>
                        </button>
                        <img className = {styles["change-language"]} src = {changeLanguage}/>
                    </div>
                </div>
        </header>
}