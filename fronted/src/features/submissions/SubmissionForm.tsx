import { useDispatch } from "react-redux";
import { show } from './submissionsSlice';

 const SubmissionForm = () => {
    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => dispatch(show())}>Submission Form</button>
        </div>
    );
}

export default SubmissionForm;
