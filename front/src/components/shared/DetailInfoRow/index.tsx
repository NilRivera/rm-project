import React from 'react';
import {
  SpanInfo, SpanTitle, DetailInfoGroup, TextGroup,
} from './styles';

export type DetailInfoRowProps = {
    text?: any;
    title?: string;
    status?: string;
    name?: string;
}

const DetailInfoRow = ({
  text, title, status, name,
}:DetailInfoRowProps) => (
  <DetailInfoGroup name={name}>
    <SpanTitle name={name}>
      {title}
    </SpanTitle>
    <TextGroup>
      {text && (
        <SpanInfo status={status} title={title}>
          {text}
        </SpanInfo>
      )}
    </TextGroup>
  </DetailInfoGroup>

);
export default DetailInfoRow;
