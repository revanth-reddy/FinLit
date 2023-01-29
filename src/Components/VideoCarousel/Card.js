import Styles from "./Card.module.css";
import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring";
import Button from "./Button";
import { Player } from 'video-react';

function Card({ imagen, videourl, title }) {
  const [show, setShown] = useState(false);
  const videoElement = useRef(null);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });
  

  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => { setShown(true); videoElement.current.play();}}
      onMouseLeave={() => { setShown(false); videoElement.current.pause();}}
    >
      <div style={{cursor: 'pointer'}}>
        <div style={{marginTop: '-40px', padding: '5px', borderRadius: '15px', borderWidth: '5px', backgroundColor: '#102512'}}>
          <Player
            ref={videoElement}
            playsInline
            poster="/assets/poster.png"
            src={videourl}
          />
        </div>
        <h2>Title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <div className={Styles.btnn}>
          <Button text="DownVote" onclickfun={()=>console.log("down")} />
          <Button text="UpVote" onclickfun={()=>console.log("upvote")} />
        </div>
      </div>
    </animated.div>
  );
}

export default Card;
