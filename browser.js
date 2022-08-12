const puppeteer = require('puppeteer');

async function startBrowser() {
  let browser;
  try {
    console.log("Opening the browser......");
    // method in puppeteer to launch a browser instance
    browser = await puppeteer.launch({
      // make true is deploying to cloud
      headless: false,
      args: ["--disable-setuid-sandbox"],
      'ignoreHTTPSErrors': true
    });
  } catch (err) {
    console.log("Could not create a browser instance => : ", err);
  }
  return browser;
}

module.exports = {
  startBrowser
};