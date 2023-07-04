import { PropsForm } from "@/interfaces/interfaces"
import Swal from "sweetalert2"

export const obtenerFechaHora = (timestamp: string) => {
    const fechaHora = new Date(timestamp)
    const fecha = fechaHora.toLocaleDateString()
    const hora = fechaHora.toLocaleTimeString()
    return `${fecha} ${hora}`
}


export const validarForm = ( form: PropsForm  ) => {
    if( form.nombre!.length === 0 ){
        alertSwal("Debe ingresar el nombre")
        return false
    }
    if( form.modelo!.length === 0 ){
        alertSwal("Debe ingresar el modelo")
        return false
    }
    if( form.precio_referencial! <= 0 ){
        alertSwal("El precio preferencial debe ser mayor a cero")
        return false
    }
    if( form.precio_venta! <= 0 ){
        alertSwal("El precio de venta debe ser mayor a cero")
        return false
    }
    if( form.anio_modelo! <= 0 ){
        alertSwal("El año del modelo  debe ser mayor a cero")
        return false
    }
    return true
}

const alertSwal = ( msg:string ) => {
    Swal.fire({
        position: 'bottom-end',
        icon: 'error',
        title:  msg,
        showConfirmButton: false,
        timer: 2500,
        customClass:{
            container: 'swal-container',
        },
        didOpen: () => {
            const swalContainer = document.querySelector('.swal-container') as HTMLElement ;
            if (swalContainer) {
              swalContainer.style.zIndex = '9999'; // Establece un índice z alto para la alerta
            }
        }      
    })
}