import React from "react";
import "/Style.css";
import mydata from "./../../../server/data.json";

function HomePage() {
  return (
    <div>
      <h1>This is the home page</h1>
    </div>
  );
}

export default HomePage;

// import React , {useState} from "react";

// const Video = () => {

//     return(
//         <span className="video_container">
//             <h3>My Video</h3>

//          {/* /* put add  search component */}
//             {mydata.map( (movie)=>
//             <VideoDetails movie={movie}/>
//           )}

//         </span>
//     )
// };

// export default Video ;
