// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

import DetailsTable from "@/components/details_table";
import ResultsLoader from "@/components/results_loader";
import ResultsTimestamp from "@/components/results_timestamp";
import { Suspense } from "react";

export default function Details() {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-1">Detailed Results</h1>

                <Suspense>
                    <ResultsLoader>
                        <DetailsTable />
                        <ResultsTimestamp />
                    </ResultsLoader>
                </Suspense>
            </div>
        </section>
    );
}
