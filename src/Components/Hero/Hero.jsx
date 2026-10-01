
import reactLogo from '../../assets/reactimg.jpg'

export default function Hero() {
  const name='eman Ayman'
  return (
    <div className=' bg-secondary-subtle '>
      <div className='d-flex align-items-center w-75 m-auto justify-content-around'  style={{height:'60vh'}}>

    <div className='w-50' >
    
    <h1 className="pt-5 ms-3 fw-bold fs-1">WELCOME TO REACT JS</h1>

    <p className="fw-semibold fs-4 mt-4 ms-5">Build modern and interactive web applications with React.</p>
    
    <p className="fw-semibold fs-5 " style={{margin:'0 100px'}}>enjoy the journey...</p>
    <p className="fw-semibold fs-5 " style={{margin:'10px 150px'}}>made with {name}</p>


    <button type="button" className="btn btn-dark px-5" style={{margin:'50px 200px'}}>Get started</button>

    </div>
    
    <div className='w-25'>
      <img src={reactLogo} alt="react-logo" style={{ width: '350px' }} />
    </div>






    
    
    </div>
    </div>
  )
}
