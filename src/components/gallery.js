import React,{useState} from 'react'
import './gallery.css'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { GrFormNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const images = [

  "https://i.ibb.co/nBrSjLz/TF-10.jpg",
  "https://i.ibb.co/h9v2hnz/TF-9.jpg",
  "https://i.ibb.co/tsnM1yH/TF-8.jpg",
  "https://i.ibb.co/6XmnHxC/TF-7.jpg",
  "https://i.ibb.co/KL2FnBX/TF-6.jpg",
  "https://i.ibb.co/V32tyHF/TF-5.jpg",
  "https://i.ibb.co/K5qcLnJ/TF-4.jpg",
  "https://i.ibb.co/fYbXh1c/TF-3.jpg",
  "https://i.ibb.co/c3KzzWf/TF-2.jpg",
  "https://i.ibb.co/kct0whv/TF-1.jpg"

]

const Gallery = () => {
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
        <img src={data.img} style={{width:'auto',maxWidth:'90%',maxHeight:'90%'}}></img>
        <button onClick={()=> imgAction ('next-img')}><GrFormNext /></button>

      </div>
    }

    <h1 className='text-center fw=700'>The Fields Gallery</h1>
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

export default Gallery
