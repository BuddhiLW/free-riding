package main

import (
	"fmt"
	"log"
	"os/exec"

	"github.com/fasthttp/router"
	"github.com/valyala/fasthttp"
)

func Lynx(ctx *fasthttp.RequestCtx) {
	var url string = ctx.UserValue("url").(string)
	cmd := exec.Command("lynx", "--dump", url)
	stdout, err := cmd.Output()

	if err != nil {
		log.Fatal(err)
		return
	}
	fmt.Fprintf(ctx, "%s\n", stdout)
}

func main() {
	r := router.New()
	r.GET("/free-riding/{url}", Lynx)
	log.Fatal(fasthttp.ListenAndServe(":8080", r.Handler))
}
