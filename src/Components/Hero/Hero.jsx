import reactLogo from '../../assets/reactimg.jpg'

export default function Hero() {
  const name = 'Eman Ayman'

  return (
    <div className="bg-secondary-subtle">
      <div className="container" style={{ minHeight: '60vh' }}>
        <div className="row align-items-center justify-content-center py-5">
          <div className="col-12 col-md-6 text-center text-md-start">
            <h1 className="fw-bold display-4"> WELCOME TO REACT JS</h1>

            <p className="fw-semibold fs-4 mt-4">
              Build modern and interactive web applications with React.
            </p>

            <p className="fw-semibold fs-5">
              Enjoy the journey...
            </p>

            <p className="fw-semibold fs-5">
              Made with {name}
            </p>

            <button type="button"className="btn btn-dark px-5 mt-3" >
              Get Started
            </button>
          </div>

          <div className="col-12 col-md-6 text-center mt-5 mt-md-0">
            <img  src={reactLogo}  alt="React Logo"  className="img-fluid"  style={{ maxWidth: '350px' }}
            />
          </div>

        </div>
      </div>
    </div>
  )
}