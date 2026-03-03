Feature: Flujo de compra en Demoblaze

  @smoke @purchase @e2e
  Scenario: Compra exitosa de un producto
    Given que el usuario ingresa a la pagina de Demoblaze
    When agrega dos producto al carrito
    And visualiza el carrito
    And realiza el pedido
    And completa el formulario de compra con datos validos
    And finaliza la compra
    Then se muestra un mensaje de confirmacion
