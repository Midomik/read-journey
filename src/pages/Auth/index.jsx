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

    console.log('Register: ', data);
  };

  const onSubmitLogin = (values) => {
    let data = values;
    if (Object.keys(data).includes('defaultValues')) {
      delete data.defaultValues;
    }
    dispatch(loginThunk(data));

    console.log('login: ', data);
  };

  const checkPassword = (value, numb) => {
    console.log(value);
    console.log(numb);

    setIsvisiblePassword(value);
  };

  const generalClass = 'bg-gray-1f  w-1/2 rounded-[30px] px-[64px] py-[40px] ';
  return (
    <div className=" flex gap-[16px]">
      <div className={generalClass}>
        <Logo className=" mb-[107px]" />

        <h1 className=" mb-[40px] text-[64px] font-[700] leading-[94%] tracking-[0.02em] ">
          Expand your mind, reading{' '}
          <span className="text-[#e3e3e380]">a book</span>
        </h1>

        <Form
          submit={page === 'register' ? onSubmitRegister : onSubmitLogin}
          validationSchema={page === 'register' ? registerSchema : loginSchema}
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

          <div className="mt-[82px] flex items-center gap-[14px]">
            <Button
              className="border-none bg-white text-[20px] font-[700] leading-[100%] text-gray-1f"
              type="submit"
            >
              {page === 'register' ? 'Registration' : 'Log In'}
            </Button>
            <Link
              to={page === 'register' ? '/login' : '/register'}
              className="text-gray-68 underline"
            >
              {page === 'register'
                ? 'Already have an account?'
                : 'Don’t have an account? '}
            </Link>
          </div>
        </Form>
      </div>

      <div className={`flex items-end justify-center pb-0 ${generalClass}`}>
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
