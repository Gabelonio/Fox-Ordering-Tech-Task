import React from 'react';
import type { JSX } from 'react';

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children: React.ReactNode;
};

const Title: React.FC<TitleProps> = ({ level = 1, children, ...props }) => {
    const Heading = `h${level}` as keyof JSX.IntrinsicElements;
    return React.createElement(Heading, props, children);
};

export default Title;