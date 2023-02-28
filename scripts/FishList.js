// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    // Start building a string filled with HTML syntax
    let htmlString = ''

    // Create HTML representations of each fish here
    for (const fish of fishes) {

        // Why is there a backtick used for this string?
        htmlString += `<section class="fishContent">
            <div><img  class="fishPic image--card" src="${fish.image}" />\n</div>
            <ul>
                <div><li>Name: ${fish.name}</li></div>
                <div><li>Species: ${fish.species}</li></div>
                <div><li>Length: ${fish.length}</li></div>
                <div><li>Harvesting Location: ${fish.location}</li></div>
                <div><li>Diet: ${fish.food}</li></div>
            </ul>
        </section>
`
    }


    return htmlString
}