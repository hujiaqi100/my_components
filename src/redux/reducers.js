const defaultState = {
    todoList: [],
    inputValue: '',
    error: '',
    tagsList: [
        {
            title: 'tagsone',
            key: '0',
            text: 'this is tagesOne'
        },
        {
            title: 'tagstwo',
            key: '1',
            text: 'this is tagesTwo'
        },
        {
            title: 'tagsthree',
            key: '2',
            text: 'this is tagesThree'
        }
    ],
    selectText: '',
    titleList: [],
    dropList : [
        {
            content : 'one',
            key : '0'
        },
        {
            content : 'two',
            key : '1'
        },
        {
            content : 'three',
            key : '2'
        }
    ],
    dropValue : '请选择。。'
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = defaultState, action) {
    const newState = JSON.parse(JSON.stringify(state))

    if (action.type === 'ONCHANGE_VALUE') {
        newState.error = ''
        newState.inputValue = action.value
        return newState
    }

    if (action.type === 'ADD_ELEMENT') {
        if (newState.inputValue === '') {
            newState.error = '麻烦动动您的手指~'
            return newState
        } else {
            newState.todoList.push(newState.inputValue)
            newState.inputValue = ''
            return newState
        }
    }

    if (action.type === 'PUSH_ELEMENT') {
        newState.todoList.pop(newState.inputValue)
        return newState
    }

    if (action.type === 'SELECT_TEXT') {
        newState.selectText = newState.tagsList[action.value]['text']
        newState.titleList.push(newState.tagsList[action.value])
        return newState
    }

    if (action.type === 'GET_TITLE_LIST') {
        newState.titleList = newState.tagsList.concat(newState.titleList)
        return newState
    }

    if (action.type === 'DELETE_TITLE') {
        newState.titleList.splice(action.value, 1)
        newState.selectText = newState.titleList[action.value - 1] ? newState.titleList[action.value - 1].text : (newState.titleList[action.value] ? newState.titleList[action.value].text : '')
        return newState
    }

    if (action.type === 'CHOOSE_TITLE') {
        newState.selectText = newState.titleList[action.value]['text']
        return newState
    }

    if(action.type === 'SELECT_CHANGE'){
        newState.dropValue = action.value
        return newState
    }
    return state
}

