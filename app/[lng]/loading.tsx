import { Spinner } from '@/components/spinner';

const Loading = () => {
  return (
    <div className="m-auto h-[calc(100vh-120px)] w-full">
      <Spinner />
    </div>
  );
};

export default Loading;
