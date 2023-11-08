import { FeedbackWrapper, FeedbackBtn, FeedbackTitle } from "./Feedback.styled";

const { Component } = require("react");

const Button = ({onUpdate, value}) => {
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
                <FeedbackTitle>Please leave feedback</FeedbackTitle>
                <FeedbackBtn>
                    <Button value="good" onUpdate={this.updateGood}/>
                    <Button value="neutral" onUpdate={this.updateNeutral}/>
                    <Button value="bad" onUpdate={this.updateBad}/>
                </FeedbackBtn>

                <FeedbackTitle>Statistics</FeedbackTitle>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positive}%</p>
            </FeedbackWrapper>
        )
    }
}
