type PlaceholderProps = {
  hide: boolean;
};

export const Placeholder = ({ hide }: PlaceholderProps) => (
  <div className={`${hide ? 'hidden' : 'block'} h-full w-full bg-gray-400 animate-pulse`} />
);
