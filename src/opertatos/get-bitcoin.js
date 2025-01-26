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
    const text = decoder.decode(value, {
      stream: true,
    });
    if (text.includes('data-test="text-cdp-price-display"')) {
      await reader.cancel();
      return (
        /data-test="text-cdp-price-display">[^0-9]*(\d[\d,\.]*\d)/gm.exec(
          text
        )[1] ?? "Bitcoin number not found"
      );
    }
  }
};
