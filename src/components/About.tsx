import { Typography, Container } from "@mui/material";


export function About() {
    return (
        <div className="center_mid">
            <Typography variant="h2">
                About
            </Typography>
            <Container maxWidth="lg">
                <Typography variant="about">
                    I have started developing this page as a project for a computer science class, but it quickly
                    turned into passion project.
                </Typography>
                <Typography variant="about" component="span">
                    The goal of this page is to fully explore all the aspects of full stack development using PERN
                    as technology stack. To explain fully, PERN is an initialism:
                    <table className="about_table">
                        <thead>
                            <tr>
                                <th colSpan={3}>Technology stack</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Initial</th>
                                <th>Technology name</th>
                                <th>Role in stack</th>
                            </tr>
                            <tr>
                                <td>P</td>
                                <td>PostgreSQL</td>
                                <td>Relational database managment system with SQL complience</td>
                            </tr>
                            <tr>
                                <td>E</td>
                                <td>Express.js</td>
                                <td>Backend web aplication framework, for buidling RESTful APIs with Node.js</td>
                            </tr>
                            <tr>
                                <td>R</td>
                                <td>React</td>
                                <td>
                                    Front end JavaScript library for building user interface based on components
                                </td>
                            </tr>
                            <tr>
                                <td>N</td>
                                <td>Node.js</td>
                                <td>Cross-platform JavaScript runtime environment</td>
                            </tr>
                        </tbody>
                    </table>
                    Although this page currently does not utilizes any PostgreSQL or Express.js I am diligently
                    working on this integration. Its implemantation was substantionally delayed due to some
                    challenges.
                </Typography>
                <Typography variant="about">
                    I am currently planning on adding database integration and more games. 
                </Typography>
            </Container>
        </div>
    );
}

