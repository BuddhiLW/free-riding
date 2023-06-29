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
	ctx.Response.Header.Set("Access-Control-Allow-Origin", "*")
	var urlstring string = ctx.UserValue("url").(string)
	urlparsed, err := url.QueryUnescape(urlstring)

	if err != nil {
		log.Fatal(err)
		return
	}

	// urlparsedstring := urlparsed.string()
	fmt.Fprintf(ctx, "URL: %s\n", urlparsed)

	cmd := exec.Command("lynx", "--dump", urlparsed)
	stdout, err := cmd.Output()

	if err != nil {
		log.Fatal(err)
		return
	}

	// ctx.Response.Header.Set("X-My-Header", "my-header-value")
	ctx.SetContentType("text/plain; charset=utf8")
	// ctx.Response.StatusCode()
	ctx.Response.SetBody(stdout)
	// ctx.Response.SetBody(stdout)
	// fmt.Fprintf(ctx, "%s\n", stdout)
}

func main() {
	r := router.New()
	r.GET("/free-riding/{url:*}", Lynx)
	log.Fatal(fasthttp.ListenAndServe(":8080", r.Handler))
}
