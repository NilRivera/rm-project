import React from 'react';
import { SpanInfo, SpanTitle, DetailInfoGroup } from './styles';

export type DetailInfoRowProps = {
    text?: any;
    title: string;
    status?: string;
    name?: boolean;
}

const DetailInfoRow = ({
  text, title, status, name,
}:DetailInfoRowProps) => (
  <DetailInfoGroup name={name}>
    <SpanTitle>
      {title}

    </SpanTitle>
    <div>
      {text && (
        <SpanInfo status={status} title={title}>
          {text}
        </SpanInfo>
      )}
    </div>
  </DetailInfoGroup>

);
export default DetailInfoRow;
