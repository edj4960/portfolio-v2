export const openUrl = (url, newTab = true) => {
  window.open(url, newTab && '_blank');
}