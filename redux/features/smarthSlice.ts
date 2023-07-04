import { createSlice } from '@reduxjs/toolkit'

interface Phone {
    id: string,
    nombre: string,
    modelo: string,
    precio_referencial: number,
    precio_venta: number,
    anio_modelo: number,
    fecha_creacion: string
    fecha_actualizacion: string
}

interface State {
    phones: Phone[]
}

export const smarthSlice = createSlice({
    name: "smarth",
    initialState: {
        phones: [] as Phone[]
    } as State ,
    reducers: {
        getPhones: (state, action) =>{
            state.phones =  action.payload;
        },
        addPhone: (state, action)=> {
            state.phones = [...state.phones, action.payload ]
        },
        editPhone: (state, action) => {
            state.phones = state.phones.map( phone => {
                if(phone.id === action.payload.id){
                    return{
                        ...phone,
                        ...action.payload
                    }
                }
                return phone
            })
        },
        deletePhone: (state, action) => {
            state.phones = state.phones.filter(phone => phone.id !== action.payload)
        }

    }
})


export const { getPhones, addPhone, editPhone,deletePhone } = smarthSlice.actions;

export default smarthSlice.reducer;