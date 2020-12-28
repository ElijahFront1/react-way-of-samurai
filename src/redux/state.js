import { renderEntireTree } from "../render";

let state = {
    profilePage: {
        posts: [
            { id: 1, message: "One message text", likesCount: 20 },
            { id: 2, message: "Two message text", likesCount: 10 },
        ],
        newPostText: "new text",
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
            {id: 1, name: "Andrew"},
            {id: 2, name: "Sasha"},
            {id: 3, name: "Sveta"},
        ],
    },
}

export let addPost = () => {

    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderEntireTree(state);
};

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
};

export default state;