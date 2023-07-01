
# # Start from a Debian image with the latest version of Go installed
# # and a workspace (GOPATH) configured at /go.
# FROM golang

# # Copy the local package files to the container's workspace.
# ADD ./ /go/pkg/mod/github.com/BuddhiLW/free-riding/

# # Build the outyet command inside the container.
# # (You may fetch or manage dependencies here,
# # either manually or with a tool like "godep".)
# RUN go install github.com/BuddhiLW/free-riding/

# # Run the outyet command by default when the container starts.
# ENTRYPOINT /go/bin/free-riding

# # Document that the service listens on port 8080.
# EXPOSE 8181

FROM golang:bookworm
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    rm -rf /var/lib/apt/lists/*
RUN add-apt-repository "deb http://archive.ubuntu.com/ubuntu jammy main universe restricted multiverse"
RUN apt-get update
RUN apt-get install -y lynx

# FROM golang:1.20

WORKDIR /usr/src/app

# pre-copy/cache go.mod for pre-downloading dependencies and only redownloading them in subsequent builds if they change
COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . .
RUN go build -v -o /usr/local/bin/app ./...

CMD ["app"]
