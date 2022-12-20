import CV_harold from '../files/CV Harold_Castaño.pdf'

function Cv(){
    return(
        <div className='px-52'>
           <embed src={CV_harold} alt="" width={1200} height={1000} /> 
        </div> 
    )
}

export default Cv;