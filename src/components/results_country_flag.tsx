// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

import { useContext } from "react";
import { ResultsContext } from "@/contexts/results_context";
import { summarizeCountry } from "@/lib/results";
import Flag from 'react-world-flags'

type Props = {
    countryCode: string;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
    isSelected: boolean;
}

export default function ResultsCountryFlag({ countryCode, onClick, isSelected }: Props) {
    // Ignore 'xx' code which is used for the test vectors.
    if (countryCode == 'xx') {
        return <></>
    }

    const ipv6_in_real_life_results = useContext(ResultsContext);

    if (!ipv6_in_real_life_results) {
        return <></>;
    }

    const countryPercentage = summarizeCountry(ipv6_in_real_life_results, countryCode);

    const className = isSelected ? 'box m-4 has-background-light' : 'box m-4';

    return (
        <div className={className} onClick={onClick}>
            <div className='content has-text-centered'>
                <Flag code={countryCode} fallback={<></>} style={{ height: '3em' }} />
            </div>
            <div className='content has-text-centered'>
                {countryPercentage}% ready
            </div>
        </div>
    );
}
