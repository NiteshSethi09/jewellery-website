import Form from '../Form/Form';
import Img from '../../assets/images/cac.png';

const Contact: React.FC = () => {
  return (
    <>
      <section>
        <div className="pt-20 font-poppins">
          <div className="mx-auto w-[80%]">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-[#2d2e2e]">
                Request a call back
              </h2>
              <p className="mt-4 text-base  text-[#1d1d1d]">
                A reader will be distracted by the readable content of a page
                when looking at its layout. The point of using LoremIt is a long
                established fact that a reader will be distracted by the
                readable content
              </p>
            </div>
            <div className="mt-8 flex justify-between">
              <div className="w-4/12">
                <Form />
              </div>
              <div className="w-6/12">
                <figure>
                  <img src={Img} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
