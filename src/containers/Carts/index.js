import React from 'react';
import {
    Container,
    Heart,
} from './styles/SongItem';

export default function Lists({children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Lists.Heart = function ListsHeart({ children, ...restProps }) {
    return <Heart {...restProps}>{children}</Heart>;
};

Lists.Details = function ListsDetails({ children, ...restProps }) {
    return <Details {...restProps}>{children}</Details>;
};
