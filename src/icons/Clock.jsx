import React from "react";

const Clock = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m13 12.175l2.25 2.25q.275.275.275.688t-.275.712q-.3.3-.712.3t-.713-.3L11.3 13.3q-.15-.15-.225-.337T11 12.575V9q0-.425.288-.712T12 8t.713.288T13 9zM12 6q-.425 0-.712-.288T11 5V4h2v1q0 .425-.288.713T12 6m6 6q0-.425.288-.712T19 11h1v2h-1q-.425 0-.712-.288T18 12m-6 6q.425 0 .713.288T13 19v1h-2v-1q0-.425.288-.712T12 18m-6-6q0 .425-.288.713T5 13H4v-2h1q.425 0 .713.288T6 12m6 10q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22m8-10q0-3.35-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20t5.675-2.325T20 12m-8 0"
      />
    </svg>
  );
};

export default Clock;
