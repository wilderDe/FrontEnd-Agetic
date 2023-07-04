import { FC } from 'react';
import { PropsModalDelete } from '@/interfaces/interfaces';
import { deletePhone } from '@/redux/features/smarthSlice';
import { useAppDispatch } from '@/redux/hooks';
import { styleModal } from '@/helpers/styles';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

const baseUrl = 'http://localhost:8080/api'
export const ModalDelete: FC<PropsModalDelete> = ( {data, funcionModal }) => {

    const dispatch = useAppDispatch();

    const handleCancelar = () => funcionModal({active: false})

    const handleEliminar = async() => {
        const resp = await fetch(`${baseUrl}/smarthphones/${data.id}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        
        });
        dispatch( deletePhone(data.id) )
        funcionModal({active: false})
    }

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
                    <Typography variant='h6' sx={{ textAlign: 'center', color:'GrayText' }}  >
                        ¿Está seguro que quiere eliminar el SmarthPhone?
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 5, margin: 4}}>
                        <Button variant='contained' onClick={handleCancelar} >
                            Cancelar
                        </Button> 
                        <Button variant='contained' color='error' onClick={handleEliminar}>
                            Eliminar
                        </Button> 
                    </Box>
                </Box>
            </Fade>
        </Modal >
    )
}
export default ModalDelete