
///------------ GUARDAR / EDITAR--------------/
// $("#btnGuardarProducto").click(function () {
//     selectMarcaProducto();
//     var producto =[];
//     var deposito =[];
//     /* array add producto */
//     var nomalmcc = $('select[name="selectalmacen"] option:selected').text();
//     var nomalmc = nomalmcc.split('-');
//     producto.push({ 
//         editProd: $(this).attr("editarProd"),
//         ingresarImagen: $("#ingresarImagen").val(),
//         idimagen: $("#idImagen").val(),
//         idalmacen: $("#addAlmacenProd").val(),
//         nombreAlm: nomalmc[0],
//         idProd: $("#idproducto").val(),
//         nombreProd: $("#nombreProd").val(),
//         idcategory: $("#addCatProd").val(),
//         cantidad: $("#idCantProd").val(),
//         condicion: $("#addCondicion").val(),
//         idunidad: $("#idUnidadMed").val(),
//         unidadmed: $("#unimedidaProd").val(),
//         abrevSunat: $("#abrevSunat").val(),
//         fechaingreso: $("#datetimeStart").val(),
//         fechavenci: $("#datetimeEnd").val(),
//         idmarca: $("#idMarcaProd").val(),
//         nombremarca: $("#addMarcaProd").val(),
//         descrip: $("#addProdDescrip").val(),
//     });

//     deposito.push({
//         deposito: $("#depositoSI").val(),
//         id: $("#idaddDeposito").val(),
//         nombre: $("#idNombreDp").val(),
//         tipo: $("#idTipoDep").val(),
//         cantActual: $("#idCantactDep").val(),
//         capaciMax: $("#idCantmaxDep").val(),
//         descrip: $("#idDescripDep").val(),
//     });

//     var image = document.getElementById('cargarImg').files;
//     var imageFile = $('#cargarImg').val();
//     var files = $("#cargarImg")[0].files[0];
//     if(image.length ==0 && imageFile==""){
//         files="0";
//     }

//     if (producto[0]['idalmacen'] < "1"){alertify.error('Seleccione un Almacén');
//     }else if (producto[0]['nombreProd'] == "") {alertify.error('Ingresa un nombre');
//     } else if (producto[0]['idcategory'] == "" || producto[0]['idcategory'] < "1"){ alertify.error('Seleccione una categoria');
//     } else if (producto[0]['cantidad'] == "" || producto[0]['cantidad'] < 1){alertify.error('Ingresa cantidad');
//     } else if (producto[0]['unidadmed'] == ""){alertify.error('Ingresa unidad medida');
//     } else if (producto[0]['fechaingreso'] == "") {alertify.error('Ingresa una fecha');
//     } else if (producto[0]['nombremarca'] == "") {alertify.error('Ingresa una marca');
//     }else{
//         if (deposito[0]['deposito'] == 'SI' && deposito[0]['nombre'] == '' && deposito[0]['cantActual'] == '' && deposito[0]['capaciMax'] == ''){
//             alertify.error('Completa todos los campos requeridos');
//         }else{
//             var formProd = new FormData();
//             formProd.append('addProducts', JSON.stringify(producto[0]));
//             formProd.append('imageFile', files);
//             formProd.append('addidDeposit', JSON.stringify(deposito[0]));
//             $.ajax({
//                 contentType: false,
//                 data: formProd,
//                 enctype: 'multipart/form-data',
//                 processData: false,
//                 method: "POST",
//                 url: "app/src/ajax/almacen/producto.ajax.php",
//                 success: function (respuesta) {
//                     $("#smsconfirmations").html(respuesta);//ingresa mensaje en html
//                     document.getElementById("imgProducto").innerHTML = "";//limpiar imput imagen
//                 }
//             });
//         }
//     }
// });
