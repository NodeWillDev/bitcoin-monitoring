const result = {
  data: {
    points: {
      1738537501: {
        v: [97368.6400075907, 60311262586.91, 1929734763120.36, 1, 19818853],
        c: [97368.6400075907, 60311262586.91, 1929734763120.36],
      },
      1738537802: {
        v: [97288.3664272107, 60436790658.19, 1928143832831.02, 1, 19818853],
        c: [97288.3664272107, 60436790658.19, 1928143832831.02],
      },
      1738538103: {
        v: [97699.0905593461, 60617615926.83, 1936285672613, 1, 19818871],
        c: [97699.0905593461, 60617615926.83, 1936285672613],
      },
      1738623604: {
        v: [101774.704333099, 118341431518.97, 2017106247280.71, 1, 19819328],
      },
    },
  },
  status: {
    timestamp: "2025-02-03T23:00:06.150Z",
    error_code: "0",
    error_message: "SUCCESS",
    elapsed: "5",
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
        console.log(Object.entries(result.data.points));
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
                Object.entries(result.data.points).length
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
    current: result.data.points[Object.keys(result.data.points)[0]].v[0],
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
await getBitcoinData();
