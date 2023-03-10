const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    users: [],
    totalUsersCount: 50,
    currentPage: 1,
    pageSize: 5
}

function usersReducer(state = initialState, action){
    switch (action.type){
        case FOLLOW:
            return  {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: true};
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId){
                        return {...u, followed: false};
                    }
                    return u
                })
            }
        case SET_USERS:
            return  {
                ...state,
                users: [...action.users]
            }
        case SET_TOTAL_USERS_COUNT:
            return  {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_CURRENT_PAGE:
            return  {
                ...state,
                currentPage: action.currentPage
            }
        default:
            return state;
    }

}
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unFollowAC = (userId) =>({type: UNFOLLOW, userId})
export const setUsersAC = (users) =>({type: SET_USERS, users})
export const setUsersTotalCountAC = (totalUsersCount) =>({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setCurrentPageAC = (currentPage) =>({type: SET_CURRENT_PAGE, currentPage})

export default usersReducer