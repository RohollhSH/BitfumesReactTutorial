import React from "react";

export default function Images() {
  const Images = [
    "https://images.unsplash.com/photo-1595845003613-4e0c4e5cc1a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    "https://p.bigstockphoto.com/jdVZ6zirQdGjAE2vCmmK_bigstock-A-Telltale-Sign-Of-Summer-Hyd-272112430.jpg",
  ];

  // console.log(
  //   Images.map((image) => {
  //     return (
  //       <div>
  //         <img src={image} width="150" />
  //       </div>
  //     );
  //   })
  // );

  function ShowImage() {
    return Images.map((image) => {
      return (
        <div>
          <img src={image} width="150" />
        </div>
      );
    })
  }

  return (
    <section>
      <div className="flex justify-center">
        <ShowImage />
        {/* {Images.map((image) => {
          return (
            <div>
              <img src={image} width="150" />
            </div>
          );
        })} */}
      </div>
    </section>
  );
}
