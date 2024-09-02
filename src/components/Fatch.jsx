// import React, { useEffect, useState } from 'react'
// import { Fragment } from 'react'

// function Fatch() {
//     const[data,setData] = useState([])

//     useEffect(()=>{
//         const dataFetched = async()=>{
//             try{
//                 let response = await fetch("https://api.sampleapis.com/cartoons/cartoons2D");

//                 let jsonData = await response.json()
//                 console.log(jsonData)
//                 setData(jsonData)
//             }catch(err){
//                 console.log(err)
//             }
//         }

//         dataFetched ()
//     },[])
//   return (
//     <Fragment>
//     <h1>Cartoon World</h1>
//     {
//         data.map((el,index)=>{
//        return     <>

// <ul key = {index}>
//           <div className='i2'>
//            <h2> Name:  {el.creator
//                 } <br/></h2>
//             <h5>
             
//              Episodes:    {el.episodes} <br/>
//               Genre :{el.genre} <br/>
//               Rating :{el.rating} <br/>
//               Title :{el.title} <br/>
//               Year :{el.year} <br/>
//             </h5>

//             <img id='i1' src = {el.image}/>
           
         
            
//             </div>
//             </ul>
            
//             </>
//         })
//     }
//     </Fragment>
//   )
// }

// export default Fatch


import React, { useEffect, useState } from 'react';
import { Fragment } from 'react';
import axios from 'axios';

function Fatch() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataFetched = async () => {
      try {
        const response = await axios.get("https://api.sampleapis.com/cartoons/cartoons2D");
        const jsonData = response.data;
        console.log(jsonData);
        setData(jsonData);
      } catch (err) {
        console.log(err);
      }
    };

    dataFetched();
  }, []);

  return (
    <>
    <div>
      <h1>Cartoon World</h1>
      {
        data.map((el, index) => {
          return (
            <>
              <ul key={index}>
                <div className='i2'>
                  <h2> Name:  {el.creator} <br/></h2>
                  <h5>
                    Episodes:    {el.episodes} <br/>
                    Genre :{el.genre} <br/>
                    Rating :{el.rating} <br/>
                    Title :{el.title} <br/>
                    Year :{el.year} <br/>
                  </h5>

                  <img id='i1' src={el.image}/>

                </div>
              </ul>
            </>
          );
        })
      }
      </div>
    </>
  );
}

export default Fatch;
