import Button1 from './button1/Button1';
import Button2 from './button2/Button2';
import Button3 from './button3/Button3';
import Button4 from './button4/Button4';

const Button = () => {
  return (
    <section className="flex justify-center items-center min-h-screen relative z-10 bg-black bg-opacity-95">
      <div className="grid grid-cols-2 items-center gap-12 xl:gap-20">
        <Button1 />
        <Button2 />
        <Button3 />
        <Button4 />
      </div>
    </section>
  );
};

export default Button;
