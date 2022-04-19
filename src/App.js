import Header from "./components/Header";
import Footer from "./components/Footer";
import logo_text from "./images/logo_text.png";
import android from "./images/android.svg";
import apple from "./images/apple-seeklogo.com.svg";
import arrow_down from "./images/arrow_down.png";
import "./App.css";
import LinkDownload from "./components/UI/LinkDownload";

function App() {
	return (
		<>
			<Header/>
			<main>
				<div className={"main__visual"}>
					<div className={"main__visual__container"}>
						<div className={"logo"}><img src={logo_text} alt={"로고"}/></div>
						<div className={"text"}>Unlock Your Motivation</div>
						<div className={"link_container"}>
							<LinkDownload link={"https://play.google.com/store/apps/details?id=com.cashwalk.cashwalk"} icon={android} text={"앱 다운로드"}/>
							<LinkDownload link={"https://apps.apple.com/ph/app/%EC%BA%90%EC%8B%9C%EC%9B%8C%ED%81%AC/id1220307907"} icon={apple} text={"앱 다운로드"}/>
						</div>
					</div>
					<a href={"/#"} className={"main__visual__arrow_down"}><img src={arrow_down} alt={""}/></a>
				</div>
				<div className={"main__visual"}>
				
				</div>
			</main>
			<Footer/>
		</>
	);
}

export default App;
