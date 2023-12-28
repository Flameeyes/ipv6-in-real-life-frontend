// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

import { useContext, useState } from "react";
import { ResultsContext } from "@/contexts/results_context";
import { Entry, describeCategory, summarizeCategory } from "@/lib/results";
import { lookup } from "country-data";

type Props = {
    countryCode: string;
}

type CategoryProps = {
    countryCode: string;
    category: string;
}

function EntryResult(entry: Entry) {
    var isReady: boolean = entry.main_host.has_ipv6_address;
    entry.additional_hosts.forEach(host => {
        isReady = isReady && host.has_ipv6_address
    });

    return (
        <tr key={entry.main_host.name}>
            <td>{isReady ? "✔" : "✘"}</td>
            <td>{entry.name || entry.main_host.name}</td>
            <td></td>
        </tr>
    )
}

function ResultsCategory({ countryCode, category }: CategoryProps) {
    const categoryName = describeCategory(category);

    const ipv6_in_real_life_results = useContext(ResultsContext);
    const [expanded, setExpanded] = useState(false);

    if (!ipv6_in_real_life_results) {
        return <></>;
    }

    const countryResults = ipv6_in_real_life_results.countriesData.get(countryCode);
    if (!countryResults) {
        return <></>;
    }

    const categoryResults = countryResults.get(category);
    if (!categoryResults) {
        return <></>;
    }

    const categorySummary = summarizeCategory(categoryResults);
    const ready = Math.floor((categorySummary.withIpv6 / categorySummary.total) * 100);

    var results;
    if (expanded) {
        results = Array.from(categoryResults,
            (entry: Entry) => EntryResult(entry)
        )
    } else {
        results = <></>
    }

    return (
        <>
            <tr className="has-background-light" onClick={() => setExpanded(!expanded)}>
                <td colSpan={2} className="title is-5">{categoryName}</td>
                <td>{ready}%</td>
            </tr>
            {results}
        </>
    )
}

export default function ResultsCountryDetails({ countryCode }: Props) {
    const ipv6_in_real_life_results = useContext(ResultsContext);

    // Ignore 'xx' code which is used for the test vectors.
    if (countryCode == "xx") {
        return <></>
    }

    if (!ipv6_in_real_life_results) {
        return <></>;
    }

    const countryResults = ipv6_in_real_life_results.countriesData.get(countryCode);
    if (!countryResults) {
        return <></>;
    }

    const categoryResults = Array.from(
        countryResults.keys(),
        (category: string) => (
            <ResultsCategory
                key={countryCode + category}
                countryCode={countryCode}
                category={category}
            />
        ));

    const [country] = lookup.countries({ alpha2: countryCode.toUpperCase() });

    return (
        <div className="column is-half">
            <h2 className="title is-3">Detailed Results for {country.name}</h2>
            <table className="table is-striped">
                <tbody>
                    {categoryResults}
                </tbody>
            </table>
        </div>
    )
}
