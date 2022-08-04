import React from "react";
import "./styles.css";

import Search from "./Search.js";

export default function Border() {
    return (
        <div class="container">
            <div class="row">
                <div class="col-8 shadow p-3 mb-5 bg-body rounded main">
                    <Search />
                </div>
            </div>
            <footer>
                <a href="https://github.com/franzybahm/my-app">Coded by Franziska Wolf</a>
            </footer>
        </div>
    );
}
