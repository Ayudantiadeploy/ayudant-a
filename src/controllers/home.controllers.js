export const homeController = (req, res) =>{
    const animales = [
        {nombre: "Perro", raza: "caniche"},
        {nombre: "Gato", raza: "siames"},
        {nombre: "Pajaro", raza: "loro"},
        {nombre: "Pez", raza: "dorado"},
    ]
    try {
        res.status(200).json({
            code:200,
            message: "animales obtenidos con éxito",
            data: animales
            
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
}