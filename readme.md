# Margin Lending Reinvestor

Automatically reinvest margin lending revenues into the same cycle shortly after payout.

## Supported exchanges
- [FTX](https://ftx.com/)

## What it does in the background
1. Runs every hour at minute 2 (since FTX pays out every full hour) and performs the following steps via API calls.
2. Lends the desired coin in your wallet (default "USD and Stablecoins").
![Readme explanation 1](https://www.fullauto.dev/img/readme_explanation_1.png)
3. Uses all available funds as lending offer ("MAX" button), sets the hourly rate as low as possible, then submits the offer.
![Readme explanation 2](https://www.fullauto.dev/img/readme_explanation_2.png)

## Installation

Via npm

```bash
$ npm i margin-lending-reinvestor
```

Or download the zip package on [Github](https://github.com/atthakasem/margin-lending-reinvestor) and extract the only necessary files: `index.js` and `.env.example`.

## Usage

1. Copy `.env.example` to `.env` and provide your credentials.
2. Optional: change the currency to lend from "USD" to something else in `index.js`.
3. Run the script. Use of [forever](https://www.npmjs.com/package/forever) is recommended.
```bash
$ node index.js
```

## Build process

The source code has been bundled using esbuild even though Node can run the source files as is, after installing the dependencies using `npm install`. If you make changes to the source code, consider rebuilding index.js:
```bash
$ npm run build
```

## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## License

MIT