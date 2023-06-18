import { useEffect, useState } from "react";
import PageTitle from "../UI/PageTitle";
import ProjectsModal from "./projectsModal";
import { images } from "./images";
import classes from "./Projects.module.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

function paginate(array, page_size, page_number) {
  return array.slice((page_number - 1) * page_size, page_number * page_size);
}

const Projects = () => {
  const [slicedImages, setSlicedImages] = useState([0, 1, 2, 3, 4, 5, 6, 7]);
  const [pageNumber, setPageNumber] = useState(1);
  const [className, setClassName] = useState("");
  const [pictureClicked, setPictureClicked] = useState(false);
  const [pictureToShow, setPictureToShow] = useState();
  const numberOf = Math.ceil(images.length / 8);
  const paginationNumbers = Array.from({ length: numberOf }, (_, i) => i + 1);
  const imageLenght = Array.from(images.keys());

  const pictureClickHandler = (event) => {
    setClassName("open");
    setPictureClicked(true);
    setPictureToShow(event.target.src);
    console.log(pictureToShow);
  };

  const closeModalHandler = () => {
    setClassName("closed");
  };

  const increasePageNumber = () => {
    if (pageNumber < numberOf) {
      console.log(pageNumber);
      setPageNumber(pageNumber + 1);
      window.scrollTo({ top: 500 });
    }
  };

  const decreasePageNumber = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      window.scrollTo({ top: 500 });
    }
  };
  useEffect(() => {
    setSlicedImages(paginate(imageLenght, 8, pageNumber));
  }, [pageNumber]);

  const paginationHandler = (event) => {
    setPageNumber(parseInt(event.target.id));
    console.log(pageNumber);
    console.log(slicedImages);
    window.scrollTo({ top: 500 });
  };

  return (
    <>
      {pictureClicked && (
        <ProjectsModal
          onClose={closeModalHandler}
          className={className}
          image={`${pictureToShow}`}
        />
      )}

      <PageTitle pageName="Projekti" />
      <div className={classes.topTitles}>
        <h3>...Naši projekti</h3>
        <h2>Naši zdannji projekti</h2>
      </div>
      <div className={classes.imagesContainer}>
        {slicedImages.map((image) => {
          return (
            <div className={classes.pictureContainer}>
              <img
                id={image}
                onClick={pictureClickHandler}
                className={classes.picture}
                src={images[image]}
                alt={`description${image}`}
              />
            </div>
          );
        })}
      </div>
      <div className={classes.pagination}>
        <button className={classes.paginationBtn} onClick={decreasePageNumber}>
          <FiArrowLeft />
        </button>
        {paginationNumbers.map((number) => {
          return (
            <button
              className={classes.paginationBtn}
              id={number}
              onClick={paginationHandler}
            >
              {number}
            </button>
          );
        })}
        <button className={classes.paginationBtn} onClick={increasePageNumber}>
          <FiArrowRight />
        </button>
      </div>
    </>
  );
};

export default Projects;
