const initState = {
    themeId: 1,
}

type ActionType = changeThemeIdType

export const themeReducer = (state = initState, action: ActionType): typeof initState=> { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }
        default:
            return state
    }
}

export type changeThemeIdType = {
    type : 'SET_THEME_ID'
    id : number
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
