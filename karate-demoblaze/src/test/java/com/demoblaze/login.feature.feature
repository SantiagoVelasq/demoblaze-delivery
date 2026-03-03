Feature: Login API Demoblaze

Background:
    * url 'https://api.demoblaze.com'

Scenario: Login correcto
    Given path '/login'
    And request { username: 'usuarioValido', password: 'passwordValido' }
    When method post
    Then status 200
    And print response

Scenario: Login incorrecto
    Given path '/login'
    And request { username: 'usuarioValido', password: 'passwordIncorrecto' }
    When method post
    Then status 200
    And print response