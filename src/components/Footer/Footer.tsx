const Footer: React.FC = () => {
  return (
    <>
      <section className="font-poppins" id="footer">
        <div className="bg-[#eec668]">
          <div className="mx-auto flex w-[80%] justify-between py-16">
            <div className="text-3xl">
              <h3 className="mb-5 text-white">
                Trusted Gold and Silver Products
              </h3>
              <span className="font-bold">Founded in 1997</span>
            </div>
            <div className="text-4xl font-bold">
              <h3 className="mb-5">Call Now</h3>
              <span className="tracking-wider text-white">+91 9934799534</span>
            </div>
          </div>
        </div>
        <div className="flex h-16 items-center justify-center bg-footer-image bg-[length:100%_100%] bg-no-repeat  ">
          <span className="text-xl">
            &copy; 2022 All Rights Reserved.&nbsp;
            <span className="transition duration-200 hover:text-white">
              Khatri Alankar
            </span>
          </span>
        </div>
      </section>
    </>
  );
};

export default Footer;
