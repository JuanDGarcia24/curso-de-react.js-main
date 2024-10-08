import { FiDelete } from "react-icons/fi";

function DeleteIcon({onDelete}) {
    return (
        <span className='span-icon-delete' onClick={onDelete}>
            <FiDelete />
        </span>
    );
}

export { DeleteIcon };