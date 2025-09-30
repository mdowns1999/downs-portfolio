
import classes from "./TestPage.module.css";


const PageBreakTest = () => {
  return (
    <div id="print-content">
      <h1>Page Break Test</h1>
      <div >
        <p>This is the first section. It should appear on the first page.</p>
      </div>
      <div />
      <div >
        <p>This section should start on a new page.</p>
      </div>
      <div/>
      <div >
        <p>This section should end with a page break after it.</p>
      </div>
      <div/>
      <div >
        <p>
          This section should follow the previous one, unless the break-after
          forced a new page.
        </p>
      </div>
       <div />
       <div >
        <p>
          This section should follow the previous one, unless the break-after
          forced a new page.
        </p>
      </div>
    </div>
  );
};

export default PageBreakTest;
