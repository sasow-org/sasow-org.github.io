import {
    Button,
    Paper,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField
} from "@mui/material";
import ModalEditAgentConfig from "../Modals/ModalEditAgentConfig";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";

export default function ActionConfigsTable(props) {

    const actions = props.actions;

    return (
        <Table>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Action Name</TableCell>
                            <TableCell >Action Probability</TableCell>
                            <TableCell> Delete </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {actions.map((action, i) => (
                            <TableRow key={action.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {action.name}
                                </TableCell>
                                <TableCell >
                                    <TextField
                                        fullWidth
                                        required
                                        value={action.probability}
                                    />
                                </TableCell>
                                <TableCell >
                                    <Button>
                                        <DeleteIcon/>
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Table>
    );
}