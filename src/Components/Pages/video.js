import { useState } from "react";
import {useParams} from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

// import styles of this component
import styles from "./Video.module.css"

// import other components to use
import VidHeader from '../VidHeader/Header';

// import json files 
import images from "../../Jsons/Images.json"
import Carroussel from "../VideoCarousel/Carousel";
import Card from "../VideoCarousel/Card";

// Video component
const Video = () => {
    const {vidInfo} = useParams();
    console.log(vidInfo);
    let cards = [
        {
            key: uuidv4(),
            content: (
                <Card 
                    title = "Video Title"
                    imagen=""
                    videourl="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                />
            )
        },
        {
          key: uuidv4(),
          content: (
            <Card
                title = "Video Title"
                imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg"
                videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card 
                title = "Video Title"
                imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png"
                videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card 
                title = "Video Title"
                imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png"
                videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
            />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card
                title = "Video Title"
                imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png"
                videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
            />
          )
        },
        {
          key: uuidv4(),
          content: (
            <Card 
                title = "Video Title"
                imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg"
                videourl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
            />
          )
        }
    ];

    return (
        <div>
            <div style={{width:"100%", height: "100%", backgroundColor: "transparent", position: "fixed", top: 0, left: 0}}>
                <VidHeader />
            </div>
            <Carroussel
                cards={cards}
                height="900px"
                width="100%"
                margin="0 auto"
                offset={400}
                showArrows={false}
            />
        </div>
    )
}

export default Video