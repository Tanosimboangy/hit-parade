import React from 'react';
import {
    Wrapper,
    Style,
    Base,
    Title,
    Artist,
} from './styles/StyleContents';

export default function Container({children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
}

Container.Style = function ContainerStyle({ children, ...restProps }) {
    return <Style {...restProps}>{children}</Style>;
};

Container.Base = function ContainerBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
};

Container.Title = function ContainerTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
};

Container.Artist = function ContainerArtist({ children, ...restProps }) {
    return <Artist {...restProps}>{children}</Artist>;
};

