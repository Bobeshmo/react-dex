import React, {useEffect} from 'react';
import {Navbar} from "../../components/navbar/navbar";
import {Header} from "../../components/header/header";
import {Card} from "../../components/card/card";
import {Search} from "../../ui/input/search/search";
import {Button} from "../../ui/button/button";
import {Empty} from "../../components/empty/empty";
import ReactPaginate from "react-paginate";
import {getTeams} from "../../core/redux/actions/teams"
import {useDispatch, useSelector} from "react-redux";
import {EmptyTeams, Next, Prev} from "../../assets/icons/icons";
import {RootState} from "../../core/redux/store";
import {IData} from "../../api/models/ITeams";
import styles from './teams.module.sass'

export const Teams = () => {
    const dispatch = useDispatch()
    const teams = useSelector((state: RootState) => state.teams.teams)

    useEffect(() => {
        dispatch(getTeams())
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    if (!teams) {
        return (
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
        );
    }

    return (
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
                        <div className={styles.Cards}>
                            {teams.data.map((team: IData) => (
                                <Card
                                    key={team.id}
                                    name={team.name}
                                    image={team.imageUrl}
                                    foundationYear={team.foundationYear}
                                />
                            ))}
                        </div>
                    </div>
                    <div className={styles.Footer}>
                        <ReactPaginate
                            containerClassName={styles.Pagination}
                            activeClassName={styles.Active}
                            previousLinkClassName={styles.Previous}
                            nextLinkClassName={styles.Next}
                            disabledClassName={styles.Disabled}
                            breakLabel="..."
                            nextLabel={<Next/>}
                            onPageChange={(event) => {
                                console.log(event.selected)
                            }}
                            pageRangeDisplayed={4}
                            marginPagesDisplayed={1}
                            pageCount={teams.count}
                            previousLabel={<Prev/>}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};