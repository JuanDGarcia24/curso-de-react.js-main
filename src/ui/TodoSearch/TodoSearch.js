import { useEffect } from 'react';
import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading, params, setParams}) {

    const onSearchValue = (event) => {
        setSearchValue(event.target.value)
        let params = {
            search: event.target.value 
        }
        setParams(params)
    }   
    useEffect(() => {
        const search = params.get("search") ?? ""
        setSearchValue(search)
        console.log(search)
    }, [params, setSearchValue])

    return (
        <input
            type='text'
            className='TodoSearch'
            placeholder="Buscar Tareas"
            value={searchValue}
            disabled={loading}
            onChange={onSearchValue} />
    );
}
export { TodoSearch };