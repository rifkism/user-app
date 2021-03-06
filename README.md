# React User App
A React app displaying data from https://randomuser.me/

### Features
- Search users
- Filter users by gender
- Pagination
- Sort users
- Shareable link with params (Filter, sort and search state will correspond to the query params of a pasted link)

### Prerequisites

Please install the following:

- Node 14.17.3 (LTS)
- NPM

### Installation

1. Clone the repo using one of the following:

   ```sh
   Using HTTPS
   git clone https://github.com/rifkism/user-app.git

   Using SSH
   git clone git@github.com:rifkism/user-app.git
   ```

2. Change directory into project folder
   ```sh
   cd user-app
   ```
3. Install NPM packages:
   ```sh
   npm install
   ```
4. Run the development server:
   ```JS
   npm start
   ```
   Now http://localhost:8080/user-app should be opened on your browser
5. To run tests with coverage, please run:
   ```JS
   npm run test:coverage
   ```
6. To deploy to Github, please run:
   ```sh
   npm run deploy
   ```
   
### Testing Coverage
<img width="1655" alt="image" src="https://user-images.githubusercontent.com/19601243/160293610-7da4bce9-45cb-4560-8ab0-d876f3da958f.png">

### Performance Optimzations Used

1. Use `React lazy` feature for lazy loading components
   <img width="1772" alt="image" src="https://user-images.githubusercontent.com/19601243/160287893-496d1b7b-3c19-4273-936d-2e4472773f24.png">
   <img width="876" alt="Screen Shot 2022-03-27 at 21 01 33" src="https://user-images.githubusercontent.com/19601243/160285258-f1fb9717-481a-47bf-84f1-fbc7b26da832.png">
