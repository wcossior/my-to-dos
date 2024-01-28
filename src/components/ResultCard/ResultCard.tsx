import './ResultCard.css';
import { ReactComponent as CheckIcon } from "../../assets/check.svg";
import { useDispatch } from 'react-redux';
import { todoState_clean, hideDeleteTodo_form } from '../../redux/slices/todos';
import { groupState_clean } from '../../redux/slices/group';

const ResultCard = ({ msg, type, errorMsg }: { msg: string, type: string, errorMsg: string | null }) => {

    const dispatch = useDispatch();

    const chooseType = () => {

        switch (type) {
            case "groups":
                dispatch(groupState_clean());
                break;

            case "todos":
                dispatch(todoState_clean());
                dispatch(hideDeleteTodo_form());
                break;
        }
    }

    return (
        <div className={`result-card-container ${errorMsg ? "error" : "success"}`}>
            <CheckIcon className='check-icon' />
            <p>{errorMsg ? errorMsg : msg}</p>
            <button className='btn btn-blank' onClick={chooseType}>Ok</button>
        </div>
    )
}

export default ResultCard
