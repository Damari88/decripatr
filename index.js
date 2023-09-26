const express = require("express")
const app = express ();
const data = require("./data.js");


app.use(express.json())

app.use("/api/v2", rutasLibros);

app.get("/Libros", (req, res) => {
    res.status(200).send(data);

})
app.get("/Libros/:id", validar, (req, res) => {
    const idLibro = req.params.id;
    console.log(Libro);
    const dataLibro = data.find((item)=> item.id == idLibro); //3 ==3
    res.status(200).send(data);
})
app.get("/Libros/:id", validar,(req, res) => {
    const idLibro = req.params.id;
    console.log(Libro);
    const dataLibro = data.filter((item)=> item.id != idLibro); //3 ==3
    res.status(200).send("eliminar un objeto");
})
app.get("/Libros/genero/:genero", validar, (req, res) => {
    const idLibro = req.params.genero;
    console.log(genero);
    const dataLibro = data.filter((item)=> item.genero == generoLibro); //3 ==3
    res.status(200).send(dataLibro);
})



app.listen(process.env, PORT,() => {
    console.log(`http://localhost:${process.env, PORT}`);
  });
