import logo from "../../images/logo.png";
import "./Header.css"

const Header = () => {
	return (
		<header>
			<div className={"header__container"}>
				<a href={"/#"}><img src={logo} alt={"Logo"}/></a>
				<nav>
					<ul>
						<a href={"/#"}><li>회사소개</li></a>
						<a href={"/#"}><li>팀원소개</li></a>
						<a href={"/#"}><li>오시는길</li></a>
						<a href={"/#"}><li>인재채용</li></a>
						<a href={"/#"}><li>광고제휴</li></a>
						<a href={"/#"}><li>공시정보</li></a>
					</ul>
				</nav>
			</div>
		</header>
	)
};

export default Header;
