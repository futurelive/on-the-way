const getBrowser = () => {
  const userAgent = window.navigator.userAgent;  // eslint-disable-line
  const isOpera = userAgent.indexOf('Opera') > -1;
  const isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && !isOpera;
  const isEdge = userAgent.indexOf('Edge') > -1;
  const isFF = userAgent.indexOf('Firefox') > -1;
  const isSafari = userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1;
  const isChrome = userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1;

  if (isIE) {
    const reIE = new RegExp('MSIE (\\d+\\.\\d+);');
    reIE.test(userAgent);
    const fIEVersion = parseFloat(RegExp.$1);
    if (fIEVersion === 7) {
      return 'IE7';
    } if (fIEVersion === 8) {
      return 'IE8';
    } if (fIEVersion === 9) {
      return 'IE9';
    } if (fIEVersion === 10) {
      return 'IE10';
    } if (fIEVersion === 11) {
      return 'IE11';
    }
    return 'IE';
  }
  if (isOpera) {
    return 'Opera';
  }
  if (isEdge) {
    return 'Edge';
  }
  if (isFF) {
    return 'FF';
  }
  if (isSafari) {
    return 'Safari';
  }
  if (isChrome) {
    return 'Chrome';
  }
  return 'Unknow';
};
export default getBrowser;
