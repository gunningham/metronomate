import { FC } from 'react';
declare type PropTypes = {
    text: string;
    isActive?: boolean;
    linkTo?: string;
    onClick?: () => void;
};
declare const Button: FC<PropTypes>;
export { Button };
