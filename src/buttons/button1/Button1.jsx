import './Button1.css';

const Button1 = () => {
  return (
    <div>
      <button className="relative overflow-hidden  py-6 px-12 font-bold text-white z-10 text-xl">
        <div
          className="absolute inset-1 bg-cyan-600 bg-opacity-80 backdrop-blur-md blur-md w-full -z-10"
          style={{ clipPath: `polygon(0 0, 0% 100%, 100% 0)` }}
        />
        <span className="absolute top-0 left-0 block w-full h-0.5 button1_span1" />
        <span className="absolute top-0 right-0 block w-0.5 h-full button1_span2" />
        <span className="absolute bottom-0 right-0 block w-full h-0.5 button1_span3" />
        <span className="absolute bottom-0 left-0 block w-0.5 h-full button1_span4" />
        BUTTON ON
      </button>
    </div>
  );
};

export default Button1;
