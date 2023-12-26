// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

'use client';

import { ResultsContext } from "@/contexts/results_context";
import { Entry, describeCategory } from "@/lib/results";
import { useContext } from "react";
import { lookup } from "country-data";

function DetailsCategory(countryRowSpan: number | undefined, countryName: string | undefined, categoryName: string, entries: Array<Entry>) {
    var categoryRowSpan = 0;
    entries.forEach(entry => categoryRowSpan += (entry.additional_hosts.length + 1));

    const rows = Array.from(entries, (entry, idx) => (
        <>
            <tr key={entry.main_host.name}>
                {idx == 0 && countryRowSpan != undefined && countryName ? <td key={entry.main_host.name + "-country"} rowSpan={countryRowSpan}>{countryName}</td> : []}
                {idx == 0 ? <td key={entry.main_host.name + "-category"} rowSpan={categoryRowSpan}>{categoryName}</td> : []}
                <td rowSpan={entry.additional_hosts.length + 1}>{entry.name || entry.main_host.name}</td>
                <td>{entry.main_host.name}</td>
                <td>{entry.main_host.has_ipv4_address ? "✔" : "✘"}</td>
                <td>{entry.main_host.has_ipv6_address ? "✔" : "✘"}</td>
            </tr>
            {Array.from(entry.additional_hosts, host => (
                <tr key={host.name}>
                    <td>{host.name}</td>
                    <td>{host.has_ipv4_address ? "✔" : "✘"}</td>
                    <td>{host.has_ipv6_address ? "✔" : "✘"}</td>
                </tr>
            ))}
        </>
    ));

    return rows;
}

function DetailsCountry(countryCode: string, categories: Map<string, Array<Entry>>) {
    var rowSpan = 0;
    Object.values(categories).forEach(
        (category: Array<Entry>) => category.forEach(
            entry => rowSpan += (entry.additional_hosts.length + 1))
    );

    var countryName: string | undefined = undefined;
    if (countryCode == "xx") {
        countryName = "Test Vector";
    } else {
        const [country] = lookup.countries({ alpha2: countryCode.toUpperCase() });
        countryName = country.name;
    }

    return Array.from(Object.entries(categories), ([category, entries], idx) => (
        DetailsCategory(idx == 0 ? rowSpan : undefined, countryName, describeCategory(category), entries)
    ));
}

export default function DetailsTable() {
    const ipv6_in_real_life_results = useContext(ResultsContext);

    if (!ipv6_in_real_life_results) {
        return <></>;
    }

    return (
        <table className="table is-fullwidth is-striped">
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Category</th>
                    <th>Website</th>
                    <th>Host</th>
                    <th>Has IPv4</th>
                    <th>Has IPv6</th>
                </tr>
            </thead>
            <tbody>
                {Array.from(
                    Object.entries(ipv6_in_real_life_results),
                    ([countryCode, categories]) => DetailsCountry(countryCode, categories))}
            </tbody>
        </table>
    )
}
