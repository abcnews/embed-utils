import { build, emptyDir } from "@deno/dnt";

await emptyDir("./npm");

const denoJsonContent = Deno.readTextFileSync("./deno.json");
const denoJson = JSON.parse(denoJsonContent);
const version = denoJson.version;

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "@phocks/isit",
    version: version,
    description: "Your package.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/phocks/isit.git",
    },
    bugs: {
      url: "https://github.com/phocks/isit/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
  typeCheck: false,
  filterDiagnostic(diagnostic) {
    // Ignore all type checking errors from jsr.io assert module
    if (diagnostic.file?.fileName.includes("jsr.io/@std/assert")) {
      return false;
    }
    return true;
  },
});
