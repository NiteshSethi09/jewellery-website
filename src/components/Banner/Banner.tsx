import Header from '../Header/Header';
import Bangle from '../../assets/images/img.png';

const Banner: React.FC = () => {
  return (
    <div
      className={`h-[680px] bg-first-banner bg-[length:100%_100%] bg-no-repeat`}
    >
      <Header />
      <div className="m-[auto] mt-16 flex w-[80%] justify-between">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="text-[5.5rem] font-bold">Jewellery</h1>
          <div className="mt-6">
            <p className="mb-1 text-3xl">More than 30+ years old shop</p>
            <strong className="text-2xl font-bold text-white">
              Seller of Gold &amp; Silver
            </strong>
          </div>
          <a
            href=""
            className="mt-10 w-max rounded-full bg-white px-10 py-3 text-lg outline-0"
          >
            Contact Us
          </a>
        </div>
        <div className="flex-1">
          <figure>
            <img src={Bangle} className="w-[90%]" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
