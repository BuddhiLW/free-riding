package main

import (
	"fmt"
	"log"
	"net/url"
	"os/exec"

	"github.com/fasthttp/router"
	"github.com/valyala/fasthttp"
)

func Lynx(ctx *fasthttp.RequestCtx) {
	var urlstring string = ctx.UserValue("url").(string)
	urlparsed, err := url.Parse(urlstring)
	urlparsedstring := urlparsed.String()
	fmt.Fprintf(ctx, "URL: %s\n", urlparsedstring)

	cmd := exec.Command("lynx", "--dump", urlparsedstring)
	stdout, err := cmd.Output()

	if err != nil {
		log.Fatal(err)
		return
	}
	fmt.Fprintf(ctx, "%s\n", stdout)
}

func main() {
	r := router.New()
	r.GET("/free-riding/{url:*}", Lynx)
	log.Fatal(fasthttp.ListenAndServe(":8080", r.Handler))
}
