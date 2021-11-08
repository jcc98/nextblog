import Link from "next/link"
import {HeaderContainer} from "./styles/Container.styled"
import {Burger} from "./styles/Container.styled"

export default function Header({setNavValue}) {


    return (
        <header>
            <HeaderContainer>
                <Link href="/" passHref>
                    <h2 onClick={() => setNavValue(3)}>ブログ</h2>
                </Link>
                <ul onClick={(e) => setNavValue(e.target.value)}>
                    <li value="0">精神</li>
                    <li value="1">日本語</li>
                    <li value="2">プログラミング</li>
                </ul>
            </HeaderContainer>
        </header>
    )
}
