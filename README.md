# react-vite-project

This template should help get you started developing with React in Vite.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Launches Jest testing

```sh
npm run test
```

### Install And Run The Project Using Docker
1. Install Docker: https://docs.docker.com/engine/installation/

2. Check Dockerfile In The Root Directory To Uderstand It You Can Check This Article: https://javascript.plainenglish.io/step-by-step-guide-to-dockerize-react-app-created-using-vite-90772423f7fb

3. Build The Docker Image
```sh
docker build -t react-vite-image .
```

4. Run the Docker Container
```sh
docker run -d --rm -p 8080:8080 --name react-vite-container react-vite-image
```

5. Finnaly Open the App in the Browser: http://localhost:8080
