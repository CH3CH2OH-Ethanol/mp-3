import styled from "styled-components";

const StyledHeader = styled.header`
    padding: 20px;

    background-color: rgb(38 40 44);

    @media screen and (max-width: 750px){
        text-align: center;
    }
`;

const Note = styled.p`
    color: rgb(97 140 79);
`;

const ContactList = styled.ul`
    margin: 10px 0;
    padding: 0;
    
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    color: rgb(136 136 136);
    
    list-style: none;
    
    & a{
        color: rgb(136 136 136);
        text-decoration: none;
    }
`;

function Header() {

    return (
        <StyledHeader>
            <h1>Chunyi (Ethan) Wang</h1>
            <Note>My Online Resume</Note>

            <section>
                <ContactList>
                    <li>Boston, MA</li>
                    <li><a href="mailto:CH3CH2OH.YICHUN@gmail.com">CH3CH2OH.YICHUN@gmail.com</a></li>
                    <li>(857)498-3320</li>
                    <li><a href="https://github.com/CH3CH2OH-Ethanol">GitHub</a></li>
                    <li><a href="https://www.linkedin.com/in/chunyi-wang-3453683ab">LinkedIn</a></li>
                </ContactList>
            </section>
        </StyledHeader>
    )
}

export default Header;