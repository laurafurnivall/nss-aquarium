/*
Initial database of original fish represneted in a inception
of object -> array -> objects
*/

const database = {
    fish: [
        {
            image: "https://images.pexels.com/photos/6949171/pexels-photo-6949171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Dory",
            species: "Blue Tang",
            location: "Atlantic Ocean",
            length: "5-10 inches",
            food: "Marine plants and detritus"
        },
        {
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2020/06/Yellow-Tang-reefs.jpg",
            name: "Bubbles",
            species: "Yellow Tang",
            location: "Pacific Ocean",
            length: "8 inches",
            food: "Herbivore food"
        },
        {
            image: "https://freerangestock.com/sample/38688/clownfish-fish.jpg",
            name: "Nemo",
            species: "Clownfish",
            location: "Australia Gold Coast",
            length: "4 inches",
            food: "Algae, zooplankton, worms"
        },
        {
            image: "https://www.shutterstock.com/image-photo/redspotted-blennny-orangespotted-blenny-blenniella-260nw-1022705608.jpg",
            name: "Benny",
            species: "Blennie",
            location: "Chesapeak Bay",
            length: "4 inches",
            food: "Mollusks and crustaceans"
        },
        {
            image: "https://images.pexels.com/photos/6949171/pexels-photo-6949171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Dory 2",
            species: "Blue Tang",
            location: "Atlantic Ocean",
            length: "5-10 inches",
            food: "Marine plants and detritus"
        },
        {
            image: "https://cdn.reefs.com/blog/wp-content/uploads/2020/06/Yellow-Tang-reefs.jpg",
            name: "Bubbles 2",
            species: "Yellow Tang",
            location: "Pacific Ocean",
            length: "8 inches",
            food: "Herbivore food"
        },
        {
            image: "https://freerangestock.com/sample/38688/clownfish-fish.jpg",
            name: "Nemo 2",
            species: "Clownfish",
            location: "Australia Gold Coast",
            length: "4 inches",
            food: "Algae, zooplankton, worms"
        },
        {
            image: "https://www.shutterstock.com/image-photo/redspotted-blennny-orangespotted-blenny-blenniella-260nw-1022705608.jpg",
            name: "Benny 2",
            species: "Blennie",
            location: "Chesapeak Bay",
            length: "4 inches",
            food: "Mollusks and crustaceans"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}