import React, {useEffect} from 'react';
import {Navbar} from "../../components/navbar/navbar";
import {Header} from "../../components/header/header";
import {Card} from "../../components/card/card";
import {Search} from "../../ui/input/search/search";
import {Button} from "../../ui/button/button";
import ReactPaginate from "react-paginate";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";
import {Next, Prev} from "../../assets/icons/icons";
import {LoadingTeam} from "./loadingTeams";
import {EmptyTeam} from "./emptyTeams";
import styles from './teams.module.sass'

export const Teams = () => {
    const {getTeams} = useActions();
    const {teams, loading} = useTypedSelector(state => state.teams)

    useEffect(() => {
        getTeams()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps


    if (loading) {
        return <LoadingTeam/>
    }
    if (!teams) {
        return <EmptyTeam/>
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
                            {teams.data.map((team) => (
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