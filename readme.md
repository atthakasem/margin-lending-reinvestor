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

```
git clone https://github.com/atthakasem/margin-lending-reinvestor.git
```
or download the zip package and extract the only necessary files: `index.js` and `.env.example`.

## Usage

<!-- 1. Copy `.env.example` to `.env` and provide your credentials. -->
1. Switch into the project directory:
    ```
    cd margin-lending-reinvestor
    ```
2. Copy `.env.example` to `.env`:
    ```
    cp .env.example .env
    ```
3. Edit `.env` and enter your API key credentials.
4. Run the script:
    ```
    node index.js
    ```
    or run it detached in the background:
    ```
    nohup node index.js &
    ```

Outputs are stored in `margin_lending.log`.

## Build process

The source code has been bundled using esbuild even though Node can run the source files as is, after installing the dependencies using `npm install`. If you make changes to the source code, consider rebuilding index.js:
```
npm run build
```

## Options

The lending currency (default "USD") can be changed within `index.js`.

## Change log

Please see the [changelog](changelog.md) for more information on what has changed recently.

## License

MIT