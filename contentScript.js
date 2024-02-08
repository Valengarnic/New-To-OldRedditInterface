// Redirige a new.reddit.com si la URL actual está en reddit.com
if (window.location.hostname === "reddit.com" || window.location.hostname === "www.reddit.com") {
    window.location.hostname = "new.reddit.com";
}
