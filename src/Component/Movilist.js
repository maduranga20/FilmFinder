import React from 'react'
import { useState, useEffect } from 'react';
// import ApiAccess from './ApiAccess'


import { Database } from './ApiAccess';


function PlayList(event){
 console.log(event);
 
}

function Movilist() {
  const [ list, setList ] = useState([]);

  // {photos.map((photo) => (
  //   <img key={photo.id} src={photo.url} alt={photo.title} width={100} />
  // ))}

  // const API_KEY='97803665fe253e44e5d657dd15ecad20';
  // const url=`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=Avengers&page=1&include_adult=false`

  // console.log(props.list);

  const check = Database();

  // console.log(check);

  useEffect(() => {
    fetch(check)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setList(data);
      });
  }, [ check ]);

  // console.log(list);
  //  const arrangeValues =list.map((track) => ({
  //     id: track.id,
  //     name: track.title,

  //   }));

  // const {select}=list.page;
  // const arrangeValues =list.results.map((track) => ({
  //       id: track.id,
  //       name: track.title,
  //     }));


  //     console.log(arrangeValues)
  // const postList = list.results.map(function (post) {
  //   return (
  //     <div key={post.id}>
  //       <p> title: {post.original_title}</p>
  //     </div>
  //   )
  // })
  // let listdata=[list.results];


  // const my_arr = [
  //   {id: 1, arr: [{subId: 1, value: 1}]},
  //   {id: 2, arr: [{subId: 2, value: 2}]},
  //   {id: 3, arr: [{subId: 3, value: 1}]},
  // ]

  const getList = list.results;
console.log(getList);


  const arrangeList = getList?.map((track) => {
    return (
      <div key ={track.id}>
       
       <button  onClick={PlayList} > <p>{ track.title}+</p> </button>
      </div>

    )
  }

  )


  console.log();


  return (

    <>
      <div>Movilist</div>
      {arrangeList}
     

    </>

  )
}



export default Movilist;
