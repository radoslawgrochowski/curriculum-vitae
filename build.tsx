import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import CurriculumVitae from "./components";
import fs from "fs/promises";
const fontTags = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">`;
const rootTemplate = (content: string, additional: string) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script type="text/javascript" src="https://livejs.com/live.js"></script>
    ${additional || ""}
    <title>Radosław Grochowski - Curriculum Vitae</title>
</head>
<body>
    <div id="root">${content}</div>
</body>
</html>`;

const OUTPUT_DIR = "./output";

const run = async () => {
  const content = renderToStaticMarkup(<CurriculumVitae />);
  const html = rootTemplate(content, `${fontTags}`);
  try {
    await fs.access(OUTPUT_DIR);
  } catch (e) {
    console.log("creating output directory");
    await fs.mkdir(OUTPUT_DIR, { recursive: true });
  }
  await fs.writeFile(OUTPUT_DIR + "/index.html", html);
};

run();
