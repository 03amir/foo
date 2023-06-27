import React, {useState , useEffect}  from 'react';

const Home = ()=>{
    
     const [time , setTime] = useState(new Date());
     const [heroImage , setHeroImage] = useState( "");

    const unsplashuri = `https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_KEY}&query=animal&orientation=landscape`;
    
    useEffect(()=>{
        const settime = setTimeout(() => {
            setTime(new Date());
        }, 1000);

        return ()=>{
            clearTimeout(settime)
        };

    },[time]);

    useEffect(()=>{
        fetchImage();
    },[])

    async function fetchImage(){
        const data = await fetch(unsplashuri);
        const imageData = await data.json();
        console.log(imageData.urls.full);
        setHeroImage(imageData?.urls?.full);
    }

    const formatedTime = time.toLocaleTimeString();

    return (
        <>
            <div className='w-full h-full relative bg-orange-950 overflow-hidden'>
                <img className='cover' src="https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NjEyODB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODc4ODM1NDR8&ixlib=rb-4.0.3&q=8" />
                
                <h1 className='text-black bg-orange-700 block absolute top-1/2 left-1/2 translate-y-[-1/2]  '>{formatedTime}</h1>
            </div>

        </>
    )
}

export default Home;