import { CubeTransparentIcon } from '@heroicons/react/solid';
import cntl from 'cntl';

const containerClassName = cntl`
  flex
  h-60
  items-center
  justify-center
`;

const iconClassName = cntl`
  animate-spin
  text-gray-400
  h-20
  w-20
`;

const Loading: React.FC = () => {
  return (
    <div className={containerClassName}>
      <CubeTransparentIcon className={iconClassName} />
    </div>
  );
};

export default Loading;
