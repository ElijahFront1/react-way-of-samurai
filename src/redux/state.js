import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {

        profilePage: {

            posts: [
                { id: 1, message: "One message text", likesCount: 20 },
                { id: 2, message: "Two message text", likesCount: 10 },
            ],

            newPostText: "New post text",
        },

        dialogsPage: {
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" },
                { id: 6, message: "Yo" },
            ],

            newMessageText: "New message text",

            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Andrey" },
                { id: 3, name: "Sveta" },
                { id: 4, name: "Sasha" },
                { id: 5, name: "Viktor" },
                { id: 6, name: "Valera" },
            ],
        },

        sidebar: {
            friendsName: [
                { id: 1, name: "Andrew" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Sveta" },
            ],
        },
    },

    _callSubscriber() {
        console.log("_state was changed");
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;