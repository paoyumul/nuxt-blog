import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts;
            },
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    vuexContext.commit('setPosts', [
                        {
                            id: '1',
                            title: 'First Post',
                            previewText: 'This is our first post!',
                            thumbnail:
                                'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
                        },
                        {
                            id: '2',
                            title: 'Second Post',
                            previewText: 'This is our second post!',
                            thumbnail:
                                'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
                        },
                        {
                            id: '3',
                            title: 'Third Post',
                            previewText: 'This is our third post!',
                            thumbnail:
                                'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg',
                        },
                    ]);
                    resolve();
                });
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit('setPosts', posts);
            },
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            },
        },
    });
};

export default createStore;
