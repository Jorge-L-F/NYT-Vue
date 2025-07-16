const port = 7070;
const get_url = 'http://' + window.location.hostname + ':' + port;

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
            <img v-if="news.multimedia != null || news.multimedia != undefined" :src="news.multimedia[2].url" class="news-image">
            
            <div v-if="news.multimedia == null || news.multimedia == undefined" class="solo-news-details">
                <p class="news-title"><b>{{news.title}}</b></p>
                <p class="news-text news-abstract">{{news.abstract}}</p>
                <p class="news-text">{{news.byline}}</p>
                <p class="news-text"><a :href="news.url">Source</a></p>
            </div>
            <div v-else class="news-details">
                <p class="news-title"><b>{{news.title}}</b></p>
                <p class="news-text news-abstract">{{news.abstract}}</p>
                <p class="news-text">{{news.byline}}</p>
                <p class="news-text"><a :href="news.url">Source</a></p>
            </div>
        </div>
    `
});

Vue.component('feed-list', {
    props: {
        newspaper: {
            type: Array,
            required: true
        },
        error-response: {
            type: String,
            required: true
        }
    },
    template: 
    /*html*/
    `
        <div class="scrollable-box">
            <p v-show="!newspaper.length && !errorResponse" class="initial-message">Click the fetch button to fetch the latest news.</p>
            <p v-show="errorResponse" class="error-message">{{errorResponse}}</p>
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