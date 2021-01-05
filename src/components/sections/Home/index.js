import React from 'react';
import Header from "./header";
import OurStory from "./story";
import Clients from "./clients";
import ProjectsHighlights from "./projectsHighlights";

const HomePage = () => {
    return (
        <>
            <Header />
            <OurStory />
            <ProjectsHighlights />
            <Clients />
        </>
    )
}

export default HomePage;