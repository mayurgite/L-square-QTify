import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import Button from "../Button/Button";
import styles from "./Navbar.module.css";

function Navbar({SearchData}){

    return(

        <>
        <nav className={styles.navbar}>
            <a href="/">
              <Logo/>
              </a>
              <Search
              placeholder="Search a song of your choice"
              searchData={SearchData}
              
              />
              <Button>Give Feedback</Button>


        </nav>
        
        
        
        </>
    )

}
export default Navbar;