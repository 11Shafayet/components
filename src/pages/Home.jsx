import { Link } from 'react-router-dom';

const data = [
  {
    name: 'Hero',
    link: `hero`,
  },
  {
    name: 'Button',
    link: `button`,
  },
  {
    name: 'Form',
    link: `form`,
  },
];

const Home = () => {
  return (
    <div className="font-primary flex justify-center items-center min-h-screen">
      <div className="border rounded-md min-w-[400px] overflow-hidden">
        <div className="bg-gray-400 py-3 px-3 flex justify-between">
          <h2>Component Name</h2>
          <h2>Link</h2>
        </div>
        {data.map((item, i) => (
          <div
            className={`${
              i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
            } py-3 px-3 flex justify-between`}
            key={i}
          >
            <h2 className="font-medium">{item.name}</h2>

            <Link to={`/${item.link}`} className="text-primary">
              Click Here
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
