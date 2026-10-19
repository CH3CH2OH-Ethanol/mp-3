import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;

    padding: 20px;

    background-color: rgb(25 26 28);
    border-radius: 10px;
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;
`;

const StyledLink = styled(Link)`
    padding: 10px 25px;
    border-radius: 10px;
    
    display: block;

    color: rgb(223 225 229);
    text-decoration: none;
    
    &:hover{
        background-color: rgb(51 53 59);
    }
`;

function Nav(){
    return (
        <StyledNav>
            <NavList>
                <li><StyledLink to="/">Home</StyledLink></li>
                <li><StyledLink to="/education">Education</StyledLink></li>
                <li><StyledLink to="/experieces">Experiences</StyledLink></li>
                <li><StyledLink to="/projects">Projects</StyledLink></li>
                <li><StyledLink to="/skills">Skills</StyledLink></li>
                <li><StyledLink to="/creative">Creative</StyledLink></li>
                <li><StyledLink to="/languages">Languages</StyledLink></li>
            </NavList>
        </StyledNav>
    )
}

export default Nav;