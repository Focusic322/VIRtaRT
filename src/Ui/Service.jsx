import { useNavigate } from "react-router";

export default function Service({ title, img, id }) {

  const navigate = useNavigate()

  const handleMoreClick = () => {
    navigate(`/service/${id}`);
  };

  return (
    <button className="relative inline-block" onClick={handleMoreClick}>
      <img
        src={img}
        alt={title}
        className="w-[500px] h-[250px] object-cover rounded-2xl  max-xss:h-[150px]"
      />
      <h4 className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-white text-darkBlue text-xl pt-3 pb-3 w-[75%] rounded-xl text-center max-xss:pr-1 max-xss:pl-1 max-xss:pt-2 max-xss:pb-2 max-xss:text-sm">
        {title}
      </h4>
    </button>
  );
}
