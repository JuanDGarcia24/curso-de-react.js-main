import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {

    return (
        <input
            className='TodoSearch'
            placeholder="Buscar Tareas"
            value={searchValue}
            disabled={loading}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }} />
    );
}
export { TodoSearch };