let renderEntireTree = () => {
    console.log("state was changed");
}

let state = {
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
}

window.state = state;

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

export let addMessage = () => {

    let newMessage = {
        id: 7,
        message: state.dialogsPage.newMessageText,
    };

    state.dialogsPage.messages.push(newMessage);
    if (Array.from(newMessage.message).length) {
        state.dialogsPage.dialogs.push({ id: 7, name: "Name" })
    }
    state.dialogsPage.newMessageText = '';
    renderEntireTree(state);
};

export let updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    renderEntireTree(state);
};

export const subscribe = (observer) => {
    renderEntireTree = observer;
}

export default state;