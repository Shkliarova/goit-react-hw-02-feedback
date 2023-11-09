import { FeedbackWrapper, FeedbackBtn } from "./Feedback.styled";
import { Statistics } from "../Statistic/Statistic";
import { FeedbackOptions } from "../FeedbackOptions/FeedbackOptions";
import { Section } from "../Section/Section";
import { Notification } from "../Notification/Notification";

const { Component } = require("react");

export const Button = ({onUpdate, value}) => {
    return <button onClick={onUpdate}>{value}</button>
}

export class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    updateGood = () => {
        this.setState(prevState => {
            return{
                good: prevState.good + 1,
            }
        })
    }

    updateNeutral = () => {
        this.setState(prevState => {
            return{
                neutral: prevState.neutral + 1,
            }
        })
    }

    updateBad = () => {
        this.setState(prevState => {
            return{
                bad: prevState.bad + 1,
            }
        })
    }

    countTotalFeedback = () => {
        return this.state.good + this.state.neutral + this.state.bad;
    }

    countPositiveFeedbackPercentage = () => {
        const total = this.countTotalFeedback();
        if (total === 0) {
          return 0; 
        }
        return Math.round((this.state.good / total) * 100);
    }

    render(){
        const {good, neutral, bad} = this.state;
        const total = this.countTotalFeedback();
        const positive = this.countPositiveFeedbackPercentage();

        return(
            <FeedbackWrapper>
                <Section title = "Please leave feedback">
                <FeedbackBtn>
                    <FeedbackOptions options="good" onLeaveFeedback={this.updateGood} />
                    <FeedbackOptions options="neutral" onLeaveFeedback={this.updateNeutral} />
                    <FeedbackOptions options="bad" onLeaveFeedback={this.updateBad} />
                </FeedbackBtn>
                </Section>
                
                <Section title = "Statistics">
                    {total > 0 ? 
                    <Statistics good={good} neutral={neutral} bad={bad} total={total} positive={positive} /> :
                    <Notification message = "There is no feedback..."/>}
                </Section>
            </FeedbackWrapper>
        )
    }
}