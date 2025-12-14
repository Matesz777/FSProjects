import { useEffect, useState } from "react"

function HelloFromExpress() {
    const [fetchMessage, setFetchMessage] = useState('');
    useEffect(() => {
        const fetchMsg = async () => {
           const response = await fetch('/api/hello')
           const data = await response.text()
           setTimeout(() => setFetchMessage(data), 3000)
        };

        fetchMsg();
    }, [])
    return (
        <><h1>{fetchMessage ? fetchMessage : 'Loading...'}</h1></>
    )
}
export default HelloFromExpress