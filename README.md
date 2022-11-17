# Leaderboard

> The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.

## Built With

- HTML
- CSS
- Javascript
- Webpack
  
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Use `git clone` to clone the repository using the HTTPS link into your local machine

### Setup

- `cd` into your local repository

### Install

- `npm install` - Installs the necessary dependencies

### Usage

- `npm run build` - Builds development files into production code
- `npm start` - Starts the development server

### API Instructions

Instructions to setup API key are as follows:

- Create a new game with the name of your choice on your command line using ` curl -X POST -d 'name=nameOfGame' https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ `
- Add the returned API key to a `.env` file in your root directory using `API_KEY=returnedApiKey`
- Note: make sure to replace `nameOfGame` and `returnedApiKey` with the name of the game you want to create and your API key

### Deployment

- [Live Demo Link](https://shisui6.github.io/leaderboard)

## Authors

👤 **Shisui**

- GitHub: [@Shisui6](https://github.com/Shisui6)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/okemdi-udeh-1b472615a/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- [Microverse](https://www.microverse.org/)

## 📝 License

This project is [MIT](./LICENSE) licensed.
