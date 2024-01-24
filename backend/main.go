package main

import (
	"net/http"
	"os"
	"strconv"

	"github.com/dreamscached/minequery/v2"
	"github.com/labstack/echo"
)

var (
	ServerPort             = os.Getenv("SERVER_PORT")
	MinecraftServerHost    = os.Getenv("MINECRAFT_SERVER_HOST")
	MinecraftServerPort, _ = strconv.Atoi(os.Getenv("MINECRAFT_SERVER_PORT"))
)

func main() {
	e := echo.New()
	e.GET("/api/status", status)

	e.Logger.Fatal(e.Start(":" + ServerPort))
}

func status(c echo.Context) error {
	res, err := minequery.QueryFull(MinecraftServerHost, MinecraftServerPort)
	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, res)
}
