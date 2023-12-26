// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

'use client'

import { ResultsContext } from "@/contexts/results_context";
import { useContext } from "react";
import ResultsCountryFlag from "./results_country_flag";

type Props = {
    selectedCountry: string | undefined;
    setSelectedCountry: (countryCode: string) => void;
}

export default function ResultsCountries({ selectedCountry, setSelectedCountry }: Props) {
    const ipv6_in_real_life_results = useContext(ResultsContext);

    if (!ipv6_in_real_life_results) {
        return <></>;
    }

    const countryResults = Array.from(Object.keys(ipv6_in_real_life_results),
        (countryCode: string) => (
            <ResultsCountryFlag
                key={countryCode}
                countryCode={countryCode}
                onClick={() => setSelectedCountry(countryCode)}
                isSelected={selectedCountry == countryCode}
            />
        ));

    return (
        <>
            <div className="column is-half">
                <div className="columns is-mobile is-multiline is-centered">
                    {countryResults}
                </div>
            </div>
        </>
    )
}
