import { FeedbackTitle } from "./Section.styled"

export const Section = ({title, children}) => {
    return(
        <div>
            <FeedbackTitle>{title}</FeedbackTitle>
            {children}
        </div>
    )
}