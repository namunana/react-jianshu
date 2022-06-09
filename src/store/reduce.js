const defaultState = {
    focused: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {

    if(action.type === 'search_focus') {
        return {
            focused: true
        }
    }

    if(action.type === 'search_blur') {
        return {
            focused: false
        }
    }
    return state;
}