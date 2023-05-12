
import logo from '../../../assets/images/logo.jpg'
import pars from '../../../assets/images/img.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={pars} className="w-3/4 rounded-lg shadow-2xl h-[400px]" />
    <img src={logo} className=" absolute right-5 top-1/2 rounded-lg border-y-8 shadow-2xl w-1/2 h-[250px]" />
    </div>

    <div className='lg:w-1/2'>
      <h1 className="text-5xl font-bold">About Us</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-warning hover:btn-primary">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;