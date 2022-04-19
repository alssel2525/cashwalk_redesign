import arrow_right from "../../images/arrow_right.png";
import "./LinkDownload.css";

const LinkDownload = ({link, icon, text}) => {
	return (
		<a className={"ui__link_download"} href={link} target={"_blank"} rel={"noreferrer"}>
			<img src={icon} alt={""}/>
			<div>{text}</div>
			<img src={arrow_right} alt={""}/>
		</a>
	)
};

export default LinkDownload;
