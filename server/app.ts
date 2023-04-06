function doGet(e: WebAppParams) {
  const title = 'React + GAS';
  return HtmlService.createHtmlOutputFromFile('hosting/index')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle(title);
}
