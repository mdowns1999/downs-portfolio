/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const sectionStyle = css`
  padding: 20px;
  margin: 20px 0;
  border: 2px dashed #333;
  background-color: #f9f9f9;

  /* Prevent breaking inside this section */
  page-break-inside: avoid;
  break-inside: avoid;
`;

const breakBeforeStyle = css`
  break-before: page;
  page-break-before: always;
`;

const breakAfterStyle = css`
  break-after: page;
  page-break-after: always;
`;

const PageBreakTest = () => {
  return (
    <div>
      <h1>Page Break Test</h1>

      <div css={sectionStyle} className="page">
        <p>This is the first section. It should appear on the first page.</p>
      </div>
      <div className="page-break" />
      <div css={[sectionStyle, breakBeforeStyle]} className="page">
        <p>This section should start on a new page.</p>
      </div>
      <div className="page-break" />
      <div css={[sectionStyle, breakAfterStyle]}>
        <p>This section should end with a page break after it.</p>
      </div>
      <div className="page-break" />
      <div css={sectionStyle} className="page">
        <p>
          This section should follow the previous one, unless the break-after
          forced a new page.
        </p>
      </div>
    </div>
  );
};

export default PageBreakTest;
