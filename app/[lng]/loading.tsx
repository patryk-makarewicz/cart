import { Spinner } from '@/components/spinner';

const Loading = () => {
  return (
    <div className="h-[calc(100vh-120px)] w-full m-auto">
      <Spinner />
    </div>
  );
};

export default Loading;
