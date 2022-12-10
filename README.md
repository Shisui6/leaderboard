<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

<details>
  <summary>📗 Table of Contents</summary>
  <ul>
    <li><a href="#-meal-app-">📖 Leaderboard</a></li>
    <li><a href="#-built-with-">🛠 Built With</a></li>
    <li><a href="#-live-demo-">🚀 Live Demo </a></li>
    <li><a href="#-getting-started-">💻 Getting Started</a></li>
    <li><a href="#-authors-">👥 Authors </a></li>
    <li><a href="#-future-features-">🔭 Future Features</a></li>
    <li><a href="#-contributing-">🤝 Contributing</a></li>
    <li><a href="#️-show-your-support-">⭐️ Show your support </a></li>
    <li><a href="#-acknowledgments-">🙏 Acknowledgments </a></li>
    <li><a href="#-license-">📝 License</a></li>
  </ul>
</details>

<br>

<!-- PROJECT DESCRIPTION -->

# 📖 Leaderboard <a name="about-project"></a>

**Leaderboard** is a web application that displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.

![image](https://user-images.githubusercontent.com/37116322/202613459-5c5b308d-320c-49d5-a8bf-170745cc8dc8.png)

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="#">HTML</a></li>
    <li><a href="#">CSS</a></li>
    <li><a href="#">JavaScript</a></li>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

- Fetches and displays user scores from the external leaderboard API service
- Displays loading screens to the user during fetch
- Allows users to submit scores to the API through a form
- Responsive design which adapts to most screen sizes

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://shisui6.github.io/leaderboard)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:

```sh
 git
 npm
 node
 Your favorite text editor
```

### Setup

Clone this repository to your desired folder:

```sh
  git clone https://github.com/Shisui6/leaderboard.git
```

### Install

Install this project with:

```sh
  cd leaderboard
  npm install
```

### Usage

To run the project, execute the following command:

```sh
  npm run build - Builds development files into production code
  npm start - Starts the development server
```

### Deployment

You can deploy this project using:

```sh
  npm run deploy - Deploys using gh-pages
```

### API Instructions

Instructions to setup Involvement API key are as follows:

```sh
- Create a new game with the name of your choice on your command line using `curl -X POST -d 'name=nameOfGame' https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/`
- Add the returned API key to a .env file in your root directory using API_KEY=returnedApiKey
- Note: make sure to replace nameOfGame and returnedApiKey with the name of the game you want to create and your API key
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Shisui**

- GitHub: [@Shisui6](https://github.com/Shisui6)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/okemdi-udeh-1b472615a/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

If you like this project please leave a star🤩

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>

- [Microverse](https://www.microverse.org/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
