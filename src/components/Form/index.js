import React from 'react';
import {
    Container,
    Header,
    Input,
    Select,
    Textarea,
    Button
} from './styles/form';

export default function Form({children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Form.Header = function FormHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>;
};

Form.Input = function FormInput({...restProps }) {
    return <Input {...restProps}/>;
};

Form.Select = function FormSelect({children, ...restProps }) {
    return <Select {...restProps}>{children}</Select>;
};

Form.Textarea = function FormTextarea({...restProps }) {
    return <Textarea {...restProps}/>;
};

Form.Button = function FormButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};


