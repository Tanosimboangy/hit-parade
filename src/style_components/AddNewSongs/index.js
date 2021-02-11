import React from 'react';
import {
    Container,
    Header,
    InputTitle,
    InputArtist,
    InputPrice,
    Select,
    Textarea,
    Button
} from './styles/AddNewSongs';

export default function Form({children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Form.Header = function FormHeader({ children, ...restProps }) {
    return <Header {...restProps}>{children}</Header>;
};

Form.InputTitle = function FormInputTitle({...restProps }) {
    return <InputTitle {...restProps}/>;
};

Form.InputArtist = function FormInputArtist({...restProps }) {
    return <InputArtist {...restProps}/>;
};

Form.InputPrice = function FormInputPrice({...restProps }) {
    return <InputPrice {...restProps}/>;
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


