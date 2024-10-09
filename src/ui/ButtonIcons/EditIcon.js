import { MdModeEdit } from "react-icons/md";


function EditIcon({onEdit}) {
    return (
        <span className='span-icon-edit' onClick={onEdit}>
            <MdModeEdit />
        </span>
    );
}

export { EditIcon };