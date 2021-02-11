import React from 'react';
import {
    Wrapper,
    Header,
    List,
    Item,    
} from './styles/containers';

export default function Container({children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
}

Container.Header = function ContainerHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>;
};

Container.List = function ContainerList({children, ...restProps }) {
    return <List {...restProps}>{children}</List>;
}

Container.Item = function ContainerItem({children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
}