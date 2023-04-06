function doGet(e: WebAppParams) {
  const title = 'React + GAS';
  return HtmlService.createHtmlOutput('hosting/index')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle(title);
}
