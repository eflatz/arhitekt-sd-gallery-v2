import Image from "next/image";
import styles from "./worksGrid.module.css";
import { useState, useEffect, useRef } from "react";
import Modal from "./Modal";
import Gallery from "../models/Gallery";
import Work from "../models/Work";
import WorkImage from "../models/WorkImage";

const WORKS_TIMEOUT = 120000;
const SPONSOR_TIMEOUT = 10000;

function getWorksFor(column: number, works: Work[]) {
  const worksForColumn = works.filter((work, index) => {
    const numberOfCols = 4;
    if (index === 0 && column === 1) return;
    return index % numberOfCols === column - 1;
  });
  return worksForColumn;
}

function renderImagesForColumn(
  worksForColumn: Work[],
  gallery: Gallery,
) {
  return worksForColumn.map((item: Work, index) => {
    const galleryImage = {
      dimensions: getImageDimensions(item.imageOne[0].metadata),
      metaData: item,
      imagePath: item.imageOne[0].uri.substr(9),
      basePath: gallery.galleryImagesStyleUrl,
    };

    // console.log(galleryImage);

    return (
      <div
        key={index}
        className="flex flex-col mb-4 text-center bg-white rounded-lg shadow"
      >
        <Image
          src={`${galleryImage.basePath}${galleryImage.imagePath}`}
          alt="Studij dizajna / radovi studenata"
          width={400}
          height={100}
        />
        <div style={{height: 244}}></div>
      </div>
    );
  });
}

function getImageDimensions(dimensions) {
  return { height: dimensions.height, width: dimensions.width };
}

const getRandomNumber = (min, max) => {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  // console.log(num);
  return num;
};

const getColumnHeight = (ref, id) => {
  // console.log(
  //   id,
  //   ref.current.getBoundingClientRect().height,
  //   window.innerHeight
  // );
  return ref.current.getBoundingClientRect().height - window.innerHeight;
};

export default function WorksGrid({
  gallery,
  works,
  kioskEnabled,
}: {
  gallery: any;
  works: Work[];
  kioskEnabled: boolean;
}) {
  const [columnPositions, setColumnPositions] = useState([0, 0, 0, 0]);
  const c1 = useRef();
  const c2 = useRef();
  const c3 = useRef();
  const c4 = useRef();

  useEffect(() => {
      // console.log("sponsor visible");
     const timerForCols = setInterval(() => {
        setColumnPositions([
          getRandomNumber(0, -getColumnHeight(c1, "c1")),
          getRandomNumber(0, -getColumnHeight(c2, "c2")),
          getRandomNumber(0, -getColumnHeight(c3, "c3")),
          getRandomNumber(0, -getColumnHeight(c4, "c4")),
        ]);
      }, 15000);

    return () => {
      clearInterval(timerForCols);
    };
  }, []);

  return (
    <>
      <div
        className={
          kioskEnabled ? `flex ${styles.main}` : `flex ${styles.mainInKiosk}`
        }
      >
        <div
          className={`${styles.sdColumn} column-1 w-1/4 flex flex-col relative`}
          style={{ top: columnPositions[0] }}
        >
          <div ref={c1} style={{ padding: "0 12px" }}>
            {renderImagesForColumn(getWorksFor(1, works), gallery)}
          </div>
        </div>
        <div
          className={`${styles.sdColumn} column-2 w-1/4 flex flex-col relative`}
          style={{ top: columnPositions[1] }}
        >
          <div ref={c2} style={{ padding: "0 12px" }}>
            {renderImagesForColumn(getWorksFor(2, works), gallery)}
          </div>
        </div>
        <div
          className={`${styles.sdColumn} column-2 w-1/4 flex flex-col relative`}
          style={{ top: columnPositions[2] }}
        >
          <div ref={c3} style={{ padding: "0 12px" }}>
            {renderImagesForColumn(getWorksFor(3, works), gallery)}
          </div>
        </div>
        <div
          className={`${styles.sdColumn} column-2 w-1/4 flex flex-col relative`}
          style={{ top: columnPositions[3] }}
        >
          <div ref={c4} style={{ padding: "0 12px" }}>
            {renderImagesForColumn(getWorksFor(4, works), gallery)}
          </div>
        </div>
      </div>
    </>
  );
}
