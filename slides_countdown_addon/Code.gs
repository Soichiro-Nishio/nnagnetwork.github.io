function onOpen() {
  SlidesApp.getUi()
    .createAddonMenu()
    .addItem('Open Countdown Timer', 'showSidebar')
    .addToUi();
}

function onInstall(e) {
  onOpen(e);
}

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
    .setTitle('Countdown Timer');
  SlidesApp.getUi().showSidebar(html);
}

function insertCountdown(duration) {
  var slide = SlidesApp.getActivePresentation().getSelection().getCurrentPage();
  if (!slide) {
    slide = SlidesApp.getActivePresentation().getSlides()[0];
  }
  var shape = slide.insertShape(SlidesApp.ShapeType.TEXT_BOX, 50, 50, 300, 100);
  shape.getText().setText(duration);
  shape.getText().getTextStyle().setFontSize(48).setBold(true);
  shape.setLinkUrl('countdown://'+duration);
}
