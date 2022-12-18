import Clickable from "./Clickable";
import styled from "styled-components";

function IconOnlyButton({icon}) {
    const Container = styled.div`
        color: #94A3B8;
        &:hover {
            color: #64748B;
        }
    `;
    return (
        <Container><Clickable>{icon}</Clickable></Container>
    );
}

export default IconOnlyButton;