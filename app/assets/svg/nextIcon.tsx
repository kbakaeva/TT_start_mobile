import React, { FC } from 'react';
import Svg, { Path } from 'react-native-svg';

export const NextIcon: FC<{}> = () => {
  return (
    <Svg width={14} height={14} fill="none">
      <Path
        d="m5.197 11.62 3.804-3.803c.449-.45.449-1.185 0-1.634L5.197 2.38"
        stroke={'grey'}
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
