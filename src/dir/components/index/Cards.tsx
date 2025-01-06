import React from "react";

// interface CardsInterface {
//   // datas : () => Promise(void)
// }

export const Cards: React.FC = () => {
  const data = [
    { id: 1, data: "one" },
    { id: 2, data: "two" },
    { id: 3, data: "three" },
  ];

  return (
    <div className="text-sm rounded-md border border-neutral-800 bg-neutral-900/50 px-2 text-center shadow">
      {/* <div
        className="button-text mx-auto flex h-12 w-12 items-center justify-center rounded-md border "
        // style={{
        //   backgroundImage:
        //     "linear-gradient(rgb(80, 70, 229) 0%, rgb(43, 49, 203) 100%); border-color: rgb(93, 79, 240)",
        // }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-color-swatch"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M19 3h-4a2 2 0 0 0 -2 2v12a4 4 0 0 0 8 0v-12a2 2 0 0 0 -2 -2"></path>
          <path d="M13 7.35l-2 -2a2 2 0 0 0 -2.828 0l-2.828 2.828a2 2 0 0 0 0 2.828l9 9"></path>
          <path d="M7.3 13h-2.3a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h12"></path>
          <line x1="17" y1="17" x2="17" y2="17.01"></line>
        </svg>
      </div> */}
      <p className="my-4 mb-0 font-normal leading-relaxed tracking-wide text-gray-400">
        Tailor your landing page's look and feel, from the color scheme to the
        font size, to the design of the page.. this is the first one. make sure
        you change import {} from '';
      </p>
      <h3 className="mt-6 text-gray-400 flex justify-center space-x-2">
        {data &&
          data?.map((x, y) => (
            <ul className="*:rounded *:border *:border-sky-100 *:bg-sky-50 *:px-2 *:py-0.5 dark:text-sky-300 dark:*:border-sky-500/15 dark:*:bg-sky-500/10 text-xs">
              <li>{x.data}</li>
            </ul>
          ))}
      </h3>
    </div>
  );
};
