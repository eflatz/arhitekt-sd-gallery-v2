"use client";

import { useEffect, useState } from "react";
import galleryData from "../../../../data/gallery-data.json";
import worksData from "../../../../data/dov-works-2023.json";
import WorksGrid from "../../../../components/WorksGrid";
import Work from "../../../../models/Work";
import Gallery from "../../../../models/Gallery";


export default function Page({
  params,
  searchParams
}: {
  params: { id: string };
  searchParams: { kioskEnabled: string };
  works: Work[];
}) {
  const id = params.id;
  const kioskEnabled = searchParams.kioskEnabled;

  const galleries = galleryData;
  const gallery = galleries.find((g) => g.id === id);
  // let works = await getWorks(gallery.queryParams);
  let works = worksData;
  let workWithSameTitle = "";
  const workItems = works
    .map((mapItem) => {
      if (mapItem.title === workWithSameTitle) {
        return null;
      }
      workWithSameTitle = mapItem.title;
      const itemsWithSameTitle = works.filter(
        (filterItem) => mapItem.title === filterItem.title
      );
      let imagesArray = itemsWithSameTitle.map((item) => item.images[0]);

      return {
        ...mapItem,
        images: imagesArray,
      };
    })
    .filter((item, index) => item !== null);
  const [kioskMode, setKioskMode] = useState(
    kioskEnabled === "true" ? true : false
  );

  if (kioskEnabled) {
    return (
      <div className={`kioskBody mx-auto p-4`}>
        {works.length > 0 ? (
          <WorksGrid gallery={gallery} works={workItems} kioskEnabled={kioskMode} />
        ) : (
          <p className="text-xl antialiased">
            Greška: Radovi se nisu mogli učitati
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="container mx-auto bg-white">
      {/* <div className="lg:mt-8 sm:px-6 lg:px-8">
        <div className="">
          <img
            className=""
            src="/images/logo-sd-black.svg"
            alt="Studij dizajna logo"
            style={{ width: 334 }}
          />
        </div>
      </div> */}
      {/* <div className="mx-auto mt-10 lg:ml-28 sm:px-6 lg:px-8">
        <h1 className="text-5xl">{gallery?.name}</h1>
        <p className="text-xl antialiased">{gallery?.description}</p>
      </div> */}
      {works.length > 0 ? (
        <WorksGrid gallery={gallery} works={works} kioskEnabled={false} />
      ) : (
        <p className="text-xl antialiased">
          Greška: Radovi se nisu mogli učitati
        </p>
      )}
    </div>
  );
}
