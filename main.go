package main

import (
	"net/http"
	"os"
	"strconv"
	"strings"

	"github.com/dreamscached/minequery/v2"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

var (
	ServerPort             = os.Getenv("SERVER_PORT")
	CORS_ALLOW_ORIGIN      = os.Getenv("CORS_ALLOW_ORIGIN")
	MinecraftServerFqdn    = os.Getenv("MINECRAFT_SERVER_FQDN")
	MinecraftServerAddress = os.Getenv("MINECRAFT_SERVER_ADDRESS")
	MinecraftServerPort, _ = strconv.Atoi(os.Getenv("MINECRAFT_SERVER_PORT"))
)

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: strings.Split(CORS_ALLOW_ORIGIN, ","),
		AllowMethods: []string{http.MethodGet},
	}))
	e.GET("/api/summary", summary)
	e.GET("/api/network/ping", network)
	e.GET("/api/local/query", query)

	e.Logger.Fatal(e.Start(":" + ServerPort))
}

type Summary struct {
	Online bool
	State  State
	FQDN   string
	Ping   any
	Query  any
}

type State struct {
	Server  bool
	Network bool
}

func summary(c echo.Context) error {
	network := false
	server := false

	ping, err := minequery.Ping17(MinecraftServerFqdn, MinecraftServerPort)

	if err == nil {
		network = true
	}

	query, err := minequery.QueryFull(MinecraftServerAddress, MinecraftServerPort)

	if err == nil {
		server = true
	}

	smmry := &Summary{
		Online: network && server,
		State: State{
			Server:  server,
			Network: network,
		},
		FQDN:  MinecraftServerFqdn,
		Ping:  ping,
		Query: query,
	}

	return c.JSON(http.StatusOK, smmry)
}

type Network struct {
	Result bool
	FQDN   string
}

func network(c echo.Context) error {
	_, err := minequery.Ping17(MinecraftServerFqdn, MinecraftServerPort)

	if err != nil {
		return c.JSON(http.StatusOK, &Network{
			Result: false,
			FQDN:   MinecraftServerFqdn,
		})
	}

	return c.JSON(http.StatusOK, &Network{
		Result: true,
		FQDN:   MinecraftServerFqdn,
	})
}

func query(c echo.Context) error {
	res, err := minequery.QueryFull(MinecraftServerAddress, MinecraftServerPort)

	if err != nil {
		return c.JSON(http.StatusOK, err)
	}

	return c.JSON(http.StatusOK, res)
}
