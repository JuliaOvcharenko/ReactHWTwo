import { PostList } from "./components/postList/PostList";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Footer } from "./components/footer";
import styles from "./app.module.css"
import { Home } from "./components/home";


export function App(){
    return <div>
        <Header></Header>
        <Main>
            <Home></Home>
        </Main>
        <Footer></Footer>

        {/* <div>
            <PostList></PostList>
        </div> */}

    </div>
}





