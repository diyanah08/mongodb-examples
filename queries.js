db.listingsAndReviews.find({
    
}).limit(5).pretty()

db.listingsAndReviews.find({
    
},{'address': 1, 'beds': 1, 'name':1}).limit(5).pretty()

db.listingsAndReviews.find({
    'beds': {
        $gt: 4
    }
}, {'name': 1, 'beds': 1}).limit(10).pretty()


db.listingsAndReviews.find({
    'beds': {
        $gt: 4,
        $lt: 11
    }
}, {'name': 1, 'beds': 1}).limit(20).pretty()

db.listingsAndReviews.find({
    'beds': {
        $gt: 4,
        $lt: 11
    },
    'bathrooms': {
        $gt: 1
    }
},{'name': 1, 'beds': 1, 'bathrooms': 1}).limit(20).pretty()

db.listingsAndReviews.find({
    'address.country': "Canada"
}, {'name': 1, 'beds': 1}).limit(20).pretty()

db.listingsAndReviews.find({
    'beds': {
        $gt: 4,
        $lt: 11
    },
    'bathrooms': {
        $gt: 1
    },
    'address.country': 'Canada'
},{'name': 1, 'beds': 1, 'address.country':1}).limit(20).pretty()

db.listingsAndReviews.find({
    'amenities': "Internet"
},{'name': 1, 'amenities': 1}).limit(20).pretty()

//must include
db.listingsAndReviews.find({
    'amenities': {
        $all: ["Internet", "Laptop friendly workspace", "Wheelchair accessible"]
    }
},{'name': 1, 'amenities': 1}).limit(20).pretty()


//include either
db. listingsAndReviews.find({
    'amenities': {
        $in: ["Internet", "Wifi"]
    }
},{'name': 1, 'amenities': 1}).limit(20).pretty()

db. listingsAndReviews.find({
    'amenities': {
        $nin: ["Internet", "Wifi"]
    }
},{'name': 1, 'amenities': 1}).limit(20).pretty()

db.movies.find({
    'cast': 'Mandy Moore'
}, {'title': 1, 'cast':1}).limit(10).pretty()

db.movies.find({
    'cast': {
        $all:['Tom Cruise', 'Cameron Diaz']
    }
})

//to sort 1 --> acsending, -1 --> decsending
db.movies.find({
    'cast': 'Tom Cruise'
}, {'title': 1, 'case': 1}).sort({'title':1}).pretty()

//find titles that contains
db.movies.find({
    title:/ring/
},{'title':1}).limit(20).pretty()

//find titles that contains [both r and R]
db.movies.find({
    title:/[Rr]ing/
},{'title':1}).limit(20).pretty()

db.movies.find({
    title:/a/,
    'cast': {
        $in:['Tom Cruise', 'Rebecca Ferguson']
    }
},{'title':1, 'cast':1}).limit(10).pretty()