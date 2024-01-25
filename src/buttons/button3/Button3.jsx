import './Button3.css';

const Button3 = () => {
  return (
    <div>
      <button className="button3 relative overflow-hidden py-5 px-16 font-bold text-white text-lg rounded-full bg-white bg-opacity-10 backdrop-blur-md">
        <span className="absolute block w-20 h-full bg-pink-600 blur-lg inset-0 -z-20 button3_span1" />
        <span className="absolute block w-20 h-full top-0 right-0 bg-rose-600 blur-lg -z-20 button3_span2" />
        BUTTON THREE
      </button>
    </div>
  );
};

export default Button3;
