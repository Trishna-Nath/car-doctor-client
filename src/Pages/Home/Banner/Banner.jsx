
import banner from '../../../assets/images/banner.jpg'
const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={banner} className="w-full rounded-lg" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0  ">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
                <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0
                 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='space-y-7 w-1/3 text-white'>
                        <h2 className='text-6xl'>Lorem <br /> ipsum <br /> dolor sit amet.</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, libero <br /> quisquam. Corrupti in voluptates distinctio aliquid odit. Mollitia, labore quisquam!</p>
                        <div>
                            <button className="btn mr-5">Button</button>
                            <button className="btn btn-primary">Button</button>
                        </div>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={banner} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={banner} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={banner} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;