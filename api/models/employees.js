module.exports = {
    attributes: {
        names : {type: 'string'},
        position: {type: 'string'},

        restaurants:{
            model: 'restaurants',
            required: true
        }
    }
}