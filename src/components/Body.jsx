import "./Body.css"
import { useTypewriter } from 'react-simple-typewriter'
import headerimg from "../assets/images/header-img.svg"
import 'animate.css';
export default function Body(){
    const [text]=useTypewriter({
        words:['I am a Developer'],
        loop:{},
        typespeed:120,
        deletespeed:80
    })
    return(<>
    <div className="main">
        <div className="left">
<div className="welcome">
    <h2>Welcome to my Portfolio</h2>
</div>
<div className="description">
    <h1>Hi! I'm Nikhil {text} </h1>
</div>
<div className="details">
    I'm a full stack developer having experience working on multiple projects using React,Express,MySQL,MongoDB etc.<br></br>I am a team player and would enjoy working with you to bring your vision and project to life using my technical expertise.
</div>
        </div>
        <div className="right">
<img src={headerimg} className="animate__animated animate__shakeY animate__infinite	infinite animate__slower"></img>
        </div>

    </div>

    </>)
    

}