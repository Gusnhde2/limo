import { Link } from "react-router-dom"
import classes from "./PageTitle.module.css"
import { AiOutlineArrowDown } from "react-icons/ai"
import { useLocation } from "react-router-dom"

const PageTitle =(props) =>{
    const location = useLocation()
    console.log(location)
    const scrollDown =()=>{
        
      window.scrollTo({
        top: 500,
        behavior: "smooth"})
        
    }
    
    return (
        <section className={classes.pageTitle}>
        <div className={classes.container}>
			<h2>{props.pageName}</h2>
			<div className={classes.list}>
				<Link to="/">Naslovna</Link>
                <span>:</span>
				<Link to={location.pathname}>{props.pageName}</Link>
			</div>
        </div>
		<div className={classes.scrollDown} onClick={scrollDown} ><AiOutlineArrowDown className={classes.arrowDown} /></div>
    </section>
    )
}

export default PageTitle