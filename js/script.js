"use strict";

const cards = document.querySelectorAll(".card");

const toggleBanner = function (elObj, action) {
  const { child, bannerChildren } = elObj;

  child.classList[action]("banner-active");
  bannerChildren.classList[action]("banner-text-active");
};

cards.forEach((card) => {
  const child = card.querySelector(".banner");
  const bannerChildren = child.querySelector(".banner-text");

  card.addEventListener("mouseover", () =>
    toggleBanner({ bannerChildren, child }, "add")
  );
  card.addEventListener("mouseout", () =>
    toggleBanner({ bannerChildren, child }, "remove")
  );
});
