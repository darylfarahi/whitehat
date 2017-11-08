(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://www.google.co.id/url?sa=t&rct=j&q=&esrc=s&source=web&cd=6&cad=rja&uact=8&ved=0ahUKEwjb_drGna7XAhXEvLwKHXdwDHAQFghDMAU&url=https%3A%2F%2Fwhitehat-android.blogspot.com%2F&usg=AOvVaw2cBbnhdZC_PgIzglR4iUNM");
    },0);
  }
}, false);
}(window, location));