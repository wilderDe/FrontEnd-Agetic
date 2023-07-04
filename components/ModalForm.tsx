import { ChangeEvent, FC, useEffect, useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { PropsForm, PropsModalForm } from '@/interfaces/interfaces';
import { useAppDispatch } from '@/redux/hooks';
import { addPhone, editPhone } from '@/redux/features/smarthSlice';
import { styleModal } from '@/helpers/styles';
import { validarForm } from '@/helpers/helpers';

const formInitial = {
    nombre: "",
    modelo: "",
    precio_referencial: 0,
    precio_venta: 0,
    anio_modelo: 0
}

const baseUrl = 'http://localhost:8080/api'

export const ModalForm: FC<PropsModalForm> = ({ data, funcionModal }) => {

    const dispatch = useAppDispatch();
    const [form, setForm] = useState<PropsForm>(formInitial)

    const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleSubmit = async() => {
        const bodyData = {
            nombre: form.nombre,
            modelo: form.modelo,
            precio_referencial: Number(form.precio_referencial),
            precio_venta: Number(form.precio_venta),
            anio_modelo: Number(form.anio_modelo)
        }
        //! validacion con SwalAleert2
        if(!validarForm( bodyData )) return

        if( data.action === "agregar" ){
            const resp = await fetch(`${baseUrl}/smarthphones/`,{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(bodyData)
            })

            const dataResp = await resp.json()
            dispatch( addPhone(dataResp) )
            setForm(formInitial)
        
        }else{
           
            const resp = await fetch(`${baseUrl}/smarthphones/${data.row?.id}`,{
                method: 'PATCH',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(bodyData)
            });
            
            const dataResp = await resp.json()
            dispatch( editPhone( dataResp ) )
            setForm(formInitial)
        }

        funcionModal({ active: false })
    }

    useEffect(() => {
        if (data.row) {
            setForm({
                nombre: data.row.nombre,
                modelo: data.row.modelo,
                precio_referencial: data.row.precio_referencial,
                precio_venta: data.row.precio_venta,
                anio_modelo: data.row.anio_modelo
            })
        }
    }, [data])


    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={data.active}
            onClose={() => funcionModal({ active: false })}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={data.active}>
                <Box sx={styleModal}>
                    <Typography variant='h6'  >
                        {data.title}
                    </Typography>
                    <Box
                        component="form"
                        autoComplete='off'
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                            margin: '10px 0'
                        }}
                    >
                        <TextField
                            id="outlined-basic"
                            label="Nombre"
                            variant="outlined"
                            name='nombre'
                            value={form.nombre}
                            onChange={handleChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Modelo"
                            variant="outlined"
                            name='modelo'
                            value={form.modelo}
                            onChange={handleChange}
                        />

                        <TextField
                            type='number'
                            label="Precio preferencial"
                            variant="outlined"
                            name='precio_referencial'
                            value={form.precio_referencial}
                            onChange={handleChange}
                        />
                        <TextField
                            type='number'
                            label="Precio venta"
                            variant="outlined"
                            name='precio_venta'
                            value={form.precio_venta}
                            onChange={handleChange}
                        />
                        <TextField
                            type='number'
                            label="Año modelo"
                            variant="outlined"
                            name='anio_modelo'
                            value={form.anio_modelo}
                            onChange={handleChange}
                        />
                    </Box>
                    <Button variant='contained' onClick={handleSubmit} >
                        { data.titleButton }
                    </Button>
                </Box>
            </Fade>
        </Modal >
    )
}

export default ModalForm