import { Logo } from '../../shared/ui/Logo';
import iPhone_png from '../../shared/assets/images/png/iPhone-png.png';
import iPhone_png_2x from '../../shared/assets/images/png/iPhone-png-@2x.png';
import iPhone_png_3x from '../../shared/assets/images/png/iPhone-png-@3x.png';
import Iphone_webp from '../../shared/assets/images/webp/iPhone-webp.webp';
import Iphone_webp_2x from '../../shared/assets/images/webp/iPhone-webp-@2x.webp';
import Iphone_webp_3x from '../../shared/assets/images/webp/iPhone-webp-@3x.webp';

import { Form } from '../../shared/ui/Form';
import { Input } from '../../shared/ui/Input';
import { Button } from '../../shared/ui/Button';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  loginThunk,
  registerThunk,
} from '../../features/redux/auth/operations';
import { registerSchema } from '../../shared/ui/Form/shemas/registerSchema';
import { loginSchema } from '../../shared/ui/Form/shemas/loginSchema';
import { EyeOnIcon } from '../../shared/assets/icons/EyeOnIcon';
import { EyeOffIcon } from '../../shared/assets/icons/EyeOffIcon';
import { useState } from 'react';

export const Auth = () => {
  const [isVisiblePassword, setIsvisiblePassword] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const page = location.pathname.slice(1);

  const onSubmitRegister = (values) => {
    let data = values;
    if (Object.keys(data).includes('defaultValues')) {
      delete data.defaultValues;
    }
    dispatch(registerThunk(data));

    
  };

  const onSubmitLogin = (values) => {
    let data = values;
    if (Object.keys(data).includes('defaultValues')) {
      delete data.defaultValues;
    }
    dispatch(loginThunk(data));

   
  };

  const checkPassword = (value) => {
    setIsvisiblePassword(value);
  };

  const generalClass =
    'bg-gray-1f   desktop:w-1/2 mobile-sm:w-full rounded-[30px] desktop:px-[64px] mobile-sm:px-[20px] desktop:pt-[40px] tablet:px-[64px] tablet:pt-[40px] mobile-sm:pt-[20px]';
  return (
    <div className=" gap-[16px] mobile-sm:flex mobile-sm:flex-col desktop:flex desktop:flex-row">
      <div className={` mobile-sm:pb-[20px] tablet:pb-[40px] ${generalClass}`}>
        <Logo className=" mobile-sm:mb-[40px] tablet:mb-[157px] desktop:mb-[107px]" />

        <h1 className="font-[700] leading-[94%] tracking-[0.02em] mobile-sm:mb-[20px] mobile-sm:text-[32px] tablet:mb-[40px] tablet:max-w-[472px] tablet:text-[64px] desktop:text-[64px] ">
          Expand your mind, reading{' '}
          <span className="text-[#e3e3e380]">a book</span>
        </h1>

        <Form
          submit={page === 'register' ? onSubmitRegister : onSubmitLogin}
          validationSchema={page === 'register' ? registerSchema : loginSchema}
          className="tablet:max-w-[472px] desktop:max-w-full"
        >
          <Input
            isRegister={page === 'register' ? true : false}
            name="name"
            title="Name:"
            placeholder="Yurii Novosad"
          />

          <Input name="email" title="Mail:" placeholder="Your@email.com" />
          <Input
            name="password"
            title="Password:"
            placeholder="Yourpasswordhere"
            type={isVisiblePassword ? 'text' : 'password'}
            eyeIcon={isVisiblePassword ? <EyeOnIcon /> : <EyeOffIcon />}
            checkPassword={checkPassword}
          />

          <div className="flex items-center gap-[14px] mobile-sm:mt-[20px] tablet:mt-[82px]">
            <Button
              size="large"
              className="border-none bg-white font-[700] leading-[100%] text-gray-1f mobile-sm:h-[42px] mobile-sm:px-[29px] mobile-sm:text-[14px] tablet:h-[54px] tablet:px-[54px] tablet:text-[20px] "
              type="submit"
            >
              {page === 'register' ? 'Registration' : 'Log In'}
            </Button>
            <Link
              to={page === 'register' ? '/login' : '/register'}
              className="text-gray-68 underline mobile-sm:text-[12px] tablet:text-[14px]"
            >
              {page === 'register'
                ? 'Already have an account?'
                : 'Don’t have an account? '}
            </Link>
          </div>
        </Form>
      </div>

      <div
        className={` items-end justify-center ${generalClass} pb-0  mobile-sm:flex tablet:hidden desktop:flex`}
      >
        <picture>
          <source
            type="image/webp"
            srcSet={`${Iphone_webp} 1x, ${Iphone_webp_2x} 2x, ${Iphone_webp_3x} 3x`}
          />
          <source
            type="image/png"
            srcSet={`${iPhone_png} 1x, ${iPhone_png_2x} 2x, ${iPhone_png_3x} 3x`}
          />
          <img className="" srcSet={iPhone_png} alt={'girl'} />
        </picture>
      </div>
    </div>
  );
};
