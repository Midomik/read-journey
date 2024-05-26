import { Link } from 'react-router-dom';
import { ArrowIcon } from '../../../assets/icons/ArrowIcon';

export const GetStarted = () => {
  return (
    <div className="rounded-[12px] bg-gray-26 p-[20px] desktop:mb-[20px]">
      <h3 className="mb-[40px] text-[20px] font-[700] leading-[100%]">
        Start your workout
      </h3>
      <div className=" mb-[20px] flex max-w-[248px] gap-[12px] ">
        <div className=" flex h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white font-[700] text-black  mobile-sm:text-[18px] tablet:text-[20px]">
          1
        </div>

        <p className="leading-[129%] tracking-[-0.02em] text-gray-68">
          <span className="text-white">Create a personal library:</span> add the
          books you intend to read to it.
        </p>
      </div>

      <div className=" mb-[20px] flex max-w-[253px] gap-[12px] ">
        <div className=" flex h-[44px] min-w-[44px] items-center justify-center rounded-full bg-white font-[700] text-black mobile-sm:text-[18px] tablet:text-[20px]">
          2
        </div>
        <p className="leading-[129%] tracking-[-0.02em] text-gray-68">
          <span className="text-white">Create your first workout:</span> define
          a goal, choose a period, start training.
        </p>
      </div>

      <div className="mt-auto flex justify-between">
        <Link to="/library" className="text-gray-68 underline">
          My library
        </Link>
        <Link to="/library">
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
};
