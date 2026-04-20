// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <section className="section">
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
        </section>
    )
}
