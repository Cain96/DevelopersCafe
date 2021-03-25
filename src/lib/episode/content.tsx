/** @jsx jsx */
import { jsx, css } from '@emotion/react';

export function convertContent(content: string | undefined): JSX.Element[] {
  if (typeof content === 'undefined') return [];
  const list = content.split('\n');
  return list.map((element, i) => {
    const el = element.replace(/&nbsp;/g, '　');
    return (
      // eslint-disable-next-line react/no-array-index-key
      <div css={episodeShownotesContentStyle} key={i}>
        {el}
      </div>
    );
  });
}

const episodeShownotesContentStyle = css`
  & + & {
    margin-top: 8px;
  }
`;
