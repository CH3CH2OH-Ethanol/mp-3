function Home() {
    return (
        <>
            <title>Home | Resume</title>

            <h2>Hi, I'm Ethan Wang.</h2>
            <p>
                I'm a Computer Science student at Boston University interested in software engineering, programming education, and
                building software around problems I encounter in the real world.
            </p>
            <p>
                My work ranges from a full-stack Riichi Mahjong tracking system to CodePulse, a classroom code-monitoring tool
                inspired by my experience teaching AP Computer Science A. I also enjoy exploring game development and creative
                digital tools.
            </p>
            <p>
                This website presents my education, teaching experience, technical projects, skills, creative work, and language
                background.
            </p>
            <section>
                <h2>Featured Projects</h2>
                <article>
                    <h3>Riichi Mahjong Tracker</h3>
                    <p>A full-stack Django application for recording physical Mahjong matches and calculating player statistics.</p>
                </article>
                <article>
                    <h3>CodePulse</h3>
                    <span>On Going</span>
                    <p>A Spring Boot classroom tool in development for helping programming instructors observe students' latest code
                        and activity.</p>
                </article>
            </section>
        </>
    )
}

export default Home;