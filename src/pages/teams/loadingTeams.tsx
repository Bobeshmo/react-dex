import React from "react";
import {Header} from "../../components/header/header";
import {Navbar} from "../../components/navbar/navbar";
import {Search} from "../../ui/input/search/search";
import {Button} from "../../ui/button/button";
import {ClipLoader} from "react-spinners";
import styles from "./teams.module.sass";

export const LoadingTeam =  () => (
    <div className={styles.Teams}>
        <Header/>
        <main>
            <Navbar/>
            <div className={styles.Content}>
                <div className={styles.Header}>
                    <Search/>
                    <Button text='Add'/>
                </div>
                <div className={styles.Body}>
                    <div className={styles.Empty}>
                        <div className={styles.Loading}>
                            <ClipLoader size={50}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
)