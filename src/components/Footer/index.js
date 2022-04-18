import logo_white from "../../images/logo_white.png";
import naver_white from "../../images/naver_white.png";
import kakaotalk_white from "../../images/kakaotalk_white.png";
import "./Footer.css"

const Footer = () => {
	return (
		<footer>
			<div className={"footer__container"}>
				<div className={"footer__1"}>
					<a href={"/#"}><img src={logo_white} alt={"Logo"}/></a>
					<nav>
						<ul>
							<a href={"/#"}>
								<li>광고제휴</li>
							</a>
							<a href={"/#"}>
								<li>인재채용</li>
							</a>
							<a href={"/#"}>
								<li>이용약관</li>
							</a>
							<a href={"/#"}>
								<li>개인정보처리방침</li>
							</a>
						</ul>
					</nav>
				</div>
				<div className={"footer__2"}>
						<span>
							(주)넛지헬스케어 / CashWalk, Inc.<br/>
							서울특별시 강남구 역삼로1길 8(역삼동, 평익빌딩) / 전화 02-0000-0000 / 이메일 cs@cashwalk.io<br/>
							Copyright © 2022 by CashWalk, Inc. All Rights Reserved.
						</span>
					<div className={"footer__2__logos"}>
						<a href={"/#"}><img src={naver_white} alt={"네이버"}/></a>
						<a href={"/#"}><img src={kakaotalk_white} alt={"카카오톡"}/></a>
					</div>
				</div>
			</div>
		</footer>
	)
};

export default Footer;
