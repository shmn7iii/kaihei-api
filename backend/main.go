package main

import (
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/dreamscached/minequery/v2"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
)

var (
	ServerPort             = os.Getenv("SERVER_PORT")
	MinecraftServerHost    = os.Getenv("MINECRAFT_SERVER_HOST")
	MinecraftServerPort, _ = strconv.Atoi(os.Getenv("MINECRAFT_SERVER_PORT"))
)

func main() {
	e := echo.New()

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"https://kaihei.shmn7iii.net", "http://localhost:1993"},
		AllowMethods: []string{http.MethodGet},
	}))
	e.GET("/api/status", status)

	e.Logger.Fatal(e.Start(":" + ServerPort))
}

func status(c echo.Context) error {
	pinger := minequery.NewPinger(
		minequery.WithTimeout(3 * time.Second),
	)
	res, err := pinger.QueryFull(MinecraftServerHost, MinecraftServerPort)

	if err != nil {
		return c.JSON(http.StatusInternalServerError, err)
	}

	return c.JSON(http.StatusOK, res)
}
