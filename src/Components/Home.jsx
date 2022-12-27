import coder from '../img/coder-copia.png';
import { AiFillStar } from 'react-icons/ai'
import { skills } from '../constants/credential';

export default function Home(){
    return (
        <div className='w-100' style={{margin: "0"}}>
            <div className='section1 px-8 mx-4 flex w-100 border-b-2 pb-20 border-neutral-700'>
                <section id='info' className='mr-40'>
                    <div className='deg mb-5 bg-gradient-to-r from-koderlim via-lime-900 to-neutral-900' style={{width: "20%"}}>
                        <h1 className='text-xl text-white'>Koderx Developers</h1>
                    </div>
                    <h1 className='text-7xl text-white mb-10' style={{width: "100%",fontFamily: 'Fira Sans, sans-serif'}}>we are full stack web developers.</h1>
                    <h3 className='text-neutral-300 max-w-xl'>
                        koderx developers is a fullstack developer company,
                        although we also specialize in data science and desktop applications,
                        which create software, designed with the needs and specifications of the client,
                        our headquarters is in Medellin, Colombia, but we provide our services nationally and internationally,
                        whether it is for a common client, or a company that needs some type of software,
                        koderx developers will be ready to serve the client, and make their software as optimal,
                        profitable, and functional as possible.
                    </h3>
                </section>
                <section >
                    <img src={coder} className="logo rounded-full" />
                    <div className='absolute z-[5] left-[20%] bottom-[200%] w-[90%] h-[60%]' style={{background: "linear-gradient(100deg, rgb(217 217 217) 10%, rgb(42 104 0) 3 0%)", filter: "blur(300px)"}}></div>
                </section>
            </div>
            <div className='section2 p-5 px-[10%] flex w-100 justify-between'>
                <div className='koder h-100' style={{width: "30%"}}></div>
                <section className='flex flex-col items-center p-24 w-[60%]'>
                    <div>
                        <h2 className='text-white text-xl ml-10 mb-4 '>Harold Castaño Alvarez (KODERX)</h2>
                        <p className='text-neutral-400'>fullstack web developer, creator of koderx developers</p>
                    </div> 
                    <div className='mt-12'>
                        {
                            skills.map(e=>(
                                <div className='flex items-center p-4' key={e.title}>
                                    <div className='hover:bg-gradient-to-tr rounded-lg from-green-800 to-gray-700 p-3'>
                                        <AiFillStar className="stars text-lime-600" />
                                    </div>
                                    <div className='ml-3'>
                                        <h4 className='text-white mb-2'>{e.title}</h4>
                                        <p className='text-gray-400'>{e.text}</p>
                                    </div>
                                </div>
                            ))   
                        }
                    </div>
                </section>
                
            </div>
        </div>
    );
}