import './Button4.css';

const Button4 = () => {
  return (
    <div>
      <button className="button4 relative overflow-hidden py-5 px-16 font-bold uppercase text-white text-lg rounded-md bg-white bg-opacity-10 backdrop-blur-md">
        <span className="absolute w-[80%] h-[80%] left-0 top-0 bg-teal-400 bg-opacity-70 blur-md rounded-tl-md rounded-br-md -z-10 button4_span1" />
        <span className="absolute w-[80%] h-[80%] bottom-0 right-0 bg-cyan-400 bg-opacity-70 blur-md rounded-tl-md rounded-br-md -z-10 button4_span2" />
        BUTTON FOUR
      </button>
    </div>
  );
};

export default Button4;
