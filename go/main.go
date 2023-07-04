package main

import (
	"fmt"
	"net/url"
	"os/exec"

	"github.com/fasthttp/router"
	"github.com/valyala/fasthttp"
)

func Lynx(ctx *fasthttp.RequestCtx) {
	ctx.Response.Header.Set("Access-Control-Allow-Origin", "http://161.35.96.204:8080")
	var urlstring string = ctx.UserValue("url").(string)
	urlparsed, err := url.QueryUnescape(urlstring)

	if err != nil {
		message := []byte(fmt.Sprintf("Error: %s\n", err))
		ctx.Response.SetBody(message)
		ctx.Response.SetStatusCode(500)
	}

	fmt.Fprintf(ctx, "URL: %s\n", urlparsed)

	cmd := exec.Command("lynx", "--dump", "-assume_charset=utf-8", "--display_charset=utf-8", urlparsed)
	stdout, err := cmd.Output()

	if err != nil {
		message := []byte(fmt.Sprintf("Error: %s\n", err))
		ctx.Response.SetBody(message)
		ctx.Response.SetStatusCode(500)
	}

	// ctx.Response.Header.Set("X-My-Header", "my-header-value")
	ctx.SetContentType("text/plain; charset=utf8")
	ctx.Response.SetStatusCode(200)
	ctx.Response.SetBody(stdout)
	// ctx.Response.SetBody(stdout)
	// fmt.Fprintf(ctx, "%s\n", stdout)
}

func main() {
	r := router.New()
	r.GET("/free-riding/{url:*}", Lynx)
	// log.Fatal(fasthttp.ListenAndServe(":8080", r.Handler))
	fasthttp.ListenAndServe(":8181", r.Handler)
}
