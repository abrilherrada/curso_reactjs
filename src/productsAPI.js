const products = [
    {id: 1, title:"El túnel", author: "Ernesto Sabato", price: 2000, description:"Juan Pablo Castel es un pintor recluido en prisión por el asesinato de María Iribarne. Durante su encierro rememora la cadena de acontecimientos que le llevaron a perder el control, a convertirse en un hombre con el interior oscuro, un hombre poseído por una insalvable soledad, la de la ausencia de la mujer amada hasta el límite, la del engaño que ha convertido su corazón en un pedazo duro y frío de hielo y ha colocado entre sus manos el cuchillo que pone fin al sufrimiento.", stock: 10, pictureURL: "https://quelibroleo.com/images/libros/libro_1321924616.jpg"},
    {id: 2, title:"El envío", author: "Sebastian Fitzek", price: 3400, description:"Desde que fue violada en una habitación de hotel; la joven psiquiatra Emma Stein no abandona su casa. Es la tercera víctima de un psicópata a quien la prensa llama el Peluquero por su hábito de cortar los cabellos de aquellas a quienes ataca antes de asesinarlas. Emma; la única que escapó con vida; está completamente paranoica. Dado que no pudo verle la cara a su agresor; cree reconocerlo en todos los hombres con los que se cruza. Solo se siente a salvo en su pequeña casa berlinesa; situada en los límites del bosque de Grunewald...; hasta que un día el cartero le entrega un paquete destinado a su vecino; cuyo nombre Emma desconoce pese a llevar años viviendo en la misma calle. Cuando acepta el paquete; no puede imaginar que su peor pesadilla no ha hecho más que empezar.", stock: 15, pictureURL: "https://quelibroleo.com/images/libros/9/978/978846/9788466662307.jpg"},
    {id: 3, title:"Los peligros de fumar en la cama", author: "Mariana Enriquez", price: 2200, description:"¿Qué hay detrás de la oscuridad más densa? ¿Qué es lo que palpita en el espasmo del miedo? En los cuentos de Los peligros de fumar en la cama, el terror roza lo cruel para hacer pie en el grito mudo de la pesadilla, en las piernas que no responden a la huida. Ahí, en donde la mayoría de los que cuentan eligen el silencio y prenden la luz para ahuyentar las sombras, los relatos de Mariana Enriquez –como una escena de El resplandor loopeada hasta el paroxismo– toman prestadas voces bien disímiles, siempre al borde del delirio, para darle forma a una de las propuestas narrativas más contundentes y extremas de la literatura argentina.", stock: 7, pictureURL: "https://quelibroleo.com/images/libros/libro-1487322487.jpg"},
    {id: 4, title:"El perfume", author: "Patrick Süskind", price: 2500, description:"Uno de los grandes fenómenos editoriales a escala mundial ahora llevado al cine. Para conseguir el favor de las damas y el dominio de los poderosos, Baptiste elabora un raro perfume que subyuga la voluntad de quien lo huele. La esencia proviene de los fluidos de jovencitas vírgenes y para conseguirla deberá convertirse en un asesino...", stock: 12, pictureURL: "https://quelibroleo.com/images/libros/libro_1322012163.jpg"}
]
const productsAPI = new Promise ((resolve, reject) => {
    if (products !== []) {
        setTimeout(() => {
            resolve(products)
        }, 2000);
    }
    else {
        reject("404 not found")
    }
})

export default productsAPI