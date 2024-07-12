# Sip 'n' Play - A Board Game Paradise

Welcome to Sip 'n' Play, your ultimate destination for board game enthusiasts!

## Overview

Sip 'n' Play is a web platform designed using React and Tailwind CSS, dedicated to providing a vibrant and user-friendly experience for exploring and discovering board games.

### Key Features

- **Vast Collection**: Browse through a curated collection of over 500+ board games, ranging from classics to modern favorites.
  
- **User-Friendly Interface**: Easily navigate and explore games by category, genre, or popularity.
  
- **Detailed Game Information**: Access comprehensive details for each game, including rules, player count, and recommended age.
  
- **Community Features**: Connect with fellow board game enthusiasts, share your experiences, and discover new games together.

## Project Structure

```
public
│   assets
└───STC
    ├───components
    │       about.jsx
    │       Benefits.jsx
    │       Button.jsx
    │       Collaboration.jsx
    │       CompanyLogos.jsx
    │       Footer.jsx
    │       Generating.jsx
    │       Header.jsx
    │       Heading.jsx
    │       Hero.jsx
    │       Notification.jsx
    │       Pricing.jsx
    │       PricingList.jsx
    │       Roadmap.jsx
    │       Section.jsx
    │       Services.jsx
    │       Tagline.jsx
    ├───design
    └───constants
        └───Js
                index.js
App.jsx
index.css
maingoa
eslintrc.cjs
index.html
package-lock.json
package.json
postcss.config.js
tailwind.config.js
vite.config.js
```

## Technologies Used

- **React**: JavaScript library for building UI components.
  
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

## Getting Started

To explore the project:

1. Clone this repository.
   
2. Install dependencies with `npm install`.
   
3. Start the development server with `npm run dev`.

## Running on Another Device

To run the React application on another device (e.g., mobile device or another computer within the same network):

1. Ensure both devices are connected to the same network.

2. Find out your local IP address:
   - On Windows, open Command Prompt and type `ipconfig`. Look for the IPv4 Address under your active network connection.
   - On macOS or Linux, open Terminal and type `ifconfig`. Look for the inet address under your active network connection (usually under `en0` or `wlan0`).

3. In your `package.json`, modify the `start` script in the `scripts` section to include your IP address. For example:
   ```json
   "scripts": {
     "start": "react-scripts start --host YOUR_LOCAL_IP"
   }
   ```
   Replace `YOUR_LOCAL_IP` with your actual local IP address.

4. Save the `package.json` file.

5. Start the development server again with `npm start`.

6. On your other device, open a web browser and type in the IP address followed by the port number (default is usually 3000):
   ```
   http://YOUR_LOCAL_IP:3000
   ```
   This should load the React application on the other device.

## Adding Images


### About Section

![About Image](https://github.com/Priyank911/Sip-Play/blob/main/About.png)

### Reservation Section

![Reservation Image](https://github.com/Priyank911/Sip-Play/blob/main/Reservation.png)

### Event Section

![Event Image](https://github.com/Priyank911/Sip-Play/blob/main/Events.png)

### Board Games List Section

![Board Games List Image](https://github.com/Priyank911/Sip-Play/blob/main/Boardgames.png)

Replace `about.jpg`, `reservation.jpg`, `event.jpg`, and `board_games_list.jpg` with the actual filenames of your images. Ensure these images are placed in the corresponding directory (`public/assets/` in this case).

## Contributing

This project is a work in progress. Contributions and feedback are welcome! Feel free to fork the repository, make improvements, and submit pull requests.

Join the fun and start playing today!

---
