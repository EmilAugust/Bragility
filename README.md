# Bragility

## Innholdsfortegnelse

* [General info](#om-prosjektet)
* [Teknologier](#teknologier)
* [Setup](#setup)

## Om prosjektet

Dette er en nettside for Bragility. Den ble hovedsakelig laget med React. Nettsiden har også en database som er en relasjonell database. Databasen er lokal, så den vil ikke kunne sende inn eller hente informasjon hvis du prøver å kjøre nettsiden. I databasen lagres de ansatte og meldingene som har blitt sendt inn. Nettsiden bruker Google Fonts til fonter og react-icons til ikoner. Nettsiden har også en chat funksjon. Det er en widget som er hentet fra en tjeneste som heter [Tidio](https://www.tidio.com/).

## Teknologier

* React version: 17.0.2
* Express.js version: 4.17.3
* MySQL version: 2.18.1
* Axios version: 0.26.1
* React-icons version: 4.3.1
* React-router-dom version: 6.2.2
* Cors version: 2.8.5

## Setup

For å kjøre prosjektet må du ha [Node.js](https://nodejs.org/en/) installert.

Når du har åpnet prosjektet og er på Bragility-filen, skriver du disse kommandoene i terminalen:

```
$ cd client
$ npm start
```

Den vil ikke fungere helt som den skal, fordi databasen er lokal og vil derfor ikke være koblet til på en annen PC.
