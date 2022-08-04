import React from 'react';
import { useParams, Link, Switch, Route } from 'react-router-dom';
import { ContainerLinks } from '../individualcard/IndividualCard.style';
import InfoCard from '../../components/infocard/InfoCard';
import PersonCredits from '../../components/credits/PersonCredits';

const PersonView = () => {

    const params = useParams();
    
    return (
        <>
            <ContainerLinks>
                <Link to={`/person/${params.id}/info`}>
                    INFORMACION
            </Link>
                <Link to={`/person/${params.id}/credits`}>
                    CREDITOS
            </Link>
            </ContainerLinks>
            <Switch>
                <Route exact path="/:media/:id/info" component={InfoCard} />
                <Route exact path="/:media/:id/credits" component={PersonCredits} />
            </Switch>
        </>
    );
}

export default PersonView;