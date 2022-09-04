import './workExperiencePage.scss'

const WorkExperienceItem = ({ work }) => {
    return (
        <div className="works__item item-work">
            <div className="item-work__company">{work.company}</div>
            <div className="item-work__col">
                <div className="item-work__period">{work.period}</div>
                <div className="item-work__location">{work.location}</div>
            </div>
            <div className="item-work__description">{work.description}</div>
        </div>
    );
};

export default WorkExperienceItem;