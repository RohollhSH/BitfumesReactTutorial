import React, { useState } from "react";

export default function Images() {
  const [Images, setImages] = useState([
    "https://images.unsplash.com/photo-1595845003613-4e0c4e5cc1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1596626587133-9dd92b699bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1473&q=80",
  ]);

  const [newImageUrl, setnewImageUrl] = useState("");

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div className="w-1/3 my-4 flex justify-center">
          <img src={image} alt="" width="150" />
        </div>
      );
    });
  }

  function handleAdd() {
    if (newImageUrl !== "") {
      setImages([newImageUrl, ...Images]);
      setnewImageUrl("");
    }
  }

  function handleChange(event) {
    // console.log(event.target.value);

    setnewImageUrl(event.target.value);
  }

  return (
    <section>
      <div className="flex flex-wrap justify-center">
        <ShowImage />
      </div>

      <div className="flex justify-between my-5">
        <div className="w-full">
          <input
            type="text"
            className="p-2 border border-gray-800 shadow rounded w-full"
            value={newImageUrl}
            onChange={handleChange}
          />
        </div>
        <div>
          <button
            disabled={newImageUrl === ""}
            className={`ml-2 p-2 text-white ${
              newImageUrl !== "" ? "bg-green-600" : "bg-green-300"
            }`}
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </section>
  );
}
