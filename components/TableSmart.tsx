import { FC } from "react"
import { useAppSelector } from "@/redux/hooks";
import { PropsSmarthPhone, PropsTable } from "@/interfaces/interfaces";
import { obtenerFechaHora } from "@/helpers/helpers";
import Button from "@mui/material/Button"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const TableSmart: FC<PropsTable> = ({ handleEditar, handleEliminar }) => {

    const smart: PropsSmarthPhone[] = useAppSelector(state => state.smarthSlice.phones)

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} arial-label="simple table"  >
                <TableHead>
                    <TableRow>
                        <TableCell>#</TableCell>
                        <TableCell >Nombre</TableCell>
                        <TableCell >Modelo</TableCell>
                        <TableCell >Precio Preferencial</TableCell>
                        <TableCell >Precio Venta</TableCell>
                        <TableCell >Año Modelo</TableCell>
                        <TableCell >Fecha Creación</TableCell>
                        <TableCell >Fecha Modificación</TableCell>
                        <TableCell ></TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {smart.map((row, index) => (
                        <TableRow key={index} >
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{row.nombre}</TableCell>
                            <TableCell>{row.modelo}</TableCell>
                            <TableCell>{row.precio_referencial}</TableCell>
                            <TableCell>{row.precio_venta}</TableCell>
                            <TableCell>{row.anio_modelo}</TableCell>
                            <TableCell>{obtenerFechaHora(row.fecha_creacion)}</TableCell>
                            <TableCell>{obtenerFechaHora(row.fecha_actualizacion)}</TableCell>
                            <TableCell>
                                <Button
                                    sx={{ textTransform: 'capitalize' }}
                                    variant="outlined"
                                    startIcon={< AssignmentIcon />}
                                    color="secondary"
                                    onClick={() => handleEditar(row)}
                                >
                                    Editar
                                </Button>

                            </TableCell>
                            <TableCell>
                                <Button
                                    sx={{ textTransform: 'capitalize' }}
                                    startIcon={< DeleteIcon />}
                                    variant="contained"
                                    color="error"
                                    onClick={() => handleEliminar(row.id)}
                                >
                                    Eliminar
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
