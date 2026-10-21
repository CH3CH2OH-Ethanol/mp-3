import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 30%;

    padding: 20px;

    background-color: rgb(25 26 28);
    border-radius: 10px;

    @media screen and (max-width: 1000px){
        width: 100%;
        padding: 5px 20px;
    }
`;

const NavList = styled.ul`
    list-style: none;
    padding: 0;

    @media screen and (max-width: 1000px){
        display: flex;
        overflow: auto;
        scrollbar-width: none;
    }
`;

const StyledLink = styled(NavLink)`
    padding: 10px 25px;
    border-radius: 10px;
    
    display: block;

    color: rgb(223 225 229);
    text-decoration: none;
    
    &:hover{
        background-color: rgb(51 53 59);
    }
    
    &.active{
         background-color: rgb(53 72 131);
    }

    @media screen and (max-width: 1000px){
        padding: 10px;
        
        &.active{
            background-color: rgb(53 72 131);
            border: 1px solid rgb(40 87 200);
        }
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