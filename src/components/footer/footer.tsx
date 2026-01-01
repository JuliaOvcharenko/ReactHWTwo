import styles from "./footer.module.css"
import icon from '../../assets/images/Icon-footer.png'
import iconTwo from '../../assets/images/Icon-footer-1.png'


export function Footer(){
    return <footer>
            <p className = {`${styles["text-21px"]} ${styles["white-text"]}`}>© 2025 Forum All rights reserved</p>
            <div className = {styles["social-media-block"]}>
                <img className = {styles["social-media"]} src = {icon}/>
                <img className = {styles["social-media"]} src = {iconTwo}/>
                <img className = {styles["social-media"]} src = {icon}/>
            </div>
        </footer>
}