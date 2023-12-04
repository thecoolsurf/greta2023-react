import { useEffect, useState } from "react"


const App = () => {

    const [toto, setToto] = useState()
    const [titi, setTiti] = useState()

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<Timer />);
    
    useEffect(() => {
        console.log('je suis dans une fonction qui fait des choses')
        console.log('qui n est executée que au demarrage apres le render')
    }, [])

    useEffect(() => {
        console.log('je suis dans une fonction qui fait des choses')
        console.log('au demarrage et a chaque rechargement du a une modification')
        console.log('des states toto et titi')
    }, [toto, titi])

    return (
        <button onClick={() => { setToto(toto + 1) }}>
            valeur toto {toto}
        </button>
    )
}

