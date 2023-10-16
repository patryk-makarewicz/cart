import { Spinner } from '../components/spinner';

export const LoadingOnStart = () => {
  return (
    <div className="absolute flex justify-center items-center w-full h-full z-10">
      <div className="animate-fadeIn">
        <Spinner />
      </div>
    </div>
  );
};

export default LoadingOnStart;
