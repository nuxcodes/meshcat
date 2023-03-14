'use client';

import { userAuthSchema } from '@/lib/validations/auth';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { signIn } from 'next-auth/react';
import Button from './ui/Button';
import { authOptions } from '@/lib/auth';
import { FaGoogle } from 'react-icons/fa';

interface SigninFormProps {}
type FormData = z.infer<typeof userAuthSchema>;

const SigninForm: FC<SigninFormProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    //   resolver: zodResolver(userAuthSchema),
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  return (
    <div className="grid w-full gap-8">
      <form>
        <div className="grid gap-4">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            placeholder="name@example.com"
            className="my-0 mb-2 block w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 hover:border-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-neutral-800 focus:ring-offset-1"
            type="email"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect="off"
            disabled={isLoading}
            {...register('email')}
          />
          {errors?.email && (
            <p className="px-1 text-xs text-red-600">{errors.email.message}</p>
          )}
          <Button
            intent={'gradient'}
            className=" px-5 py-2.5 text-center font-display disabled:opacity-50"
            disabled={isLoading}
          >
            {/* {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )} */}
            SIGN IN
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-300"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-graphite px-10 text-white">OR</span>
        </div>
      </div>
      <Button
        intent="outline"
        className="rounded-lg text-sm"
        onClick={() =>
          signIn('google', { callbackUrl: 'http://localhost:3000/dashboard' })
        }
        disabled={isLoading}
      >
        <span className="mr-4">
          <FaGoogle className="h-4 w-4"></FaGoogle>
        </span>{' '}
        CONTINUE WITH GOOGLE
      </Button>
    </div>
  );
};
export default SigninForm;
