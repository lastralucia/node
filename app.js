const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || "3000";

const movies = [
    {
        name: "Escape Room",
        code:1,
        year:2019,
        genre:["Thriller psicológico, terror y terror psicológico"],
        director:"Adam Robitel",
        espectadores:10000
    },
    {
        name: "No manches frida",
        code:2,
        year:2016,
        genre:["Comedia"],
        director:"Nacho G. Velilla",
        views:12000
    },
    {
        name: "Milagro en la celda 7",
        code:3,
        year:2019,
        genre:["Drama"],
        director:"Mehmet Ada Öztekin",
        espectadores:16000
    },
    {
        name: "Charlie y la fábrica de chocolate",
        code:4,
        year:2005,
        genre:["infantil/fantasia"],
        director:"Tim Burton",
        espectadores:1865
    },
    {
        name: "Enola Holmes",
        code:5,
        year:2020,
        genre:["Aventura","Misterio"],
        director:"Harry Bradbeer",
        espectadores:13000
    },
    {
        name: "El Quinto Elemento",
        code:6,
        year:1997,
        genre:["Ciencia ficción, Acción y Comedia"],
        director:"Luc Besson",
        espectadores:14200
    },
    {
        name: "Lucy",
        code:7,
        year:2014,
        genre:["Acción, Ciencia ficción"],
        director:"Luc Besson",
        espectadores:46000
    },
    {
        name: "Los Ilusionistas",
        code:8,
        year:2013,
        genre:["Suspenso"],
        director:"Louis Leterrier",
        espectadores:12000
    },
    {
        name: "Los Ilusionistas 2 Nada es lo que parece",
        code:9,
        year:2016,
        genre:["Suspenso"],
        director:"Louis Leterrier",
        espectadores:10000
    },
    {
        name: "American Pie Presents: Girls' Rules",
        code:10,
        year:2020,
        genre:["Comedia"],
        director:"Mike Elliott",
        espectadores:14000
    }
];

app.get("/", function(req,res)
{
    res.send(movies);
});

app.get("/movies/:code",function(req,res)
{
    let a = req.params.code;
    res.send(movies.find(e=>e.code==a));
});

app.get("/movies", function(req,res)
{
    res.send(movies.sort(function(x,y)
    {
        return y.views-x.views;
    }));
});

app.listen(port, function()
{
    console.log("El servidor esta funcionando en el puerto 3000");
})