import React from 'react';
import {
    Container,
    Heart,
    Details,
    Like,
    Dislike,
    ShoppingCart,
    Lyrics,
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

Lists.Like = function ListsLike({ children, ...restProps }) {
    return <Like {...restProps}>{children}</Like>;
};

Lists.Dislike = function ListsDisike({ children, ...restProps }) {
    return <Dislike {...restProps}>{children}</Dislike>;
};

Lists.ShoppingCart = function ListsShoppingCart({ children, ...restProps }) {
    return <ShoppingCart {...restProps}>{children}</ShoppingCart>;
};

Lists.Lyrics = function ListsLyrics({ children, ...restProps }) {
    return <Lyrics {...restProps}>{children}</Lyrics>;
};
