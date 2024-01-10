import { Typography, Container, TableContainer, Table, Paper, TableHead, TableRow, TableCell, TableBody } from "@mui/material";


interface IRow {
    initial: string;
    name: string;
    role: string;
}

const data: Array<IRow> = [
    { initial: "P", name: "PostgreSQL", 
        role: "Relational database managment system with SQL complience" },
    { initial: "E", name: "Express.js", 
        role: "Backend web aplication framework, for buidling RESTful APIs with Node.js" },
    { initial: "R", name: "React", 
        role: "Front end JavaScript library for building user interface based on components" },
    { initial: "N", name: "Node.js", 
        role: "Cross-platform JavaScript runtime environment" }
];

export function About() {
    return (
        <div className="about">
            <Typography sx={{ mb: ".5em" }} variant="h4">
                About
            </Typography>
            <Container maxWidth="lg">
                <Typography variant="about">
                    I have started developing this page as a project for a computer science class, but it quickly
                    turned into passion project.
                </Typography>
                <Typography variant="about">
                    The goal of this page is to fully explore all the aspects of full stack development using PERN
                    as technology stack. To explain fully, PERN is an initialism:
                </Typography>
                <TableContainer component={ Paper } sx={{ maxWidth: 650}} className="about_table">
                    <Table sx={{ width: 650 }}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Initial</TableCell>
                                <TableCell>Technology</TableCell>
                                <TableCell>Role in stack</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { data.map((row) => (
                                <TableRow
                                    key={row.initial}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{ row.initial }</TableCell> 
                                    <TableCell>{ row.name }</TableCell> 
                                    <TableCell>{ row.role }</TableCell> 
                                </TableRow> 
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography variant="about" component="p">
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

