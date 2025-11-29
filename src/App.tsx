import styles from "./app.module.css";
// {styles[]}
export function App(){
    return <div>
        
        <header>
            <div className = {styles["header-div"]}>
                <div className = {styles["forum-div"]}>
                    <p className = {styles["forum-text"]}>Forum</p>
                    <img className = {styles["forum-image"]}/>
                </div>
                <div className = {styles["urls-div"]}>
                    <div className = {styles["url main-url"]}>
                        <img className = {styles["main-image"]}/>
                        <p className = {styles["18px-text"]}>Main</p>
                    </div>
                    <div className = {styles["url posts-url"]}>
                        <img className = {styles["posts-image"]}/>
                        <p className = {styles["18px-text"]}>Posts</p>
                    </div>
                    <button className = {styles["btn create-post"]}>
                        <img className = {styles["post-image"]}/>
                        <p className = {styles["18px-text"]}>Create Post</p>
                    </button>
                    <button className = {styles["btn profile"]}>
                        <img className = {styles["profile-small"]}/>
                        <p className = {styles["18px-text"]}>Profile</p>
                    </button>
                    <img className = {styles["change-language"]}/>
                </div>
            </div>
        </header>

        <main>
            <div className = {styles["center"]}>
                <div className = {styles["top-content"]}>
                    <div className = {styles["info-cart"]}>
                        <div className = {styles["info-title"]}>
                            <img className = {styles["database-img"]}/>
                            <p className = {styles["24px-text"]}>Project Backend:</p>
                            <ul>
                                <li className = {styles["21px-text"]}>Node.js.</li>
                                <li className = {styles["21px-text"]}>Layered architecture.</li>
                                <li className = {styles["21px-text"]}>TypeScript.</li>
                                <li className = {styles["21px-text"]}>Prisma types.</li>
                                <li className = {styles["21px-text"]}>Utility  </li>
                                <li className = {styles["21px-text"]} >Prisma.</li>
                                <li className = {styles["21px-text"]} >CRUD-operation</li>
                                <li className = {styles["21px-text"]} >MiddleWare</li>
                            </ul>
                        </div>
                    </div>
                    <div className = {styles["info-cart"]}>
                        <div className = {styles["info-title"]}>
                            <p className = {styles["24px-text"]}>Project Frontend:</p>
                            <ul>
                                <li className = {styles["21px-text"]}>React.</li>
                            </ul>
                        </div>
                    </div>

                    <div className = {styles["cart-example"]}>
                        <div className = {styles["cart-user"]}>
                            <img className = {styles["profile-big"]}/>
                            <p className = {styles["18px-text"]}>User1</p>
                        </div>
                        <div className = {styles["cart-content"]}>
                            <p className = {styles["21px-text"]}>Topic</p>
                            <p className = {styles["18px-text"]}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum ullamco Laboris Nisi ut aliquip ex ea commodo consequat.
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum ullamco Laboris Nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div className = {styles["cart-bottom"]}>
                            <div className = {styles["tags"]}>
                                <p className = {styles["12px-text"]}>#nature</p>
                                <p className = {styles["12px-text"]}>#relationship</p>
                            </div>
                            <div className = {styles["post-buttons"]}>
                                <button className = {styles["likes-button"]}>
                                    <img className = {styles["not-like-img"]}/>
                                    1K
                                </button>
                                <button className = {styles["comment-button"]}>
                                    <img className = {styles["comment-img"]}/>
                                    366
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

                <div className = {styles["bottom-content"]}>
                    <div className = {styles["features-block"]}>
                        <p className = {styles["24px-text"]}>Features</p>
                        <ol>
                            <li className = {styles["21px-text"]}>Registration, login, and logout.</li>
                            <li className = {styles["21px-text"]}>CRUD operations:
                                <ul>
                                   <li className = {styles["21px-text"]}>Create: Any authorized user can create new posts.</li>
                                   <li className = {styles["21px-text"]}>Read: All users can view the list of posts and individual post pages.</li>
                                   <li className = {styles["21px-text"]}>Update: Only the post owner can edit it.</li>
                                   <li className = {styles["21px-text"]}>Delete: Posts can be deleted.</li>
                                </ul>
                            </li>
                            <li className = {styles["21px-text"]}>Users can like and unlike posts on the post page.</li>
                            <li className = {styles["21px-text"]}>Display the total number of likes on the all posts page and on the post page.-</li>
                            <li className = {styles["21px-text"]}>Users can add comments to posts.</li>
                            <li className = {styles["21px-text"]}>Dual-language support (UA, ENG)</li>
                            <li className = {styles["21px-text"]}>View and edit your own information.</li>
                            <li className = {styles["21px-text"]}>Form validation</li>
                        </ol>
                    </div>

                    <div className = {styles["pages-block"]}>
                        <p className = {styles["24px-text"]}>Forum Pages</p>
                        <div className = {styles["pages"]}>
                            <img className = {styles["main-image page"]}/>
                            <p className = {styles["21px-text"]}>Home Page</p>
                        </div>
                        <div className = {styles["pages"]}>
                            <img className = {styles["post-image page"]}/>
                            <p className = {styles["21px-text"]}>All Posts Page</p>
                        </div>
                        <div className = {styles["pages"]}>
                            <img className = {styles["post-image page"]}/>
                            <p className = {styles["21px-text"]}>Specific Post Page</p>
                        </div>
                        <div className = {styles["pages"]}>
                            <img className = {styles["mini-user-image"]}/>
                            <p className = {styles["21px-text"]}>Login/Registration Pages</p>
                        </div>
                        <div className = {styles["pages"]}>
                            <img className = {styles["profile-small"]}/>
                            <p className = {styles["21px-text"]}>Profile Page</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <footer>
            <p className = {styles["21px-text"]}>© 2025 Forum All rights reserved</p>
            <div className = {styles["social-media-block"]}>
                <img className = {styles["social-media"]}/>
                <img className = {styles["social-media"]}/>
                <img className = {styles["social-media"]}/>
            </div>
        </footer>

    </div>
}





