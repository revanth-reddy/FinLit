// import styles of this component
import styles from "./MasonryLayout.module.css"

// import other react pkg to use
import Masonry from "react-masonry-css"

// import other component to use
import MasonryBox from './MasonryBox/MasonryBox';

// MasonryLayout Component
const MasonryLayout = ({ images }) => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
    200: 0
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles["my-masonry-grid"]}
      columnClassName={styles["my-masonry-grid_column"]}
    >
      {images.map(item => (
        <MasonryBox 
          vid={item.id} 
          wallSrc={window.location.origin + "/" + item.src} 
          userProf={window.location.origin + "/" + item.user.src} 
          userName={item.user.name} 
          userJob={item.user.job}
        />
      ))}
    </Masonry>
  )
}

export default MasonryLayout