import {useState} from 'react'
import { LocalStorage } from '../interfaces/types'


export const useLocalStorage = (key: LocalStorage['key'], defaultValue: LocalStorage['defaultValue']) => {
    const [storedValue, setStoredValue] = useState(() => {
        try{
            const item = window.localStorage.getItem(String(key))
            return item ? JSON.parse(item) : defaultValue
        }
        catch(error){
            return defaultValue
        }
    })

    const setValue = (value:string) => {
        try{
            setStoredValue(value)
            window.localStorage.setItem(String(key), JSON.stringify(value))
        }
        catch(error){
            console.log(error)
        }
    }

    return [storedValue, setValue]
}
