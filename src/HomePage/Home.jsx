import React, {useEffect} from "react";
import {useState} from "react";
import "./Home.css";
import video1 from "../assets/video1.mp4";
import img1 from "../assets/image1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import arrow from "../assets/arrowwhite.png";
import play_icon from "../assets/playwhite.png";
import pause_icon from "../assets/pausewhite.png";

const HeroSection = ({heroData, heroCount, setHeroCount, setPlayStatus, playStatus}) => {
    return(
        <div className="hero-section">
            <div className="hero-text">
                <p className="text1">{heroData.text1}</p>
                <p className="text2">{heroData.text2}</p>
            </div>
            <div className="hero-explore">
                <div className="explore-text">Explore Now</div>
                <img src={arrow} alt="arrow" className="arrow-icon"/>
            </div>
            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li onClick={()=>setHeroCount(0)} className={heroCount === 0 ? "hero-dot green" : "hero-dot"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount === 1 ? "hero-dot green" : "hero-dot"}></li>
                    <li onClick={()=>setHeroCount(2)} className={heroCount === 2 ? "hero-dot green" : "hero-dot"}></li>
                </ul>
                <div className="hero-play" >
                    <img onClick={()=>setPlayStatus(!playStatus)}  src={playStatus?pause_icon:play_icon} alt="play-icon" className="play-icon"/>
                    <p>See the video</p>
                </div>
            </div>
        </div>
    );
}
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-logo">PAL</div>
            <ul className="nav-menu">
                <li className="nav-item">Home</li>
                <li className="nav-item">Explore</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
                <li className="nav-item nav-sign">Login/SignUp</li>
            </ul>
        </div>
    );
}
const Background = ({playStatus, heroCount}) => {
   if(playStatus){
         return(
                <video className="background fadein" autoPlay loop muted>
                    <source src={video1} type="video/mp4"/>
                </video>
         )
   }
   else if(heroCount===0){
       return <img src={img1} alt="" className="background fadein" alt=""/>

   }
   else if(heroCount===1){
       return <img src={img2} alt="" className="background fadein" alt=""/>

   }
   else if(heroCount===2){
       return <img src={img3} alt="" className="background fadein" alt=""/>

   }
}
const Home = () => {
    let heroData = [
        {text1:"Dive into", text2:"what you love"},
        {text1:"Discover", text2:"new passions"},
        {text1:"Connect with", text2:"like-minded souls"},
    ]
    const [heroCount, setHeroCount] = useState(0);
    const [playStatus, setPlayStatus] = useState(false);
    useEffect(() => {
       setInterval(() => {
           setHeroCount((count)=>{return count===2?0:count+1})
       },3000)
    }, []);

    return (
        <div>
           <Background playStatus={playStatus}  heroCount={heroCount} />
            <div className="overlay"></div>
            <Navbar/>
            <HeroSection
                heroData={heroData[heroCount]}
                heroCount={heroCount}
                setHeroCount={setHeroCount}
                setPlayStatus={setPlayStatus}
                playStatus={playStatus}
            />
        </div>
    );
};

export default Home;