import Blogslist from "../blogslist";
import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<div>
			<Link to={("/signin/")}>Signin</Link>
			<Blogslist/>
		</div>
	);
}
 
export default Homepage;