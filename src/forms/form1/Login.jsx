import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (email && password) {
      toast.success('Login Successful!');
      setLoading(false);
    } else {
      toast.warning('Please Fill all the fields!');
      setLoading(false);
    }
  };

  return (
    <>
      <form
        className="w-full flex flex-col gap-y-4"
        onSubmit={handleLoginSubmit}
      >
        <h3 className="accent-color text-3xl text-center font-bold capitalize my-6">
          Enter your login details
        </h3>
        <input
          type="text"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full min-h-[55px] shadow-light py-2 px-3 leading-6 focus:outline-cyan-500"
        />
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full min-h-[55px] shadow-light py-2 px-3 leading-6 focus:outline-cyan-500"
          />
          <div
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer hover:text-cyan-500"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? (
              <FaRegEye size={20} />
            ) : (
              <FaRegEyeSlash size={20} />
            )}
          </div>
        </div>
        <button
          type="submit"
          className={`bg-cyan-500 hover:bg-cyan-600 text-white py-4 px-6 w-full rounded-md uppercase duration-300 leading-none font-bold text-lg ${
            loading && 'cursor-not-allowed opacity-50'
          }`}
        >
          Log In
        </button>
      </form>
    </>
  );
};

export default Login;
