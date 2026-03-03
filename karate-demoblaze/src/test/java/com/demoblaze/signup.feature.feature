Feature: Signup API Demoblaze

Background:
    * url 'https://api.demoblaze.com'

Scenario: Crear nuevo usuario
    * def randomUser = 'user' + java.lang.System.currentTimeMillis()
    Given path '/signup'
    And request { username: '#(randomUser)', password: 'test123' }
    When method post
    Then status 200
    And print response

Scenario: Crear usuario existente
    * def existingUser = 'usuarioExistente'
    Given path '/signup'
    And request { username: '#(existingUser)', password: 'test123' }
    When method post
    Then status 200
    And print response