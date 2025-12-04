import { Caption } from "../typography";

const MainButton = ({ text, styling }) => {
  return (
    <button className={`border-t cursor-pointer uppercase hover:border-accent transition-opacity duration-200 hover:text-accent border-b py-3 ${styling}`}>
      <Caption text={text} />
    </button>
  );
};

export default MainButton;
