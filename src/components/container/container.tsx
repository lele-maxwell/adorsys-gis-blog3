import { type HTMLProps, type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export default function Container({
  className,
  ...props
}: PropsWithChildren<HTMLProps<any>>) {
  return (
    <div className={twMerge('container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6', className)} {...props} />
  );
}
