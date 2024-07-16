import * as React from 'react';
import { SVGProps } from 'react';

const MapIcon = ({ fill, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={24}
    fill={fill || '#A0ABC0'}
    {...props}
  >
    <path
      fill={fill || '#A0ABC0'}
      fillRule="evenodd"
      d="M12.875 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395-.883.892-1.845 1.7-2.876 2.416l-.426.29-.2.133-.377.24-.336.205-.416.242a1.874 1.874 0 0 1-1.854 0l-.416-.242-.52-.32-.192-.125-.41-.273a20.641 20.641 0 0 1-3.093-2.566C5.551 16.589 3.875 14.074 3.875 11a9 9 0 0 1 9-9Zm0 2a7 7 0 0 0-7 7c0 2.322 1.272 4.36 2.871 5.996.688.696 1.43 1.335 2.222 1.91l.458.326c.148.103.29.199.427.288l.39.25.343.209.289.169.455-.269.367-.23c.195-.124.405-.263.627-.417l.458-.326a18.022 18.022 0 0 0 2.222-1.91c1.599-1.635 2.871-3.674 2.871-5.996a7 7 0 0 0-7-7Zm0 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"
      clipRule="evenodd"
    />
  </svg>
);
export default MapIcon;
