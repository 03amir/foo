import { useState, useEffect } from 'react';
import { unsplashuri } from '../constants/uris';

const useHeroImage = ()=>{

    const [heroImage, setHeroImage] = useState();

    useEffect(() => {
        fetchImage();
    }, [])

    async function fetchImage() {
        const localImage = localStorage.getItem("heroImage");
        const localExpiry = Number(localStorage.getItem("heroImageExp"));
        
        if( localExpiry > new Date().getTime()){
            setHeroImage(localImage);
            console.log(localExpiry, new Date().getTime())

        }
        else{
            const data = await fetch(unsplashuri);
            const imageData = await data.json();
            setHeroImage(imageData?.urls?.full);
            const expiry = Number(new Date().getTime()) + 1;
            localStorage.setItem("heroImage", imageData?.urls?.full);
            localStorage.setItem("heroImageExp",expiry);
        }

    }

    return heroImage;
}

export default useHeroImage;