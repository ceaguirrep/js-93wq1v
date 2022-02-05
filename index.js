var respuesta_ws = {"Error_spcCode":null,"Error_spcMessage":null,"listOfOrderSpaceSchedule":{"ordersSpaceSchedule":[{"OfferType":null,"Priority":"Grupo 3","nameClient":"YAMARIS MURCIA BELTRAN","numberDocument":"1032147952","documentType":"CC","orderId":"1-1391188685937","ofertNumber":"1-HR3FGJHI","orderRevision":"1","ofertRevision":"1","state":"En Proceso","priorityOrderGTC":"Normal","reqDocClient":"N","valueClient":null,"Proceso":"Aprovisionamiento","SistemaOrigen":"POE","listOfProductsSpaceSchedule":{"productsSpaceSchedule":[{"ProvisionerStatus":"Aceptada","requiredSchedule":"Y","nameProduct":"Telefonía","planCommercial":"Plan To Ilimitado 1.0","useService":"Residencial","technology":"GPON","dateFinalSchedule":"2022-01-28","dateInitialSchedule":"2022-01-28","finalHourSchedule":"11:59 AM","initialHourSchedule":"07:00 AM","unitTime":"Hora","groupSchedule":"612180812","timeSlot":"Maana\n00ñ000","tmap":"18","uenCalculated":"Hogares","equipmentAmount":"0","transaction":"NA Nuevo","changeTechnology":"N","integrationId":"1-HR3G1UAM","rowId":"1-HR3PTO51","listOfDirectionService":{"directionService":[{"country":"Colombia","departmentDirectionService":"Antioquia","cityDirectionService":"Sabaneta","neighborhoodDirectionService":"A.S.D.","nameDirectionService":"CL 70 SUR # 38 - 341 IN 134","chainNatural":"CL 70 SUR # 38 - 341 IN 134","referenceDirectionService":null,"rural":"Urbana","stateGIS":"Y","idDirectionService":"1428754683","coordinateXDirectionService":"6.149823","coordinateYDirectionService":"-75.614182","codeAddressService":"67000000S0CL07003800000000003410000000000000000IN   134000000000000000000000000","communeAddressService":null,"alterDirection":null}]},"listOfContacts":{"contacts":[{"nameContact":"XIMENA DURAN CARDONA","phoneContact":"6047789897","cellPhoneNumber":"3107471778 - 3025134457"}]},"listOfAttributes":{"attributes":[{"value":"NA","name":"NA"}]}},{"ProvisionerStatus":"Aceptada","requiredSchedule":"Y","nameProduct":"Televisión Hogares","planCommercial":"Clásica HD","useService":"Residencial","technology":"GPON","dateFinalSchedule":"2022-01-28","dateInitialSchedule":"2022-01-28","finalHourSchedule":"11:59 AM","initialHourSchedule":"07:00 AM","unitTime":"Hora","groupSchedule":"612180812","timeSlot":"Maana\n00ñ000","tmap":"18","uenCalculated":"Hogares","equipmentAmount":"0","transaction":"NA Nuevo","changeTechnology":"N","integrationId":"1-HR3G3UZP","rowId":"1-HR3PTO5X","listOfDirectionService":{"directionService":[{"country":"Colombia","departmentDirectionService":"Antioquia","cityDirectionService":"Sabaneta","neighborhoodDirectionService":"A.S.D.","nameDirectionService":"CL 70 SUR # 38 - 341 IN 134","chainNatural":"CL 70 SUR # 38 - 341 IN 134","referenceDirectionService":null,"rural":"Urbana","stateGIS":"Y","idDirectionService":"1428754683","coordinateXDirectionService":"6.149823","coordinateYDirectionService":"-75.614182","codeAddressService":"67000000S0CL07003800000000003410000000000000000IN   134000000000000000000000000","communeAddressService":null,"alterDirection":null}]},"listOfContacts":{"contacts":[{"nameContact":"XIMENA DURAN CARDONA","phoneContact":"6047789897","cellPhoneNumber":"3107471778 - 3025134457"}]},"listOfAttributes":{"attributes":[{"value":"NA","name":"NA"}]}},{"ProvisionerStatus":"Aceptada","requiredSchedule":"Y","nameProduct":"Internet","planCommercial":"Internet 60MB","useService":"Residencial","technology":"GPON","dateFinalSchedule":"2022-01-28","dateInitialSchedule":"2022-01-28","finalHourSchedule":"11:59 AM","initialHourSchedule":"07:00 AM","unitTime":"Hora","groupSchedule":"612180812","timeSlot":"Maana\n00ñ000","tmap":"18","uenCalculated":"Hogares","equipmentAmount":"0","transaction":"NA Nuevo","changeTechnology":"N","integrationId":"1-HR3G6QVR","rowId":"1-HR3PTO6D","listOfDirectionService":{"directionService":[{"country":"Colombia","departmentDirectionService":"Antioquia","cityDirectionService":"Sabaneta","neighborhoodDirectionService":"A.S.D.","nameDirectionService":"CL 70 SUR # 38 - 341 IN 134","chainNatural":"CL 70 SUR # 38 - 341 IN 134","referenceDirectionService":null,"rural":"Urbana","stateGIS":"Y","idDirectionService":"1428754683","coordinateXDirectionService":"6.149823","coordinateYDirectionService":"-75.614182","codeAddressService":"67000000S0CL07003800000000003410000000000000000IN   134000000000000000000000000","communeAddressService":null,"alterDirection":null}]},"listOfContacts":{"contacts":[{"nameContact":"XIMENA DURAN CARDONA","phoneContact":"6047789897","cellPhoneNumber":"3107471778 - 3025134457"}]},"listOfAttributes":{"attributes":[{"value":"NA","name":"NA"}]}}]}}]}}


