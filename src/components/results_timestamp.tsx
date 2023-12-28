// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

'use client';

import { ResultsContext } from "@/contexts/results_context";
import { useContext } from "react";

export default function ResultsTimestamp() {
    const ipv6_in_real_life_results = useContext(ResultsContext);

    if (!ipv6_in_real_life_results) {
        return <></>;
    }

    // Date() uses milliseconds.
    const generationDate = new Date(ipv6_in_real_life_results.timestamp * 1000);

    return (
        <div className="block p-2 has-background-light has-text-centered is-size-7">
            <span>Results generated on {generationDate.toISOString()}.</span>
        </div>
    )
}
