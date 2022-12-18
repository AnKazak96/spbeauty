import styled from "styled-components";

const Input = styled.input`
    outline: none;
    border-radius: 24px;
    border: solid #E2E8F0 1px;
    background-color: #F8FAFC;
    color: #94A3B8;
`;

const TitleTextWrapper = styled.text`
    color: #94A3B8;
`;

const TitledTextInputWrapper = styled.div`
    &:hover {
        opacity: 0.8;
    }
`;

function TitledTextInput({title, def}) {
    const Title = title === undefined ? 
    (<div className='caption'></div>) : 
    (<div className='caption'>
        {title}
    </div>);
    return (
        <TitledTextInputWrapper className='d-flex flex-column gap-2'>
            <TitleTextWrapper>{Title}</TitleTextWrapper>
            <Input className='py-2 px-3' defaultValue={def} ></Input>
        </TitledTextInputWrapper>
    );
}

export default TitledTextInput;