const currentDayForecast = data => [
    {
        name: 'predictability',
        value: data.predictability,
        unit: '%',
    },
    {
        name: 'humidity',
        value: data.humidity,
        unit: '%',
    },
    {
        name: 'wind',
        value: Math.round(data.wind_speed),
        unit: 'km/h',
    },
    {
        name: 'air pressure',
        value: data.air_pressure,
        unit: 'mb',
    },
    {
        name: 'max temp',
        value: Math.round(((data.max_temp * 9)/5)+32),
        unit: '°F',
    },
    {
        name: 'min temp',
        value: Math.round(((data.min_temp * 9)/5)+32),
        unit: '°F',
    },
];

export default currentDayForecast;
