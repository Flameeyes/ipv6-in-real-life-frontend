// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

'use client';

import { Results } from "@/lib/results";
import { createContext } from "react";

export const ResultsContext = createContext<undefined | Results>(undefined);
