import React from "react";
import {Header} from "../../components/header/header";
import {Navbar} from "../../components/navbar/navbar";
import {Search} from "../../ui/input/search/search";
import {Button} from "../../ui/button/button";
import {Empty} from "../../components/empty/empty";
import {EmptyTeams} from "../../assets/icons/icons";
import styles from "./teams.module.sass";

export const EmptyTeam = () => (
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
                        <Empty icon={<EmptyTeams/>} text="Add new teams to continue"/>
                    </div>
                </div>
            </div>
        </main>
    </div>
)