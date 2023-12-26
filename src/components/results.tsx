// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

'use client';

import { useState } from "react";
import ResultsCountries from "@/components/results_countries";
import ResultsCountryDetails from "@/components/results_country_details";
import ResultsLoader from "@/components/results_loader";

export default function Results() {
    const [selectedCountry, setSelectedCountry] = useState<string | undefined>(undefined);

    return (
        <ResultsLoader>
            <div className="columns">
                <ResultsCountries selectedCountry={selectedCountry} setSelectedCountry={setSelectedCountry} />
                {selectedCountry ? <ResultsCountryDetails countryCode={selectedCountry} /> : <></>}
            </div>
        </ResultsLoader>
    );
}
