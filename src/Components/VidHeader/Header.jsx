// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import BrickLayout from "../BrickLayout/BrickLayout";

import Carroussel from "../VideoCarousel/Carousel";
import { v4 as uuidv4 } from "uuid";
import images from "../../Jsons/Images.json"
import Card from "../VideoCarousel/Card";

// VidHeader component
const VidHeader = () => {
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
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <Nav />
          <BrickLayout />
          <div style={{height: '90vh'}}>
            <Carroussel
                  cards={cards}
                  height="90vh"
                  width="100%"
                  margin="0 auto"
                  offset={400}
                  showArrows={false}
              />
            </div>
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>Watch <span> | </span> Like <span> | </span> Learn 😎🤘</h2>

            
            {/* <div className={`${styles["search-bar"]} flex align-items-center`}>
              <SearchNormal1 size="30" color="var(--white-100)"/>
              <input type="text" className={styles["search-input"]} placeholder="Search how you can make your pockets heavy" />
              <button className={`${styles["search-btn"]} flex justify-content-center align-items-center`}>
                <Setting4 size="20" color="var(--dark-900)"/>
              </button>
            </div> */}

            {/* <HeaderBoxes titles_numbers={JsonHeader.informations} /> */}
          </div>
        </ContainerCard>
    </header>
  )
}

export default VidHeader