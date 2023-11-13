import { FeedbackBtn } from "components/Feedback/Feedback.styled"
import { Button } from "components/Feedback/Feedback"

export const FeedbackOptions = ({onLeaveFeedback, options}) => {
    return(
        <div>
            {options.map(name => {
                return(
                    <FeedbackBtn key={name}>
                        <Button value={name} onUpdate={()=>onLeaveFeedback(name)} />
                    </FeedbackBtn>
                )
            }
            )}
        </div>
    )
}