var ids = {
    github: {
        clientID: 'get_your_own',
        clientSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    linkedin: {
        clientID: '816n45p87rnm9m',
        clientSecret: '5IdfvmwoVb2A5L0P',
        callbackURL: "http://127.0.0.1:3000/api/auth/linkedin/callback"
    },
    twitter: {
        consumerKey: 'uZ2d8q3QbnYJA9Ga7bNXVE4uj',
        consumerSecret: 'hhvWLyfgaZ10XlY57I8VwB7steNiOPnRSkrGxWR7oif9FhU5Mp',
        callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    }
};

module.exports = ids;