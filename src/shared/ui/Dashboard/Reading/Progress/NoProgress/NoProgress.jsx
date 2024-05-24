import noProgressImg from '../../../../../assets/images/png/no-progress-img.png';

export const NoProgress = () => {
  return (
    <div className="mt-[14px] ">
      <p className="mb-[60px] leading-[129%] text-gray-68">
        Here you will see when and how much you read. To record, click on the
        red button above.
      </p>
      <div className="mx-auto flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gray-26">
        <img src={noProgressImg} alt="no progres icon" className=" w-[50px]" />
      </div>
    </div>
  );
};
