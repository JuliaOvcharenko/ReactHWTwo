import styles from "./home.module.css"
import dataBase from '../../assets/images/database.png'
import profileCart from '../../assets/images/profileCart.png'
import likes from '../../assets/images/like.png'
import comments from '../../assets/images/comment.png'
import postsPage from '../../assets/images/postsPage.png'
import mainPage from '../../assets/images/mainPage.png'
import profileImage from '../../assets/images/profileImage.png'
import loginImagePage from '../../assets/images/loginImagePage.png'


export function Home(){
    return <div className = {styles["center"]}>
                <div className = {styles["top-content"]}>
                    <div className = {`${styles["info-cart"]} ${styles["back"]}`}>
                        <div className = {styles["info-title"]}>
                            <img className = {styles["database-img"]} src={dataBase}/>
                            <p className = {styles["text-24px"]}>Project Backend:</p>
                        </div>
                            <ul className = {styles["back-ul"]}>
                                <li className = {styles["text-21px"]}>Node.js.</li>
                                <li className = {styles["text-21px"]}>Layered architecture.</li>
                                <li className = {styles["text-21px"]}>TypeScript.</li>
                                <li className = {styles["text-21px"]}>Prisma types.</li>
                                <li className = {styles["text-21px"]}>Utility types</li>
                                <li className = {styles["text-21px"]} >Prisma.</li>
                                <li className = {styles["text-21px"]} >CRUD-operation</li>
                                <li className = {styles["text-21px"]} >MiddleWare</li>
                            </ul>
                    </div>

                    <div className = {styles["cart-example"]}>
                        <div className = {styles["cart-user"]}>
                            <img className = {styles["profile-big"]} src={profileCart}/>
                            <p className = {`${styles["text-18px"]} ${styles["light"]}`}>User1</p>
                        </div>
                        <div className = {styles["cart-content"]}>
                            <p className = {styles["text-21px"]}>Topic</p>
                            <p className = {styles["text-18px"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum ullamco Laboris Nisi ut aliquip ex ea commodo consequat. </p>
                        </div>

                        <div className = {styles["cart-bottom"]}>
                            <div className = {styles["tags"]}>
                                <p className = {styles["text-12px"]}>#nature</p>
                                <p className = {styles["text-12px"]}>#relationship</p>
                            </div>
                            <div className = {styles["post-buttons"]}>
                                <button className = {styles["likes-button"]}>
                                    <img className = {styles["not-like-img"]} src={likes}/>
                                    1K
                                </button>
                                <button className = {styles["comment-button"]}>
                                    <img className = {styles["comment-img"]} src={comments}/>
                                    366
                                </button>
                            </div>
                        </div>

                    </div>

                    <div className = {`${styles["info-cart"]} ${styles["front"]}`}>
                        <p className = {styles["text-24px"]}>Project Frontend:</p>
                        <ul>
                            <li className = {styles["text-21px"]}>React.</li>
                        </ul>
                    </div>

                </div>

                <div className = {styles["bottom-content"]}>
                    <div className = {styles["features-block"]}>
                        <p className = {`${styles["text-24px"]} ${styles['text-features']}`}>Features</p>
                        <ol>
                            <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Registration, login, and logout.</li>
                            <li className = {`${styles["text-21px"]} ${styles["CRUD"]} ${styles["li-ol"]}`}>CRUD operations:
                                <ul>
                                   <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Create: Any authorized user can create new posts.</li>
                                   <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Read: All users can view the list of posts and individual post pages.</li>
                                   <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Update: Only the post owner can edit it.</li>
                                   <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Delete: Posts can be deleted.</li>
                                </ul>
                            </li>
                            <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Users can like and unlike posts on the post page.</li>
                            <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Display the total number of likes on the all posts page and 
                                on the post page.

                            </li>
                            <li className ={`${styles["text-21px"]} ${styles["li-ol"]}`}>Users can add comments to posts.</li>
                            <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Dual-language support (UA, ENG)</li>
                            <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>View and edit your own information.</li>
                            <li className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Form validation</li>
                        </ol>
                    </div>

                    <div className = {styles["pages-block"]}>
                        <p className = {`${styles["text-24px"]} ${styles['text-features']}`}>Forum Pages</p>
                        <div className = {styles["pages-container"]}>
                            <div className = {styles["pages"]}>
                                <img className = {styles["main-image"]} src={mainPage}/>
                                <p className =  {`${styles["text-21px"]} ${styles["li-ol"]}`}>Home Page</p>
                            </div>
                            <div className = {styles["pages"]}>
                                <img className = {styles["post-image"]} src={postsPage}/>
                                <p className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>All Posts Page</p>
                            </div>
                            <div className = {styles["pages"]}>
                                <img className = {styles["post-image"]} src={postsPage}/>
                                <p className =  {`${styles["text-21px"]} ${styles["li-ol"]}`}>Specific Post Page</p>
                            </div>
                            <div className = {styles["pages"]}>
                                <img className = {styles["mini-user-image"]} src={loginImagePage}/>
                                <p className =  {`${styles["text-21px"]} ${styles["li-ol"]}`}>Login/Registration Pages</p>
                            </div>
                            <div className = {styles["pages"]}>
                                <img className = {styles["profile-small"]} src={profileImage}/>
                                <p className = {`${styles["text-21px"]} ${styles["li-ol"]}`}>Profile Page</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
}