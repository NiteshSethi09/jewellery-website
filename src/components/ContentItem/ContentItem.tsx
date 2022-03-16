import Img from '../../assets/images/beimg.png';
interface Props {
  classes?: String;
}

const ContentItem: React.FC<Props> = ({ classes }) => {
  return (
    <>
      <div className={`mt-20 flex ${classes}`}>
        <div className="">
          <figure>
            <img
              src={Img}
              alt=""
              className="rounded-full border-[30px] border-solid border-[#eec668]"
            />
          </figure>
        </div>
        <div
          className={`bg-[] flex w-[60%]  flex-col justify-evenly px-8 ${
            classes ? 'items-end' : ''
          }`}
        >
          <p
            className={`bg-[] ${
              classes ? 'text-right' : 'text-left'
            } text-lg text-[#1d1d1d] opacity-80`}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            assumenda neque maiores incidunt iste harum, delectus aut facilis
            perspiciatis culpa? Debitis, esse maxime soluta optio laboriosam
            dolores eaque quibusdam tenetur!
          </p>
          <a
            href=""
            className="block w-max rounded-3xl border-[3px] border-solid border-[#ebbf60] bg-[#000] px-8 py-3 text-white"
          >
            See More
          </a>
        </div>
      </div>
    </>
  );
};

export default ContentItem;
