import React, { useEffect, useState } from 'react'
import {CarrouselButton, CarrouselButtonContainer, CarrouselContainer, CarrouselImg} from './Carrousel.elements'

import '../../css/Carrousel.css'

export const Carrousel = (props) => {
    const img=["https://media.istockphoto.com/photos/two-hands-holding-the-light-bulb-that-is-illuminating-creative-and-picture-id1219726211?k=20&m=1219726211&s=612x612&w=0&h=bD-m1ND2_rapH-hFFodNcG2ho-_wwDskFTdQyLB8giM=","https://media.istockphoto.com/photos/light-of-idea-picture-id1170506240?k=20&m=1170506240&s=170667a&w=0&h=8dcfSYxYCbsxEkzOGSO4KBbM2MkDgF9-PHEi1YS-PiA="]
    const[selectedIndex,setSelectedIndex]= useState(0);
    const[selectedImg,setSelectedImg]=useState(img[0])
    const[loaded,setLoaded]=useState(false)
    
    const autoPlay = true
    useEffect(()=>{
        if(autoPlay){
            const interval =setInterval(()=>{
                selectNewImg(selectedIndex,img)
            },3000)
            return ()=> clearInterval(interval)
        }
    })
    const selectNewImg=(index , img,next=true)=>{
        setLoaded(false)
        setTimeout(()=>{
            const condition =next? selectedIndex < img.length -1 : selectedIndex > 0;
            const nextIndex = next?(condition?selectedIndex +1 :0):(condition ? selectedIndex -1 :img.length-1);
            setSelectedImg(img[nextIndex]);
            setSelectedIndex(nextIndex);
        },470)
    }

    const previous=()=>{
        selectNewImg(selectedIndex,img,false)
        
    };

    const next =()=>{
        selectNewImg(selectedIndex,img);
    }
    
  return (
    <>
        <CarrouselContainer>
            <CarrouselButton className='back' onClick={previous}>{"<"} </CarrouselButton>
            <CarrouselButton className='next' onClick={next}>{">"} </CarrouselButton>
            <CarrouselImg src={selectedImg} all='imagen techo'
            className={loaded?"loaded":""} 
            onLoad={()=> setLoaded(true)} autoPlay={true} />
        </CarrouselContainer>
         
    </>
  )
}
