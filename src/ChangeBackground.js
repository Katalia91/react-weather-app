import React from "react";

export default function ChangeBackground() {
  let d = new Date();
  let h = d.getHours();
  if (h > 18 || h < 6) document.body.className = "night";

  return null;
}
