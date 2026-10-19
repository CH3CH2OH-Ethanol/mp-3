import Nav from "./Nav.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Education from "./pages/Education.tsx";
import Experiences from "./pages/Experiences.tsx";
import Projects from "./pages/Projects.tsx";
import Skills from "./pages/Skills.tsx";
import Creative from "./pages/Createive.tsx";
import Languages from "./pages/Languages.tsx";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    gap: 6px;
`;

const StyledMain = styled.main`
    width: 70%;
    min-height: 100vh;

    padding: 20px;
    border-radius: 10px;

    background-color: rgb(25 26 28);

    & section,
    & article{
        margin-bottom: 25px;
    }

    & h2,
    & h3,
    & p{
        margin-bottom: 15px;
    }
`;

function Root(){
    return (
        <Container>
            <Nav />
            <StyledMain>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/education" element={<Education />}/>
                    <Route path="/experieces" element={<Experiences />}/>
                    <Route path="/projects" element={<Projects />}/>
                    <Route path="/skills" element={<Skills />}/>
                    <Route path="/creative" element={<Creative />}/>
                    <Route path="/languages" element={<Languages />}/>
                </Routes>
            </StyledMain>
        </Container>
    )
}

export default Root;