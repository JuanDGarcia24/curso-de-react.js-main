import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

function CompleteIcon({ completed, onComplete }) {
    const iconSelect = completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />;
    return (
        <span className={completed ? 'span-icon-completed' : 'span-icon-uncompleted'}
            onClick={onComplete}>
            {iconSelect}
        </span>
    )
}

export { CompleteIcon }