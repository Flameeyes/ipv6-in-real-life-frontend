// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

'use client'

import { ResultsContext } from "@/contexts/results_context";
import { useEffect, useState, PropsWithChildren } from "react"

type Props = {}

export default function ResultsLoader({ children }: PropsWithChildren<Props>) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/ipv6-in-real-life.json')
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoading(false);
            })
    }, []);

    if (isLoading) {
        return <progress className="progress is-large is-primary" max="100" />
    }

    if (!data) {
        return (
            <>
                <progress className="progress is-danger" value="90" max="100">90%</progress>
                <div className="block">Failure to load results data.</div>
            </>
        )
    }

    return (
        <ResultsContext.Provider value={data}>
            {children}
        </ResultsContext.Provider>
    )
}
