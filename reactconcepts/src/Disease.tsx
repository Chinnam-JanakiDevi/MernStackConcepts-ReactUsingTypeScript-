import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import 'chart.js/auto';
import { DiseaseDetails, Disease } from './DiseaseService';
import './DiseaseStyle.css';

interface CovidTimeline {
    cases: { [date: string]: number };
    deaths: { [date: string]: number };
    recovered: { [date: string]: number };
}

interface CovidResponse {
    country: string;
    province: string[];
    timeline: CovidTimeline;
}

const CountrySelector: React.FC = () => {
    const [countries] = useState<string[]>(['India', 'USA', 'Brazil']);
    const [selectedCountry, setSelectedCountry] = useState<string>('India');
    const [covidData, setCovidData] = useState<CovidTimeline | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await Disease(selectedCountry);
                setCovidData(data.timeline);
            } catch (error) {
                console.error(error);
            }
        };
        getData();
    }, [selectedCountry]);

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCountry(e.target.value);
    };

    const generateChartData = (data: CovidTimeline): ChartData<'line'> => {
        const dates = Object.keys(data.cases);
        const casesData = Object.values(data.cases);
        const deathsData = Object.values(data.deaths);
        const recoveredData = Object.values(data.recovered);

        return {
            labels: dates,
            datasets: [
                {
                    label: 'Cases',
                    data: casesData,
                    borderColor: 'blue',
                    fill: false,
                },
                {
                    label: 'Deaths',
                    data: deathsData,
                    borderColor: 'red',
                    fill: false,
                },
                {
                    label: 'Recovered',
                    data: recoveredData,
                    borderColor: 'green',
                    fill: false,
                },
            ],
        };
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        scales: {
            x: {
                display: true,
                title: {
                    display: true,
                    text: 'Date',
                },
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Count',
                },
            },
        },
    };

    return (
        <>
            <div>
                <label htmlFor="country-select">Select Country: </label>
                <select id="country-select" value={selectedCountry} onChange={handleCountryChange}>
                    {countries.map((country) => (
                        <option key={country} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </div>

            {covidData && <Line data={generateChartData(covidData)} options={options} />}

        </>
    );
};

export default CountrySelector;
