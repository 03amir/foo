import React, {useState , useEffect}  from 'react';
import { greet } from '../utils/greet';
import useHeroImage from '../hooks/useHeroImage';
import useQoute from '../hooks/useQoute';

const Home = ()=>{
    
     const [time , setTime] = useState(new Date());
     const [user, setUser] = useState("Amir");

     const greetMsg = greet();
     const qoute = useQoute();
     const heroImage = useHeroImage();
     const formatedTime = time.toLocaleTimeString();

    useEffect(()=>{
        const settime = setTimeout(() => {
            setTime(new Date());
        }, 1000);

        return ()=>{
            clearTimeout(settime)
        };

    },[time]);

    return (
        <>
            <div className='w-screen h-[99vh] relative overflow-hidden'>
                <img className='object-cover ' src={heroImage} />
                <div className='absolute backdrop-blur-sm top-1/2 left-1/2 translate-x-[-50%] translate-y-[-80%]'>
                    <h1 className="text-9xl font-bold">{formatedTime}</h1>
                    <h3 className="text-6xl font-semibold  mt-7">Good , {greetMsg} {user}</h3>
                </div>
                <div className='absolute mb-5 bottom-0 left-1/2 translate-x-[-50%]'>
                    <h4 className="text-base font-semibold text-center  mt-7">"{qoute}"</h4>
                </div>

            </div>

        </>
    )
}

export default Home;