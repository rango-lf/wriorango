(function () {
  "use strict";
  var SITE_TITLE = "🦎 wriorango";
  var SITE_SUBTITLE = "";
  var PROFILE_IMAGE = "img/avatar.svg";
  var PROFILE_BLURB =
    "<b>rango</b> lorem ipsum dolor sit amet, consectetur " +
    "adipiscing elit, sed do eiusmod.";
  var NAV_LINKS = [
    { label: "home", href: "index.html" },
    { label: "about me", href: "about.html" },
    { label: "wall", href: "wall.html" },
    { label: "lists", href: "lists.html" },
    { label: "writing", href: "writing.html" },
    { label: "microblog", href: "microblog.html" },
    { label: "art", href: "art.html" },
    { label: "guestbook", href: "https://rango.atabook.org/" },
    { label: "fave media", href: "fave_media.html" },
    { label: "dmo", href: "dmo.html" },
    { label: "bookmarks", href: "bookmarks.html" },
    { label: "links + credit", href: "links.html" },
  ];
  /* ----------------------------------------------------------- */
  function currentFile() {
    var path = window.location.pathname.split("/").pop();
    return path === "" ? "index.html" : path;
  }
  function buildLinksHTML() {
    var here = currentFile();
    return NAV_LINKS.map(function (link) {
      var active = link.href === here ? " active" : "";
      var current = link.href === here ? ' aria-current="page"' : "";
      return (
        '<a href="' + link.href + '" class="menu-link' + active + '"' + current + ">" +
        link.label +
        "</a>"
      );
    }).join("");
  }
  function buildSidebarHTML() {
    return (
      '<div class="sidebar-top">' +
        '<a href="index.html" class="title">' + SITE_TITLE + "</a>" +
        '<button type="button" class="menu-toggle" id="menu-toggle" ' +
          'aria-label="Toggle navigation" aria-expanded="false" aria-controls="menu">' +
          "<span></span><span></span><span></span>" +
        "</button>" +
      "</div>" +
      '<div class="subtitle">' + SITE_SUBTITLE + "</div>" +
      '<div class="profile">' +
        '<img src="https://i.pinimg.com/736x/30/50/fe/3050fe35ac0e3f8e1fb94c9e8137a22b.jpg" alt="profile picture">' +
        '<p class="profile-desc">' +'rango / he / adult </p>' + '<p class="profile-desc">' +' canadian' +'                                                                                      <iframe src="https://petrapixel.neocities.org/widgets/statuscafe?center=0&font=MS Gothic&fontSize=15px&color=white&linkColor=white&username=rango7987&hideUsername=0" style="margin: 2px; margin-bottom: -14px; width: 260px; align-content: left; height: 64px; padding: 5px; margin-top: -9px; background-color: black" frameborder="0" title="Status.Cafe Status"></iframe>' + "</p>" +
      "</div>" +
      '<nav class="menu" id="menu">' + buildLinksHTML() + "</nav>"
    );
  }
  function init() {
    var mount = document.getElementById("sidebar");
    if (!mount) return;
    mount.innerHTML = buildSidebarHTML();
    var toggle = document.getElementById("menu-toggle");
    var menu = document.getElementById("menu");
    if (toggle && menu) {
      toggle.addEventListener("click", function () {
        var isOpen = menu.classList.toggle("open");
        toggle.classList.toggle("open", isOpen);
        toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
      menu.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          menu.classList.remove("open");
          toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
      window.addEventListener("resize", function () {
        if (window.innerWidth > 768) {
          menu.classList.remove("open");
          toggle.classList.remove("open");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();