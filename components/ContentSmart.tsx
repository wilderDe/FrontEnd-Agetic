import { Box, Button, Container } from "@mui/material"
import { FC, useEffect, useState } from "react"
import { getPhones } from "@/redux/features/smarthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { PropsSmarthPhone, propDataModelDel, propDataModelForm } from "@/interfaces/interfaces";
import { TableSmart } from "./TableSmart";
import { ModalForm } from "./ModalForm";
import ModalDelete from "./ModalDelete";

const baseUrl = 'http://localhost:8080/api'

export const ContentSmart: FC = () => {

    const dispatch = useAppDispatch();
    const smart:PropsSmarthPhone[] = useAppSelector( state => state.smarthSlice.phones );
    const [dataModal, setDataModal] = useState<propDataModelForm>({active: false})
    const [dataModalDel, setDataModalDel] = useState<propDataModelDel>({ active: false })

    const handleAgregar = () => {
        setDataModal({
            active: true,
            title:"Agregar Smartphone",
            titleButton: "Agregar",
            action:"agregar"
        })
    }
    const handleEditar = (row:Object) => {
        setDataModal({
            active: true,
            title:"Editar Smartphone",
            titleButton: "Editar",
            action:"editar",
            row
        })
    }
    const handelEliminar = (id:string) => {
        setDataModalDel({
            active: true,
            id
        })
    }
    const obtnerSmarthphones = async() => {
        const resp = await fetch(`${baseUrl}/smarthphones/`);
        const data = await resp.json();
        dispatch( getPhones(data) )

    }

    useEffect(() => {
        obtnerSmarthphones()
    }, [])

    return (
        <Container sx={{
            marginTop: 30
        }}>
            <Box>
                <Button variant="contained" onClick={handleAgregar} >
                    Agregar
                </Button>
            </Box>
            { (smart.length !== 0)
            &&<TableSmart handleEditar={ handleEditar } handleEliminar={handelEliminar} />
            }
            <ModalForm  data={ dataModal }  funcionModal={setDataModal} />
            <ModalDelete data={dataModalDel} funcionModal={setDataModalDel}  />
        
        </Container>
    )
}

export default ContentSmart