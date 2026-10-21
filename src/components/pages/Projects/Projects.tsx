import Calculator from "./Calculator.tsx";

function Projects() {
    return (
        <>
            <title>Projects | Resume</title>

            <h2>Projects</h2>

            <section>
                <h3>Software Projects</h3>

                <article>
                    <header className="project-header">
                        <h4>Riichi Mahjong Match Tracker</h4>
                        <p>Python · Django · SQLite · HTML · CSS</p>
                    </header>

                    <p>
                        I built a full-stack web application for recording in-person
                        four-player Riichi Mahjong matches. The project was inspired by
                        online Mahjong platforms, which automatically preserve match
                        history and player statistics that are normally lost when playing
                        in person.
                    </p>

                    <p>
                        Players can create or join a game, submit information for each
                        hand, and preserve the completed game as match history. The backend
                        combines submissions from four players into a single result and
                        handles scoring logic including han and fu, dealer and non-dealer
                        payments, tsumo, and riichi sticks.
                    </p>

                    <p>
                        The application also calculates player statistics such as average
                        placement, win rate, deal-in rate, riichi rate, call rate, tsumo
                        rate, and average winning score.
                    </p>
                </article>

                <article>
                    <header className="project-header">
                        <h4>CodePulse</h4>
                        <p>Java · Spring Boot · Maven · JUnit</p>
                        <p className="status">In Development</p>
                    </header>

                    <p>
                        CodePulse is a classroom programming tool inspired by my experience
                        teaching AP Computer Science A. In larger and online classes, it can
                        be difficult for an instructor to tell whether a student is making
                        progress, stuck on a problem, or simply inactive.
                    </p>

                    <p>
                        The project is designed to let a student's VS Code extension send
                        snapshots of the file currently being edited to a server, allowing
                        an instructor to view the student's latest code through a web
                        dashboard.
                    </p>

                    <p>
                        I am currently developing the Spring Boot server and its
                        snapshot-versioning logic. Each file uses a version number so the
                        server can distinguish newer snapshots from stale or duplicate
                        updates. I am also using JUnit to test version comparison and edge
                        cases.
                    </p>
                </article>

                <article>
                    <header className="project-header">
                        <h4>Personalized NFC Web Cards</h4>
                        <p>HTML · CSS · JavaScript · Figma · GitHub Pages</p>
                    </header>

                    <p>
                        I designed physical NFC cards and a companion static webpage for
                        sharing at a convention. Instead of creating a separate webpage for
                        every card, I used URL query parameters and JavaScript to personalize
                        information displayed by a single deployed page.
                    </p>

                    <p>
                        I designed the physical card in Figma, deployed the webpage using
                        GitHub Pages, and configured individual NFC cards with personalized
                        URLs. I produced 50 cards and distributed approximately 20 of them.
                    </p>
                </article>
            </section>

            <section id="calculator">
                <header className="project-header">
                    <h4>Calculator</h4>
                </header>
                <Calculator />

            </section>
        </>
    )
}

export default Projects;