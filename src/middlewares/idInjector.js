import { UPDATE_QUESTION } from "../actions/questionsActions";
import { generateId } from "../utils";
import { UPDATE_ANSWER } from "../actions/answerActions";

const idInjector = ({ dispatch, getState }) => next => action => {
  // Should inject an id if an object dont have it
  if (action.type !== UPDATE_QUESTION && action.type !== UPDATE_ANSWER) {
    return next(action);
  }
  // Check if question has an id and inject one if it dosen't
  const object = action.payload;

  if (!object.id) {
    object.id = generateId();
    action.payload = object;
  }

  next(action);
};

export default idInjector;
