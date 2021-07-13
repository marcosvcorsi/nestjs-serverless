curl --location --request GET 'http://localhost:3000/dev/fighters'

curl --location --request GET 'http://localhost:3000/dev/fighters/f31b1850-1abd-4c24-b65c-c6bdc420e95b'

curl --location --request DELETE 'http://localhost:3000/dev/fighters/f31b1850-1abd-4c24-b65c-c6bdc420e95b'

curl --location --request POST 'http://localhost:3000/dev/fighters' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Marcos Corsi",
    "country": "Brazil",
    "birthDate": "2021-07-13T23:53:35.195Z",
    "height": 168,
    "weight": 90
}'

curl --location --request PATCH 'http://localhost:3000/dev/fighters/f9d03666-59bb-4830-9810-1c089b8607fb' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "Marcos Corsi 2",
    "country": "Brazil",
    "birthDate": "2021-07-13T23:53:46.857Z",
    "height": 168,
    "weight": 90
}'