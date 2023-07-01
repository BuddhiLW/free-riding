# Free riding (free reading)

- Use the `Lynx` super-powers to share text over the internet. [^1]
- Democratize access to information and news.

## Local build
### Front-end

Install JavaScript dependencies and run `shadow-cljs` (which will also fetch the ClojureScript dependencies). Finally, the application will be running on port 8000.

``` bash
yarn install 
yarn run shadow:watch
```

### Back-end

Run the `go` server!

``` bash
go run ./go/main.go
```

## Running with docker

### At the root directory:

- Build image:
``` bash
sudo docker build -t clojurescript-frontend .
```

- Run image:
``` bash
sudo docker run -dit --name my-running-frontend -p 8080:80 clojurescript-frontend
```

### At `./go` directory

``` bash
sudo docker build -t golang-backend .
```

``` bash
sudo docker run -it --rm --name my-running-backend -p 127.0.0.1:8181:8181 golang-backend
```

### Use the application

Go to `localhost:8080` and see the project running 🤓


## Resources
[^1]: [lynx.browser.org](lynx.browser.org) 
