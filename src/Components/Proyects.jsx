import React from 'react';
import delivery from '../img/delivery.png';
import sales from '../img/sales.png';
import climax from '../img/climax.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import airbnb_clone from '../img/aibnb-clone.png'

export default function Proyects() {
  return (
    <div className='w-100 p-8'>
        <section>
            <h2 className='text-white text-3xl'>Delivery App</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                        This program is a simulator of a business that uses automated orders.
                        Although it is only a trial version, this delivery application can help you expand your delivery management network.
                        To use it, on the left panel you can see a list of all deliveries, available deliveries are shown in green,
                        while those currently in the delivery process are shown in red. The time limit for delivering an order is 5 minutes,
                        after this period deliveries may be taken by other delivery drivers.
                        The frontend of this application was developed in React TypeScript,
                        while the backend was built using Express with NodeJS and the database is MySQL. To start it,
                        simply access the main folder and type the command "npm run dev".
                        Then, start the server by accessing the backend folder and typing the same command "npm run dev".
                        <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/delivery-app-22">github code.</a>
                    </p>
                    <div className='flex mt-16 relative left-[50%]'>
                        <RemoveRedEyeIcon color='primary'/>
                        <a href="https://delivery-koderx-app.netlify.app"><i className='text-blue-600 ml-2'>Visitar</i></a>
                    </div>
                </div>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={delivery} />
            </div>
        </section>
        <section>
            <h2 className='text-white text-3xl'>Sales koderx</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                    Koderx Sales is a sales application that allows users to explore a wide variety of products,
                    as well as post their own items to market. The application interface is simple and easy to understand,
                    and it adapts to any type of device. This application was created using React and JavaScript,
                    and a payment stripe was implemented as a payment method to facilitate transactions. In addition,
                    Supabase was used for database management, ensuring high availability and scalability of the application.
                    In summary, Koderx Sales is a reliable and efficient platform for conducting online commercial transactions quickly
                    and securely.
                    <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/Sales-supabase">github code.</a>
                    </p>
                    <div className='flex mt-16 relative left-[50%]'>
                        <RemoveRedEyeIcon color='primary'/>
                        <a href="https://sales-koderx.netlify.app"><i className='text-blue-600 ml-2'>Visitar</i></a>
                    </div>
                </div>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={sales} />
            </div>
        </section>
        <section>
            <h2 className='text-white text-3xl'>Climax</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                    Climax is a website with a user-friendly interface that allows users to check the weather of any region of the world.
                    To use it, simply enter the name of the city and country in the corresponding field and click "Get Weather".
                    The weather information will be displayed on the right panel of the page.
                    This application was developed using React and JavaScript,
                    and integrated with an external API to obtain accurate and up-to-date data on real-time weather.
                    In summary, Climax is a useful and easy-to-use tool to know the weather conditions anywhere in the world.
                    <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/ClimaxApp">github code.</a>
                    </p>
                    <div className='flex mt-16 relative left-[50%]'>
                        <RemoveRedEyeIcon color='primary'/>
                        <a href="https://climax-coderx.netlify.app"><i className='text-blue-600 ml-2'>Visitar</i></a>
                    </div>
                </div>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={climax} />
            </div>
        </section>
        <section>
            <h2 className='text-white text-3xl'>Airbnb-clone</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                    Airbnb-clone is a training application that focuses on replicating the design and interface of the original
                    platform without attempting to compete with it. Its goal is to provide users with a practice environment
                    where they can explore the functionality of the real Airbnb website. Through the training application,
                    users can learn to navigate the interface and discover the key features that make Airbnb such a popular platform.
                    From searching for accommodations to booking rooms, the Airbnb training application is a useful tool for those who want
                    to familiarize themselves with the platform before using it in real life.
                    <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/ClimaxApp">github code.</a>
                    </p>
                    <div className='flex mt-16 relative left-[50%]'>
                        <RemoveRedEyeIcon color='primary'/>
                        <a href="https://airbnb-clone-koderx.netlify.app/"><i className='text-blue-600 ml-2'>Visitar</i></a>
                    </div>
                </div>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={airbnb_clone} />
            </div>
        </section>
    </div>
  )
}
