const initState = {
  projects: [
    { id: '1', title: 'Create ciner page', content: 'bla bla bla' },
    { id: '2', title: 'Upadate ciner page', content: 'blu blu blu' },
    { id: '3', title: 'Create KO page', content: 'ble ble ble' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
