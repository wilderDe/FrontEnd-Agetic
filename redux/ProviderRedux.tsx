"use client"

import { Provider } from 'react-redux'
import React from 'react'
import { store } from './store'


interface Props { children: React.ReactNode  }

export const ProviderRedux = ( { children }: Props ) => {
    return (
        <Provider store={store} >
            { children }
        </Provider>
    )
}
