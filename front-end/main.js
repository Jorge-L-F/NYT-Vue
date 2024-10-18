const port = 7070;
const get_url = 'http://localhost:' + port;

Vue.use(VueRouter);
Vue.use(VueHead);
Vue.use('axios');

Vue.component('news-object', {
    props: {
        news: {
            type: Object,
            required: true
        }
    },
    template: 
    /*html*/
    `
        <div class="news-object">
            <img :src="news.multimedia[3].url" class="news-image">
            <div class="news-details">
                <b class="news-title">{{news.title}}</b><br><br>
                {{news.abstract}}<br><br>
                {{news.byline}}<br><br>
                <a :href="news.url">Source</a>
            </div>
        </div>
    `
})

Vue.component('feed-list', {
    props: {
        newspaper: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `
        <div class="scrollable-box">
            <p v-show="!newspaper.length">Click the fetch button to fetch the latest news.</p>
            <p v-for="news in newspaper">
                <news-object :news="news"></news-object>
            </p>
        </div>
    `
});

const app = new Vue({
    el: '#app',
    head: {
        title: {
            inner: 'NYT Feed',
            separator: ' '
        }
    },
    data: {
        title: 'NYT Feed',
        newspaper: [],
        errorResponse: null
    },
    methods: {
        fetchNews() {
            axios.get(get_url)
                .then(
                    response => (
                        this.newspaper = response.data,
                        this.errorResponse = null
                    ),
                    error => (
                        this.errorResponse = 'There was a problem while fetching the articles from NYT. Try refreshing the page.\n' + error
                    )
                );
        }
    },
    computed: {
        buttonMessage() {
            return (this.newspaper.length || this.errorResponse) ? 'Refresh News' : 'Fetch News';
        }
    }
});