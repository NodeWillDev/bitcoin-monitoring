const decoder = new TextDecoder("utf-8");

/**
 * @return {Promise<string>}
 */
export const getBitcoin = async () => {
  const data = await fetch("https://coinmarketcap.com/currencies/bitcoin/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  let done = false;
  const reader = data.body.getReader();

  while (!done) {
    const { value, done: streamDone } = await reader.read();
    /** @type {string} */
    const text = decoder.decode(value, {
      stream: true,
    });
    done = streamDone;
    const regex =
      /data-test="text-cdp-price-display">[^0-9]*(\d[\d,\.]*\d)|\/svg>\s*"(\d+\.\d+)%"/;
    console.log(regex.exec(text));
    // if (text.includes('data-test="text-cdp-price-display"')) {
    //   await reader.cancel();
    //   return (
    //     /data-test="text-cdp-price-display">[^0-9]*(\d[\d,\.]*\d)/gm.exec(
    //       text
    //     )[1] ?? "Bitcoin number not found"
    //   );
    // }
  }
};
console.log(await getBitcoin());

// const html = `<div data-role="percentage-value" data-sensors-click="true" class="sc-4c05d6ef-0 sc-8ec8b63a-0 dlQYLv fEKdaZ">
//                 <p color="green" class="sc-71024e3e-0 sc-8ec8b63a-1 bgxfSG icQYnE change-text" data-change="down" font-size="1" data-sensors-click="true">
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24px" width="24px" viewBox="0 0 24 24" class="sc-4c05d6ef-0 dMwnWW" style="height: 14px; width: 14px;">
//                         <path d="M18.0566 16H5.94336C5.10459 16 4.68455 14.9782 5.27763 14.3806L11.3343 8.27783C11.7019 7.90739 12.2981 7.90739 12.6657 8.27783L18.7223 14.3806C19.3155 14.9782 18.8954 16 18.0566 16Z"></path>
//                     </svg>3.07%&nbsp;(1d)</p>
//                 </div>`;
// const colorRegex = /color="(green|red)"/;
// const percentageRegex = /<\/svg>\s*(\d+\.\d+)%/;
// console.log(html.match(percentageRegex));
