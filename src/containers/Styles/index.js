import React from 'react';
import {
    List,
    Item,
} from './styles/Styles';

export default function Container({children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
}

Container.Item = function ContainerItem({ children, ...restProps }) {
    return <Item {...restProps}>{children}</Item>;
};
