import React from "react";

import HomepageLayout from "./components/Layouts/HomePageLayout";
import HomeBadge from "./home";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

//import TypeProgress from './components/TypeProgress/TypeProgress';

export default function BasicExample() {
    return (
        <div>
            <HomeBadge />
        </div>
    )
}
