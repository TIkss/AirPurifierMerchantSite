module.exports = {
    development: {
        db: 'mongodb://localhost/development_PL',
        app: {
            name: 'Purify Life'
        },
        port:3000,
        mail:{
            service: "Gmail",
            auth: {
                user: "sunynick@gmail.com",
                pass: "S922nick"
            }
        }
    },
    production: {
        db: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL,
        app: {
            name: 'Local residence look up'
        },
    }
};
