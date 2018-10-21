module.exports = {
    attributes: {
        names : {type: 'string'},
        address: {type: 'string'},
        capacity: {type: 'string'},

        employees: {
            collection: 'employees',
            via: 'restaurants'
        }
    }
}