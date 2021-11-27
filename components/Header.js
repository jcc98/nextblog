import Link from "next/link"
import {HeaderContainer} from "./styles/Container.styled"

export default function Header({setNavValue}) {


    return (
        <header>
            <HeaderContainer>
                <Link href="/" passHref>
                    <h2 onClick={() => setNavValue(4)}>ブログ</h2>
                </Link>
                <ul onClick={(e) => setNavValue(e.target.value)}>
                    <li value="0">精神</li>
                    <li value="1">日記</li>
                    <li value="2">日本語</li>
                    <li value="3">プログラミング</li>
                </ul>
            </HeaderContainer>
        </header>
    )
}
