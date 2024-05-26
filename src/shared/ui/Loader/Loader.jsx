import { Puff } from 'react-loader-spinner';

import React from 'react';

export const Loader = () => {
  return (
    <div className="fixed left-0 top-0 z-[50] h-[100vh] w-[100vw] bg-[#14141499]">
      <div className="absolute left-[50%] top-[50%]">
        {' '}
        <Puff
          visible={true}
          height="80"
          width="80"
          color="#686868"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};
