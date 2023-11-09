import { Button } from "../Feedback/Feedback"

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return(
        <div>
        <Button value={options} onUpdate={onLeaveFeedback} />
        </div>
    )
}