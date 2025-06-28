import { useNavigate } from 'react-router-dom';
import './index.scss';

const FourZeroFour = () => {

  const navigate = useNavigate();

  return (
    <>
      <section className="not-found-container py-30 pb-5 rpy-140 pt-4 shadow">
        {/* <div className="container"> */}

        <div className="container">
          <div className="row justify-content-center mt-md-3">

            <div className="col-xl-12 col-md-8 pb-5 text-center">

              <h4 className='error-small-title mb-0'> Error </h4>

              <h1 className='four-zero-four-title mb-0'> 404 </h1>

              <h5 className='not_found_text'> This page is outside of the universe </h5>


              <p className="text-center">
                It seems the page you're looking for wandered off. Let's get you back on track!
              </p>

              <button onClick={() => navigate('/')} className='btn btn-primary mb-md-5 btn-connect mx-auto d-block'> Go to Home </button>


            </div>

          </div>

        </div>

        {/* </div> */}
      </section>

    </>
  );
};

export default FourZeroFour;
