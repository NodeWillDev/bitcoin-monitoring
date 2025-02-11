const result = {
  data: {
    points: {
      1739021400: {
        v: [100.0, 49566346423.66, 1906785995314.49, 1, 19821487],
        c: [100.0, 49566346423.66, 1906785995314.49],
      },
      1739021700: {
        v: [80.0, 49396049246.89, 1906455719637.49, 1, 19821487],
        c: [80.0, 49396049246.89, 1906455719637.49],
      },
      1739022000: {
        v: [70.0, 48792029450.74, 1910067835039.37, 1, 19821487],
        c: [70.0, 48792029450.74, 1910067835039.37],
      },
      1739022300: {
        v: [50.0, 48582769907.11, 1911153956450.67, 1, 19821531],
        c: [50.0, 48582769907.11, 1911153956450.67],
      },
      1739022600: {
        v: [10.0, 49042780078.22, 1910547321209.15, 1, 19821531],
        c: [10.0, 49042780078.22, 1910547321209.15],
      },
      1739022900: {
        v: [5.0, 48570318159.8, 1908891846335.34, 1, 19821531],
        c: [5.0, 48570318159.8, 1908891846335.34],
      },
      1739107633: {
        v: [2.0, 22380075254.4203, 1910021594340.72, 1, 19821943],
      },
    },
  },
  status: {
    timestamp: "2025-02-09T13:27:13.065Z",
    error_code: "0",
    error_message: "SUCCESS",
    elapsed: "4",
    credit_count: 0,
  },
};

/**
 *
 * @return {Promise<BitcoinData>}
 */

export const getBitcoinData = async () => {
  /**
   * @type {BitcoinData}
   */
  // const result = await (
  //   await fetch(
  //     "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/detail/chart?id=1&range=1D",
  //     {
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Credentials": "true",
  //         "Access-Control-Allow-Headers":
  //           "origin,x-csrf-token,accept,DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization,fvideo-id,x-request-id,authHeader,accept-language,cmc-captcha-token,Platform,security-id,x-se-bh,x-se-pd,x-se-rd,x-se-sd,x-se-gsd,x-se-gd,device-info,x-pwd-encryption,deviceModel,deviceId,deviceName,languageCode,versionname,clienttype,x-seccheck-sig,x-seccheck-token",
  //         "Access-Control-Allow-Methods":
  //           "OPTIONS, HEAD, GET, POST, PUT, DELETE, PATCH",
  //         "Access-Control-Allow-Origin": "https://coinmarketcap.com",
  //         "Access-Control-Expose-Headers":
  //           "Authorization,x-cache,c-backend-cache,age,date",
  //         "Access-Control-Max-Age": "18000",
  //         Vary: "Accept-Encoding",
  //         "User-Agent":
  //           "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  //       },
  //     }
  //   )
  // ).json();
  let base = Object.entries(result.data.points)[0][1].c[0];

  return {
    points: Object.entries(result.data.points)
      .slice(1, -1)
      .map((data, index) => {
        let [date, time] = new Date(data[0] * 1000)
          .toLocaleString("pt-br", {
            timeZone: "America/Sao_Paulo",
          })
          .split(", ");

        return {
          date,
          time,
          value: Number((data[1]?.c ? data[1].c[0] : data[1]?.v[0]).toFixed(2)),
          difference: {
            base: Number(
              ((data[1]?.c ? data[1].c[0] : data[1]?.v[0]) - base).toFixed(2)
            ),
            last: Number(
              (
                (data[1]?.c ? data[1].c[0] : data[1]?.v[0]) -
                Object.entries(result.data.points)[index == 0 ? 0 : index][1]
                  .v[0]
              ).toFixed(2)
            ),
          },
        };
      })
      .reverse(),
    percent:
      ((result.data.points[
        Object.keys(result.data.points)[
          Object.keys(result.data.points).length - 1
        ]
      ].v[0] -
        result.data.points[Object.keys(result.data.points)[0]].v[0]) /
        result.data.points[Object.keys(result.data.points)[0]].v[0]) *
      100,
    current: result.data.points[Object.keys(result.data.points).pop()].v[0],
    last: result.data.points[
      Object.keys(result.data.points)[
        Object.keys(result.data.points).length - 2
      ]
    ].v[0],
    update: new Date(result.status.timestamp).toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
    }),
    base,
  };
};

console.log(await getBitcoinData());
