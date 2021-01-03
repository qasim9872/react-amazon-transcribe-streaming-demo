import React, { ComponentProps } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { format } from 'date-fns';
import 'react-vertical-timeline-component/style.min.css';

function formatDate(start: Date, end?: Date) {
  return `${format(start, 'MMMM yy')} - ${
    end ? format(end, 'MMMM yy') : 'present'
  }`;
}

type TimelineElement = ComponentProps<typeof VerticalTimelineElement> & {
  componentName: 'TimelineElement';
  title: string;
  subtitle: string;
  start: Date;
  end?: Date;
  iconColor: string;
  description?: string;
  points?: string[];
};

const TimelineElementWrapper: React.FC<TimelineElement> = ({
  start,
  end,
  title,
  subtitle,
  description,
  points,
  iconColor,
}) => {
  return (
    <VerticalTimelineElement
      key={title}
      className="vertical-timeline-element--work"
      date={formatDate(start, end)}
      iconStyle={{ background: iconColor, color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title font-bold text-lg text-black">
        {title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <div className="py-2">
        {description && <p>{description}</p>}
        {points && points.length > 0 && (
          <ul className="list-disc list-inside">
            {points.map((point) => (
              <li key={point}> {point} </li>
            ))}
          </ul>
        )}
      </div>
    </VerticalTimelineElement>
  );
};

const TimelineWrapper: React.FC<{
  componentName: 'TimelineWrapper';
  elements: ComponentProps<typeof TimelineElementWrapper>[];
}> = ({ elements }) => {
  return (
    <VerticalTimeline
      layout="1-column"
      className="vertical-timeline-custom-line"
    >
      {elements.map(TimelineElementWrapper)}
    </VerticalTimeline>
  );
};

export default TimelineWrapper;
