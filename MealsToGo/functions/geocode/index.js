const { locations: locationsMock } = require("./geocode.mock");
const url = require("url");
const functions = require("firebase-functions");

module.exports.geocodeRequest = (request, response, client) => {
    const { city, mock } = url.parse(request.url, true).query;

    if (mock === "true") {
        const locationMock = locationsMock[city.toLowerCase()];
        return response.json(locationMock);
    }

    // Accessing the google api
    client.geocode({
        params: {
            address: city,
            key: functions.config().google.key,
        },
        timeout: 1000,
    }).then((res) => {
        return response.json(res.data);
    }).catch((e) => {
        response.status(400);
        response.send(e.response.data.error_message);
    });
}