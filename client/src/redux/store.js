import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './rootReducer'

export default configureStore({
    reducer: rootReducer,
    devTools: composeWithDevTools()
})