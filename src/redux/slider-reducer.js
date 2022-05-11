import React from "react";



const SLIDERID = "SLIDERID"

 const  slider = {
     slides: [{
         background: "https://picsum.photos/800/500?image=563",
         id: "0"
     },
         {
             background: "https://unsplash.it/800/500?image=580",
             id: "1"
         },
         {
             background: "https://unsplash.it/800/500?image=824",
             id: "2"
         },
         {
             background: "https://unsplash.it/800/500?image=580",
             id: "1"
         },
         {
             background: "https://unsplash.it/800/500?image=824",
             id: "2"
         }]
 }


const sliderReducer = (state = slider, action) => {
    switch (action.type) {
        case SLIDERID:
            return {


                ...state,
                textId:action.id


            }

        default:
            return state;

    }
}
export const sliderId = (id) => ({type: SLIDERID, id})


export default sliderReducer;