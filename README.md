# Shmdoc PoC frontend

This repository is the frontend for the [shmdoc project](https://github.com/shmdoc/app-shmdoc-osoc-poc)

## Installation

Add the following snippet to your `docker-compose.yml` to include the file service in your project:
```yaml
frontend:
    image: shmdoc/frontend-shmdoc-osoc-poc
    links:
      - identifier:backend
```
Now you will be able to acces the frontend on port 80


A complete `docker-compose.yml` and `dispatcher.ex` file for running the entire shmdoc stack, can be found at the [app-shmdoc-osoc-poc repo](https://github.com/shmdoc/app-shmdoc-osoc-poc#shmdoc-poc-application).

## Development environment

When developing the frontend you want to add: 
```yaml
services:
  frontend:
    entrypoint: "echo 'service disabled'"
    restart: "no"
```
to your `docker-compose.dev.yml` file, to run the backend use: 
```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```
to run the frontend clone the repository:
```bash
git clone https://github.com/shmdoc/frontend-shmdoc-osoc-poc.git
```
install [vue](https://vuejs.org/):
```bash
npm install vue
```
install the node modules:
```bash
npm install
```
and run the the development server:
```bash
npm run serve
```
now the frontend is available on port 8080 and you can start developing.
