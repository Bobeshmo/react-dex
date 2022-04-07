import React, {useEffect} from 'react';
import {Navbar} from "../../components/navbar/navbar";
import {Header} from "../../components/header/header";
import {getTeams} from "../../core/redux/actions/teams"
import {useDispatch, useSelector} from "react-redux";
import {Empty} from "../../components/empty/empty";
import {EmptyTeams} from "../../assets/icons/icons";
import {RootState} from "../../core/redux/store";
import {IData} from "../../api/models/ITeams";
import styles from './teams.module.sass'

export const Teams = () => {
    const dispatch = useDispatch()
    const teams = useSelector((state: RootState) => state.teams.teams)

    useEffect(() => {
        dispatch(getTeams())
    }, [])

    return (
        <div className={styles.Teams}>
            <Header/>
            <main>
                <Navbar/>
                <div className={styles.Content}>
                    {
                        teams ? (
                            teams.data.map((team: IData) => (
                                <div key={team.id}>

                                </div>
                            ))
                        ) : <Empty icon={<EmptyTeams/>} text="Add new teams to continue"/>
                    }
                </div>
            </main>
        </div>
    );
};