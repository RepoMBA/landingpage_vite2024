import React from "react";
import NewHeader from "../../components/Header/NewHeader";
import Footer from "../../components/Footer/index";
import JobsOpened from "./jobListing.tsx";

export default function JobsAndCareerContent() {
    return(
        <div>
            <NewHeader/>
            <JobsOpened/>
            <Footer/>
        </div>
    )
}