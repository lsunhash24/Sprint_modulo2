
// se crea un arreglo llamado dataSet con la estructura de la tabla
    let dataSet = [
        ['101', 'Tarjeta gpu nvidia 9600', 'GPU', 'UN', '$820,800'],
        ['121', 'Tarjeta gpu nvidia 8200', 'GPU', 'UN', '$670,750'],
        ['123', 'Tarjeta gpu nvidia 7600', 'GPU', 'UN', '$486,000'],
        ['131', 'Memoria RAM 16 GB DDR5 KINGSTON', 'MEMORIA RAM', 'CJ', '$33,060'],
        ['133', 'Memoria RAM 16 GB DDR4 KINGSTON', 'MEMORIA RAM', 'UN', '$28,700'],
        ['145', 'Memoria RAM 8 GB DDR4 KINGSTON', 'MEMORIA RAM', 'CJ', '$22,000'],
        ['148', 'Placa madre Gigabyte DHTR5 DDR4', 'PLACA MADRE', 'BL', '$137,500'],
        ['151', 'Placa madre Gigabyte DHTR6 DDR4', 'PLACA MADRE', 'BL', '$227,900'],
        ['160', 'Procesador intel core i5', 'PROCESADOR', 'UN', '$205,500'],
        ['165', 'Procesador intel core i7', 'PROCESADOR', 'UN', '$103,600'],
        ['201', 'Tarjeta gpu GeForce RTX 3050', 'GPU', 'UN', '$320,800'],
        ['221', 'Tarjeta GeForce RTX 3050 Ti', 'GPU', 'UN', '$270,750'],
        ['223', 'GeForce RTX 3080 Ti', 'GPU', 'UN', '$386,000'],
        ['231', 'Memoria RAM 32 GB DDR5 KINGSTON', 'MEMORIA RAM', 'CJ', '$83,060'],
        ['233', 'Memoria RAM 32 GB DDR4 KINGSTON', 'MEMORIA RAM', 'UN', '$62,700'],
        ['245', 'Memoria RAM 64 GB DDR5', 'MEMORIA RAM', 'CJ', '$372,000'],
        ['248', 'Placa madre ASUS TXRTY55 DDR5', 'PLACA MADRE', 'BL', '$337,500'],
        ['251', 'Placa madre ASUS TXRTY75 DDR5', 'PLACA MADRE', 'BL', '$427,900'],
        ['260', 'Procesador AMD Ryzen5', 'PROCESADOR', 'UN', '$205,500'],
        ['265', 'Procesador AMD Ryzen7', 'PROCESADOR', 'UN', '$303,600'],
        
    ];

    // función de jquery que permite que el bloque se ejecute cuando 
    // la página este disponible. Es el equivalente a $(document).ready(function() {
    $(function () {

        // aplicación de estilos al título
        $( "h1" ).css({ background: "#ccc", color: "blue" });

        // se asigna propiedades de datatable a la tabla con id myTabla
        // creada en el html, se definen las columnas y se agregan los 
        // los registros a la data.
        $('#myTabla').DataTable({
            data: dataSet,
            columns: [
                { title: 'Código' },
                { title: 'Descripcón' },
                { title: 'Categoría' },
                { title: 'U.Medida' },
                { title: 'Precio Venta' },
            ],

            //Actualización de etiquetas de la tabla para mostrarlas en español
            "language": {
                "lengthMenu": "Mostrar_MENU_ registros por página.",
                "zeroRecords": "No se encontró registro.",
                "info": "  _START_ de _END_ (_TOTAL_registros totales).",
                "infoEmpty": "0 de 0 de 0 registros",
                "infoFiltered": "(Encontrado de _MAX_registros)",
                "search": "Buscar: ",
                "processing": "Procesando la información",
                "paginate": {
                    "first": " |< ",
                    "previous": "Ant.",
                    "next": "Sig.",
                    "last": " >| "
                }
            }    
        });
        clearInterval
    });