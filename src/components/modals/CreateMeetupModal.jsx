import React, { useState, useRef } from 'react';
import TagsInput from 'react-tagsinput';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import AppToast from '../AppToast';
import '../../assets/styles/modals.scss';
import '../../assets/styles/tags.scss';
import createicon from '../../assets/images/create-new.png';
import store from '../../store';

const CreateMeetupModal = (props) => {
    const initialFormState = {
        topic: '',
        location: '',
        happeningon: ''
    };
    const [meetupInfo, setMeetupInfo] = useState(initialFormState);
    const [tags, setTags] = useState([]);
    const [image, setImage] = useState('');

    const handleTags = (tags) => setTags(tags);
    const imageHandler = ({ target: { files } }) => setImage(files[0]);
    const onChangeHandler = ({ target: { name, value } }) => {
        setMeetupInfo({ ...meetupInfo, [name]: value });
    };
    const appToastRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const { createMeetup, clearCreateError } = props;
        clearCreateError();
        const meetupObject = {
            topic: meetupInfo.topic,
            location: meetupInfo.location,
            happeningon: meetupInfo.happeningon,
            tags,
            image
        };
        createMeetup(meetupObject);
    };

    const reset = () => {
        setMeetupInfo(initialFormState);
        setTags([]);
        setImage('');
    };

    const {
        createLoading, createError, created,
        toggleCreateModal, showCreateModal
    } = props;

    const displayToast = (message) => {
        appToastRef.current.openSnackbar(message);
    };

    const successDisplay = () => {
        const currentState = store.getState();
        delete currentState.meetups.created;
        toggleCreateModal();
        displayToast('Your meetup has been created successfully.');
    };

    const spinner = createLoading ? <Spinner size={23} spinclass="create" /> : null;
    return (
      <>
      <AppToast ref={appToastRef} />
      <div className="create">
          <button id="modal-button" onClick={toggleCreateModal}>
              <img src={createicon} alt="create icon" />
          </button>
          <p>Create a new meetup</p>
      </div>
      {created && successDisplay()}
      {createError && displayToast(createError)}
        <div className="modal" style={{ display: showCreateModal ? 'block' : 'none' }}>
            <div className="modal_content">
                <span className="close_btn" onClick={toggleCreateModal} disabled={!!createLoading}>&times;</span>
                <span className="reset_btn" onClick={reset} disabled={!!createLoading}>Reset</span>
                <div className="create_form">
                    <form encType="multipart/form-data" id="meetup-form" onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Create meetup Form</legend>
                            <input type="text" name="topic" id="topic" placeholder="Meetup Topic *"
                                onChange={onChangeHandler} value={meetupInfo.topic} required/>
                            <textarea name="location" id="location" placeholder="Location *"
                                onChange={onChangeHandler} value={meetupInfo.location} required />
                            <label> Upload Location Image</label>
                            <input type="file" accept="image/*" name="image" id="file"
                                onChange={imageHandler} />
                            Add Tags Here
                            <TagsInput
                                value={tags}
                                onChange={handleTags}
                                addKeys={[13, 32]}
                                maxTags={10}
                            />
                            <label>Happening On: Select Date and Time Below</label>
                            <input type="datetime-local" name="happeningon" min="2019-01-01"
                                max="2030-01-01" id="date" onChange={onChangeHandler}
                                value={meetupInfo.happeningon} required/>
                        </fieldset>
                        {spinner}
                        <input type="submit" value={createLoading ? 'Creating' : 'Submit'} id="submit"
                            disabled={!!createLoading}/>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
};

CreateMeetupModal.propTypes = {
    createLoading: PropTypes.bool,
    createError: PropTypes.any,
    createMeetup: PropTypes.func,
    clearCreateError: PropTypes.func,
    created: PropTypes.bool,
    toggleCreateModal: PropTypes.func,
    showCreateModal: PropTypes.bool
};

export default CreateMeetupModal;
