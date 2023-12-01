import './modale.css';
import { useState } from 'react';

export const Modale = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className="modale">
            <h1>Welcome</h1>
                <button onClick={()=>{setOpen(true);}}>ClickMe</button>
                {open && (
                    <div className="front" onClick={()=>{setOpen(false)}}>
                        <h2>Front</h2>
                        <p>ClickMe to close the div.</p>
                    </div>
                )
                }
        </div>
    )
}