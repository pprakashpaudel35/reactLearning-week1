
import { Children } from 'react'
import './buttons.css'
export default function Buttons({children , onSelect , afterSelect }){
    return(
        <button className={afterSelect ? 'active':null} onClick={onSelect}>{children}</button>
    )
}