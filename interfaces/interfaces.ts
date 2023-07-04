
//* Para nuestro redux phone 
export interface PropsSmarthPhone{
    id: string,
    nombre: string,
    modelo: string,
    precio_referencial: number,
    precio_venta: number,
    anio_modelo: number,
    fecha_creacion: string,
    fecha_actualizacion: string
}
    
//* Props para los envios del modal 
export interface propDataModelForm{ 
    active: boolean, 
    title?: string,
    titleButton?: string,
    action?: string
    row?: Object
}
export interface propDataModelDel{ 
    active: boolean, 
    id?: string
}
//* Props de los Modal 
export interface PropsModalForm {
    data: {
        active: boolean,
        title?: string,
        titleButton?:string,
        row?: {
            nombre?: string,
            modelo?: string,
            precio_referencial?: number,
            precio_venta?: number,
            anio_modelo?: number,
            id?:string
        }
        action?:string
    },
    funcionModal: Function,
}
export interface PropsForm {
    nombre?: string,
    modelo?: string,
    precio_referencial?: number,
    precio_venta?: number,
    anio_modelo?: number
}
export interface PropsModalDelete{
    data: {
        active:boolean,
        id?:string
    },
    funcionModal: Function
}

//* Props Componente TableSmart
export interface PropsTable{
    handleEditar: Function,
    handleEliminar: Function
}

//* Props Componente NavBar
export interface PropsNavBar{
    title : string;
    parrafo: string
}