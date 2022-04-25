import Dialog from './Dialog';
import {
  addMessageActionCreator,
  updateMessageTextActionCreator,
} from '../../redux/dialogsPageReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    dialog: state.dialogsPage.dialog,
    messages: state.dialogsPage.messages,
    newMessageText: state.dialogsPage.newMessageText,
    isAuth: state.auth.isAuth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },

    updateMessageText: (text) => {
      dispatch(updateMessageTextActionCreator(text));
    },
  };
};

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog);

export default DialogContainer;
