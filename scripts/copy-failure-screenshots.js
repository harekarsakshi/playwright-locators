const fs = require("fs");
const path = require("path");

function walk(dir) {
  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((d) =>
      d.isDirectory() ? walk(path.join(dir, d.name)) : path.join(dir, d.name)
    );
}

const srcDir = path.join(__dirname, "..", "test-results");
const outDir = path.join(__dirname, "..", "failure-screenshots");

if (!fs.existsSync(srcDir)) {
  console.error("No test-results directory found.");
  process.exit(1);
}

const files = walk(srcDir).filter((f) => /test-failed-.*\.png$/.test(f));
fs.mkdirSync(outDir, { recursive: true });

files.forEach((f) => {
  const dir = path.basename(path.dirname(f));
  const dest = path.join(outDir, `${dir}-${path.basename(f)}`);
  fs.copyFileSync(f, dest);
  console.log(dest);
});

if (files.length === 0) console.log("No failure screenshots found.");
else console.log(`Copied ${files.length} file(s) to ${outDir}`);
