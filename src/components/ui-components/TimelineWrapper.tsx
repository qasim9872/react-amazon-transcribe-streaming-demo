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
  description: string;
  start: Date;
  end?: Date;
  iconColor: string;
};

const TimelineElementWrapper: React.FC<TimelineElement> = ({
  start,
  end,
  title,
  subtitle,
  description,
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
      <p>{description}</p>
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
