import { useState, useEffect} from "react"

export default function HomeCardList () {

    const [apiData, setApiData] = useState([])

    async function getData(){
        let response = await fetch("https://rickandmortyapi.com/api/character")
        response = response.json
        setApiData(response)
        console.log(apiData)
    }

    useEffect ( () => {
        getData()
    },[]);

    return(
        <>
            <h1>a</h1>
        </>
    )
    
}