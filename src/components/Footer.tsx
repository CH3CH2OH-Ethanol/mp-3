import styled from "styled-components";

const StyledFooter = styled.footer`
    width: 100%;

    padding: 10px;

    background-color: rgb(38 40 44);
`;

function Footer() {
    return (
        <StyledFooter>
            <p>All Rights Reserved by Chunyi Wang <a href="">Credits</a> &#169;</p>
        </StyledFooter>
    )
}

export default Footer;