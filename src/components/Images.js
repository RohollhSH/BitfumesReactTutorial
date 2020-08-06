import React, { useState } from "react";

export default function Images() {
  const [Images, setImages] = useState([
    "https://images.unsplash.com/photo-1595845003613-4e0c4e5cc1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://p.bigstockphoto.com/jdVZ6zirQdGjAE2vCmmK_bigstock-A-Telltale-Sign-Of-Summer-Hyd-272112430.jpg",
  ]);

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div className="w-1/3">
          <img src={image} alt="" width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    // let tempImage = Images;

    // let tempImage = [...Images];
    // tempImage.push("https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80")
    // console.log(tempImage);
    // setImages(tempImage)

    setImages([
      ...Images,
      "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80",
    ]);
    // console.log("Working");
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>

      <div className="flex justify-between my-5">
        <input
          type="text"
          className="p-2 border border-gray-800 shadow rounded"
        />
        <button className="p-2 bg-green-600 text-white" onClick={handleAdd}>
          Add New
        </button>
      </div>
    </section>
  );
}
