import { CompleteIcon } from '../ButtonIcons/CompleteIcon';
import { DeleteIcon } from '../ButtonIcons/DeleteIcon';
import { EditIcon } from '../ButtonIcons/EditIcon';

import './TodoItem.css';


function TodoItem(props) {
   return (
      <li className="TodoItem">
         <CompleteIcon completed={props.completed}
            onComplete={props.onComplete} />
         <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
         <DeleteIcon onDelete={props.onDelete} />
         <EditIcon onEdit={props.onEdit} />
      </li>
   );
}
export { TodoItem };