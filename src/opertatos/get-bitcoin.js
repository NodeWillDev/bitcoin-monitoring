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
      /class="sc-71024e3e-0 sc-8ec8b63a-1 ihXFUo icQYnE change-text".*?>.*?(\d+[\.,]?\d*)%/gm;
    console.log(text.includes(regex) ? text : "nao");
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
