// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

type SummarySpec = { total: number; withIpv6: number; invalid: number; }

export interface Host {
    name: string;
    has_ipv4_address: boolean;
    has_ipv6_address: boolean;
}

export interface Entry {
    name?: string;
    main_host: Host;
    additional_hosts: Array<Host>;
}

export type Results = Map<string, Map<string, Array<Entry>>>

export function summarizeCategory(category: Array<Entry>): SummarySpec {
    var total: number = 0;
    var withIpv6: number = 0;
    var invalid: number = 0;

    category.forEach((entry) => {
        // Assume every entry is both valid and v6-compatible.
        // If any host is missing v4, it's invalid.
        // If any host is missing v6, it's not v6-compatible.
        var is_valid = true;
        var has_ipv6 = true;
        entry.additional_hosts.concat(entry.main_host).forEach(
            (host) => {
                if (!host.has_ipv4_address) is_valid = false;
                if (!host.has_ipv6_address) has_ipv6 = false;
            }
        );
        total = total + 1;
        if (!is_valid) {
            invalid = invalid + 1;
        } else if (has_ipv6) {
            withIpv6 = withIpv6 + 1;
        }
    })

    return { total: total, withIpv6: withIpv6, invalid: invalid };
}

function summarizeMultipleCategories(categories: Array<Array<Entry>>): number {
    var total: number = 0;
    var withIpv6: number = 0;
    var invalid: number = 0;

    categories.forEach((category) => {
        var res = summarizeCategory(category);
        total = total + res.total;
        withIpv6 = withIpv6 + res.withIpv6;
        invalid = invalid + res.invalid;
    });

    return Math.floor((withIpv6 / (total - invalid)) * 100);
}

export function summarizeCountry(data: Results, countryCode: string): number {
    const countryResults = data.get(countryCode);
    if (!countryResults) {
        return 0;
    }
    return summarizeMultipleCategories(Object.values(countryResults));
}

export function summarizeResults(data: object): Map<string, number> {
    return new Map(Array.from(
        Object.entries(data),
        ([country, categories]) => {
            return [country, summarizeMultipleCategories(Object.values(categories))];
        }
    ));
}

export function describeCategory(category: string): string {
    switch (category) {
        case "telco":
            return "Telecommunications";
        case "utility":
            return "Utilities";
        case "groceries":
            return "Groceries and Shopping";
        case "bank":
            return "Banks and Finance";
        case "transport":
            return "Public Transport and Mass Transit";
    }

    return category;
}
