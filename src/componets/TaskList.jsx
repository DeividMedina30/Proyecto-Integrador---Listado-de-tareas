import { Task } from "./Task";

export const TaskList = (props) => {
    const {listaTareas} = props;
    return(
		<ul>
			{
				listaTareas.map((task) => (
					<Task name = {task.name} state = {task.state} />
				) )
			}
		</ul>
    );
};