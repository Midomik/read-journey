import noProgressImg from '../../../../../assets/images/png/no-progress-img.png';

export const NoProgress = () => {
  return (
    <div className="mt-[14px] mobile-sm:max-w-[315px]">
      <p className="leading-[129%] text-gray-68 mobile-sm:mb-[20px] tablet:mb-[60px]">
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className="mx-auto flex items-center justify-center rounded-full bg-gray-26 mobile-sm:mb-[20px] mobile-sm:h-[80px] mobile-sm:w-[80px] tablet:mb-[52px] tablet:h-[100px] tablet:w-[100px]">
        <img
          src={noProgressImg}
          alt="no progres icon"
          className=" mobile-sm:w-[32px] tablet:w-[50px]"
        />
      </div>
    </div>
  );
};
