import React,{useState} from 'react'
import './gallery.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { GrFormNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const images = [

  "https://i.ibb.co/qJpqhZJ/TBO-2.jpg",
  "https://i.ibb.co/3y2RcRM/TBO-1.jpg",
  "https://i.ibb.co/j816fQb/TBO-3.jpg",
  "https://i.ibb.co/d6DHt04/TBO-4.jpg",
  "https://i.ibb.co/hWBv7Jg/TBO-5.jpg",
  "https://i.ibb.co/zFvTwNq/TBO-6.jpg",
  "https://i.ibb.co/SxSrpkd/TBO-7.jpg",
  "https://i.ibb.co/BNMX16v/TBO-8.jpg",
  "https://i.ibb.co/ZgG5cpz/TBO-9.jpg",
  "https://i.ibb.co/JQW4b9C/TBO-10.jpg",
  "https://i.ibb.co/r39ZPcW/TBO-11.jpg",
  "https://i.ibb.co/gt6GxMH/TBO-12.jpg",
  "https://i.ibb.co/Ct6LDLF/TBO-13.jpg",
  "https://i.ibb.co/qWr868n/TBO-14.jpg",
  "https://i.ibb.co/kyVQxvG/TBO-15.jpg",
  "https://i.ibb.co/X7cx8zR/TBO-16.jpg",
  "https://i.ibb.co/vjDtc7K/TBO-17.jpg",
  "https://i.ibb.co/vQp15f5/TBO-18.jpg",








]

const Tbogallery = () => {
  const [data, setData] =useState({img:'',i:0})

  const viewImage= (img,i) =>{
   setData({img,i})

  }
  const imgAction =(action) =>{
    let i=data.i ;
    if(action === 'next-img'){
      setData({img:images[i+1] , i: i+1});
    } 
    if (action=== 'previous-img'){
      setData({img:images[i-1] , i:i - 1});
    }
    if(!action){
      setData({img:'' , i:0});
    }

  }
  return (
   <>
   
   {
      data.img &&
      <div style={{
        width: '100%',
        height:'100vh',
        background :'black',
        position : 'fixed',
        display:'flex',
        justifyContent : 'center',
        alignItems :'center',
        overflow: 'hidden'

      }}>
        <button onClick={() => imgAction()} style={{position:'absolute',top: 10,right: 10,width:'30px'}}>X</button>
        <button onClick={()=> imgAction ('previous-img')}><GrPrevious /></button>
        <img src={data.img} style={{width:'auto',maxWidth:'90%',maxHeight:'90%'}} alt='gallery-image'></img>
        <button onClick={()=> imgAction ('next-img')}><GrFormNext /></button>

      </div>
    }

    <h1 className='text-center fw=700'>The Brick-Oven Cafe</h1>
    <div style={{padding:'20px'}}>
      <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                    <Masonry>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                style={{width: "100%", display: "block"}}
                                alt=""
                                onClick={() =>viewImage(image,i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
     </div>
  
   
   
   
   
   </>
  )
}

export default Tbogallery
