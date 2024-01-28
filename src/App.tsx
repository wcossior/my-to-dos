import { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import StickyWall from './components/StickyWall/StickyWall';
import Modal from './components/Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './redux/store';
import FormAddGroup from './components/FormAddGroup/FormAddGroup';
import FormAddTodo from './components/FormAddTodo/FormAddTodo';
import FormEditTodo from './components/FormEditTodo/FormEditTodo';
import { getGroupsFromFirestore, getTodos_FromFirestore } from './services/firebaseServices';
import { gettingGroups_completed, getting_groups, selectA_group, set_groups, whenGettingGroups_error } from './redux/slices/group';
import { getTodosfrom_group, gettingTodos_completed, getting_todos, set_todos, todosOrderBy_NoCompleted, whenGettingTodos_error } from './redux/slices/todos';

function App() {
  const deleteTodoForm = useSelector((state: RootState) => state.todos.deleteTodo_form);
  const addGroupForm = useSelector((state: RootState) => state.group.addGroup_form);
  const addTodoForm = useSelector((state: RootState) => state.todos.addTodo_form);
  const editTodoForm = useSelector((state: RootState) => state.todos.editTodo_form);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getting_groups());
        dispatch(getting_todos());
        const groups = await getGroupsFromFirestore();
        dispatch(set_groups(groups));
        if (groups.length > 0) {
          dispatch(selectA_group(groups[0]));
        }
        const todos = await getTodos_FromFirestore();
        dispatch(set_todos(todos));
        if (groups.length > 0) {
          dispatch(getTodosfrom_group(groups[0].customId));
          dispatch(todosOrderBy_NoCompleted());
        }
        dispatch(gettingGroups_completed());
        dispatch(gettingTodos_completed());

      } catch (error) {

        dispatch(whenGettingGroups_error());
        dispatch(whenGettingTodos_error());
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <StickyWall></StickyWall>
      {deleteTodoForm &&
        <Modal></Modal>
      }
      {addGroupForm &&
        <FormAddGroup></FormAddGroup>
      }
      {addTodoForm &&
        <FormAddTodo></FormAddTodo>
      }
      {editTodoForm &&
        <FormEditTodo></FormEditTodo>
      }
    </div>
  );
}

export default App;
