
import styles from "./TestPage.module.css";


const PageBreakTest = () => {
  return (
    <div id="print-content">
      <h1>Page Break Test</h1>
      <div className={`page ${styles.section}`}>
        <p>This is the first section. It should appear on the first page.</p>
      </div>
      <div className={styles.pageBreak} />
      <div className={`page ${styles.section} ${styles.breakBefore}`}>
        <p>This section should start on a new page.</p>
      </div>
      <div className={styles.pageBreak} />
      <div className={`${styles.section} ${styles.breakAfter}`}>
        <p>This section should end with a page break after it.</p>
      </div>
      <div className='page-break' />
      <div className={`page ${styles.section}`}>
        <p>
          This section should follow the previous one, unless the break-after
          forced a new page.
        </p>
      </div>
       <div className='page-break' />
       <div className={`page ${styles.section}`}>
        <p>
          This section should follow the previous one, unless the break-after
          forced a new page.
        </p>
      </div>
    </div>
  );
};

export default PageBreakTest;
