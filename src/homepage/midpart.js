import React from "react";
import img from '../img/55.jpg'
import Change from './imgchange.js'

function Midpart() {
  return (

   <div className='container'>
   <div className='right'>
   <Change>
        <img src="./img/img.webp" alt="Description" />
        </Change>
</div>
   <div className='text'>
   <h1>ASH<br />

   <bold>mademoiselle</bold>
   </h1>
   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popu </p>
   </div>
   </div>
  );

}

export default Midpart;