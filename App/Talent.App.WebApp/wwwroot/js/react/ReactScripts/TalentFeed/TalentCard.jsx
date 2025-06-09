import React from 'react';
import ReactPlayer from 'react-player';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import styles from '../../../../css/TalentTheme.module.css';
import TalentCardDetail from './TalentCardDetail.jsx';
import Loading from '../Layout/Loading.jsx';

export default class TalentCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { loadingFeedData, feedData, handleToggleCardDisplay } = this.props;

        if (loadingFeedData) {
            return <Loading />;
        }

        if (!feedData || !Array.isArray(feedData)) {
            return (
                <div className={`${styles.uiCenterAligned}`}>
                    Problem fetching Talent Info. Try again!!
                </div>
            );
        }

        if (feedData.length === 0) {
            return (
                <div className={`${styles.uiCenterAligned}`}>
                    <strong>There are no talents found for your recruitment company.</strong>
                </div>
            );
        }

        return (
            <Card.Group>
                {feedData.map((card, index) => (
                    <TalentCardDetail
                        key={index}
                        cardDetails={card}
                        handleToggleCardDisplay={handleToggleCardDisplay}
                        index={index}
                    />
                ))}
            </Card.Group>
        );
    }
}

TalentCard.propTypes = {
    loadingFeedData: PropTypes.bool,
    feedData: PropTypes.array,
    handleToggleCardDisplay: PropTypes.func
};