var json_entrada = {
  "requestSpaceSchedule": {
      "headerMessage": {
          "idOrder": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].orderId,
          "nameChannel": "IVR"
      },
      "detailMessage": {
          "idClient": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].numberDocument,
          "nameClient": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].nameClient,
          "priorityAttention": "Normal",
          "valueClient": null,
          "isNewSchedule":"S",
          "products": {
              "product": [
                  {
                      "contacts": {
                          "contact": [
                              {
                                  "nameContact": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfContacts.contacts[0].nameContact,
                                  "phoneContact": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfContacts.contacts[0].phoneContact,
                                  "cellPhoneNumber": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfContacts.contacts[0].cellPhoneNumber
                              }
                          ]
                      },
                      "use": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].useService,
                      "uenCalculated": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].uenCalculated,
                      "nameProduct": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].nameProduct,
                      "namePlan": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].planCommercial,
                      "transaction": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].transaction,
                      "addressService": {
                          "idAddressService": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfDirectionService.directionService[0].idDirectionService,
                          "nomenclatureAddressService": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfDirectionService.directionService[0].nameDirectionService,
                          "cityAdressService": "05631000",
                          "departamentAdressService": "05",
                          "neighborhoodAdressService": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfDirectionService.directionService[0].neighborhoodDirectionService,
                          "referenceAdressService": null,
                          "coordinateXAdressService": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfDirectionService.directionService[0].coordinateXDirectionService,
                          "coordinateYAdressService": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfDirectionService.directionService[0].coordinateYDirectionService,
                          "stateGIS": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfDirectionService.directionService[0].stateGIS,
                          "rural": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfDirectionService.directionService[0].rural,
                          "chainNatural": respuesta_ws.listOfOrderSpaceSchedule.ordersSpaceSchedule[0].listOfProductsSpaceSchedule.productsSpaceSchedule[0].listOfDirectionService.directionService[0].chainNatural
                      },
                      "technology": "GPON",
                      "attributes": {
                          "attribute": [
                              {
                                  "name": "NA",
                                  "value": "NA"
                              }
                          ]
                      }
                  }
              ]
          }
      }
  }
};


console.log(json_entrada)

