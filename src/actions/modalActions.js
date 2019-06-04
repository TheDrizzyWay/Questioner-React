import types from '../actiontypes';
const { SHOW_CREATE_MODAL, CLOSE_CREATE_MODAL } = types;

const showCreateModal = () => ({ type: SHOW_CREATE_MODAL });
const closeCreateModal = () => ({ type: CLOSE_CREATE_MODAL });

export { showCreateModal, closeCreateModal };
