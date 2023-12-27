// SPDX-FileCopyrightText: 2023 Diego Elio Pettenò
//
// SPDX-License-Identifier: 0BSD

'use client'

import { useState } from "react"

export default function Navbar() {
    const [isActive, setActive] = useState(false);

    const burgerClass = isActive ? "navbar-burger is-active" : "navbar-burger";
    const menuClass = isActive ? "navbar-menu is-active" : "navbar-menu";

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    IPv6 In Real Life
                </a>

                <a role="button" aria-label="menu" aria-expanded="false" data-target="navbarMain"
                    className={burgerClass}
                    onClick={() => setActive(!isActive)}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarMain" className={menuClass}>
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href="/">
                            Results
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href="/details">
                                Detailed results
                            </a>
                        </div>
                    </div>

                    <a className="navbar-item" href="/about">
                        About
                    </a>
                </div>

                <div className="navbar-end">
                    <a className="navbar-item" href="https://github.com/Flameeyes/ipv6-in-real-life">
                        GitHub
                    </a>
                </div>
            </div>
        </nav>
    )
}
