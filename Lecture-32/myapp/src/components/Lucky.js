import React from 'react'

let url1 = "https://media1.tenor.com/images/4d764c0c60cb625b65106b55c3af7226/tenor.gif?itemid=10436407";
let url2 = "https://th.bing.com/th/id/OIP.x1wek8_5Hznf6jbKHiVvUQHaEK?pid=ImgDet&rs=1";

let luckyNumber = Math.floor(Math.random() * 10);

const Lucky = () => {
    // let showItem = false;
    // if (luckyNumber === 7) {
    //     showItem = true;
    // }

    let url;
    if (luckyNumber === 7) {
        url = url1;
    }
    else {
        url = url2;
    }

  return (
      <div>
          Welcome to the App, your lucky number - {luckyNumber}
          <br/>
          {/* {luckyNumber === 7 && <img alt='Pic' src={url1}/>} */}
          {/* {luckyNumber === 7 ? <img alt='Pic' src={url1}/> : <img src={url2} alt="Pic" />} */}
          <img src={url} alt=""/>
      </div>
  )
}

export default Lucky
