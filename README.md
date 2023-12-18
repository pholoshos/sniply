# sniply
1. Install Sniply-cli: `npm i -g sniply-cli`
2. Create Sniply-ci project  `sniply-cli create <ProjectName>`

Sniply is a powerful and intuitive framework built on the Svelte framework, designed to empower users to create web application.
## Features

- **Svelte-Powered:** Built on the robust and reactive Svelte framework, ensuring high performance and a delightful development experience.
  
- **Drag-and-Drop Interface:** Easily design and arrange components with a user-friendly drag-and-drop interface, making application creation a breeze.

- **Extensive Component Library:** Choose from a rich library of pre-built components to add functionality to your application, from UI elements to advanced data processing.

- **Real-Time Preview:** Instantly see the changes you make in real-time, allowing for quick iterations and a more efficient development process.


## Components

### Jabulane DB Integration

sniply makes use of Jabulane DB, a lightweight and fast NoSQL database, for storing the application context. This allows users to persistently store and retrieve data within their applications.

To integrate Jabulane DB into your components, follow these steps:

1. Install Jabulane DB: `npm install jabulane-db`

2. Import Jabulane DB into your Svelte components:

   ```javascript
   import jabulane from 'jabulane-db';
