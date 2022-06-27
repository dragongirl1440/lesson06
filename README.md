# lesson06 Tinder Clone v1

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes

Array is still present because Axios fails to apply card data submitted via POST and GET requests.  This project can still process POST and GET requests, they simply cannot reach the frontend and stay in the backend.  The JSON array I used during testing was the following:

[
        {
            "name": "Shadow the Hedgehog",
            "url": "https://i.pinimg.com/originals/52/87/10/5287104b52cd3925c96ba6bfe12d0416.jpg",
            "alt": "profile picture of shadow the hedgehog"
        },

        {
            "name": "Flynn Rider",
            "url": "https://media.discordapp.net/attachments/802616961313406986/989243101681950821/IMG_7818.jpg",
            "alt": "profile picture of flynn rider"
        }
]

## Available Scripts

In Tinder-Clone-V1, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

In Tinder-Backend you can run:

### `nodemon server.js`

Starts the backend on port: 8001 using nodemon.  Needs Express, MongoDB, and Axios.

## Known Issues

Axios is non functional, const instance is never used, and variable data returns undefined.

All buttons are non-functional.  Swiping is the only method of interaction.

Cards can only process absolute urls.  Any relative urls pointing to images result in broken images.  Discord is temporarily being used to host custom requested images by family and friends for the Tinder Clone.

## Characters

I do not own any of the images, characters, or people whose likenesses were used in this project.  They are included for educational and entertainment purposes only.

## Please enjoy my little project!
