import { Task } from "./Task";

export const TaskList = (props) => {
    const {list} = props;
    return(
		<ul>
			{
				list?.map((task) => (
					<Task name = {task.name} state = {task.state} />
				) )
			}
		</ul>
    );
};