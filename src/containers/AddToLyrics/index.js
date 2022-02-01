import React from 'react';
import {
    Wrapper,
    Artist,
    Lyrics,
    Header,
    Text,
    Button
} from './styles/AddToLyrics';

export default function Container({children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
}
Container.Artist = function ContainerArtist({ children, ...restProps }) {
    return <Artist {...restProps}>{children}</Artist>;
};
Container.Lyrics = function ContainerLyrics({ children, ...restProps }) {
    return <Lyrics {...restProps}>{children}</Lyrics>;
};
Container.Header = function ContainerHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>;
};
Container.Text = function ContainerText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
};
Container.Button = function ContainerButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
};
