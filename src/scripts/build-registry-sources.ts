// eslint-disable-next-line @typescript-eslint/no-require-imports
const fs = require("fs")
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path")
const baseDir = path.join(__dirname, "..", "..")
console.log("baseDir", baseDir)
const registryJsonPath = path.join(baseDir, "public", "index.json")

// Single output directory for all registry items
const registryOutputDir = path.join(baseDir, "public/r")

// Ensure output directory exists
if (!fs.existsSync(registryOutputDir)) {
  fs.mkdirSync(registryOutputDir, { recursive: true })
}

function getSourceContent(filePath: string): string {
  try {
    if (!fs.existsSync(filePath)) {
      console.warn(`File does not exist: ${filePath}`)
      return ""
    }
    return fs.readFileSync(filePath, "utf-8")
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return ""
  }
}

type RegistryType = "registry:ui" | "registry:block" | "registry:hook" | "registry:lib" | "registry:theme"

interface RegistryFile {
  path: string
  type: RegistryType
}

function getSourceFilePath(file: RegistryFile, baseDir: string): string {
  let sourceFilePath = ""

  if (file.type === "registry:ui") {
    const componentPath = file.path.replace("ottoui/", "")
    sourceFilePath = path.join(
      baseDir,
      "src",
      "components",
      "ottoui",
      "ui",
      `${componentPath}.tsx`
    )
  } else if (file.type === "registry:block") {
    const examplePath = file.path.replace("ottoui/", "")
    sourceFilePath = path.join(
      baseDir,
      "src",
      "components",
      "ottoui",
      `${examplePath}.tsx`
    )
  } else if (file.type === "registry:hook") {
    const hookPath = file.path.replace("hooks/", "")
    sourceFilePath = path.join(
      baseDir,
      "src",
      "components",
      "ottoui",
      "hooks",
      `${hookPath}.ts`
    )
  } else if (file.type === "registry:lib") {
    const utilPath = file.path.replace("utils/", "")
    sourceFilePath = path.join(
      baseDir,
      "src",
      "components",
      "ottoui",
      "utils",
      `${utilPath}.ts`
    )
  }

  return sourceFilePath
}

interface RegistryItem {
  type: RegistryType
  dependencies?: string[]
  files: RegistryFile[]
  registryDependencies?: string[]
  devDependencies?: string[]
  tailwind?: unknown
}

interface OutputItem {
  $schema: string
  name: string
  type: RegistryType
  dependencies: string[]
  files: Array<{
    path: string
    content: string
    type?: RegistryType
    target?: string
  }>
  registryDependencies?: string[]
  devDependencies?: string[]
  tailwind?: unknown
}

function processRegistryItem(name: string, item: RegistryItem): OutputItem {
  const output: OutputItem = {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name,
    type: item.type,
    dependencies: item.dependencies || [],
    files: [],
  }

  // Check if any files import the cn utility
  let needsCnUtility = false
  item.files.forEach((file) => {
    const sourceFilePath = getSourceFilePath(file, baseDir)
    if (sourceFilePath) {
      const content = getSourceContent(sourceFilePath)
      if (
        content &&
        (content.includes('import { cn } from "../utils/cn"') ||
          content.includes(
            'import { cn } from "@/components/ottoui/utils/cn"'
          ) ||
          content.includes('import { cn } from "../../utils/cn"'))
      ) {
        needsCnUtility = true
      }
    }
  })

  // Add cn utility dependencies if needed
  if (needsCnUtility) {
    // Add clsx and tailwind-merge to dependencies
    if (!output.dependencies.includes("clsx")) {
      output.dependencies.push("clsx")
    }
    if (!output.dependencies.includes("tailwind-merge")) {
      output.dependencies.push("tailwind-merge")
    }

    // Add the cn utility file
    const cnContent = getSourceContent(
      path.join(baseDir, "src", "components", "ottoui", "utils", "cn.ts")
    )
    if (cnContent) {
      output.files.push({
        path: "utils/cn.ts",
        content: cnContent,
        type: "registry:lib",
        target: "lib/utils/cn.ts",
      })
    }
  }

  // Add registry dependencies with namespace format if they exist
  if (item.registryDependencies && item.registryDependencies.length > 0) {
    output.registryDependencies = item.registryDependencies.map(
      (dep: string) => {
        // Convert old format to new namespace format
        const depName = dep.split("/").pop()
        return `@ottoui/${depName}`
      }
    )
  }

  // Add devDependencies if they exist
  if (item.devDependencies) {
    output.devDependencies = item.devDependencies
  }

  // Add tailwind config if it exists
  if (item.tailwind && typeof item.tailwind === 'object' && 'config' in item.tailwind) {
    const tailwindConfig = item.tailwind as { config?: Record<string, unknown> }
    if (tailwindConfig.config && Object.keys(tailwindConfig.config).length > 0) {
      output.tailwind = item.tailwind
    }
  }

  // Process each file in the registry item
  item.files.forEach((file) => {
    let sourceFilePath: string = ""

    // Skip files from _helpers folder
    if (file.path.includes("_helpers")) {
      return
    }

    // Get the file name without prefix
    const fileName = file.path.split("/").pop()

    // Determine target path based on file type
    let targetPath = ""
    if (file.type === "registry:ui") {
      const componentPath = file.path.replace("ottoui/", "")
      console.log("componentPath", componentPath)
      sourceFilePath = path.join(
        baseDir,
        "src",
        "components",
        "ottoui",
        "ui",
        `${componentPath}.tsx`
      )
      targetPath = `components/ottoui/ui/${fileName}.tsx`
    } else if (file.type === "registry:block") {
      const examplePath = file.path.replace("ottoui/", "")
      sourceFilePath = path.join(
        baseDir,
        "src",
        "components",
        "ottoui",
        `${examplePath}.tsx`
      )
      targetPath = `components/ottoui/examples/${fileName}.tsx`
    } else if (file.type === "registry:hook") {
      const hookPath = file.path.replace("hooks/", "")
      sourceFilePath = path.join(
        baseDir,
        "src",
        "components",
        "ottoui",
        "hooks",
        `${hookPath}.ts`
      )
      targetPath = `hooks/${fileName}.ts`
    } else if (file.type === "registry:lib") {
      const utilPath = file.path.replace("utils/", "")
      sourceFilePath = path.join(
        baseDir,
        "src",
        "components",
        "ottoui",
        "utils",
        `${utilPath}.ts`
      )
      targetPath = `lib/utils/${fileName}.ts`
    }

    if (sourceFilePath !== "") {
      const content = getSourceContent(sourceFilePath)
      if (content) {
        // Generate safe file path without leading slash
        const safePath = file.path.startsWith("/")
          ? file.path.slice(1)
          : file.path
        const pathWithExt =
          file.type === "registry:ui" || file.type === "registry:block"
            ? `${safePath}.tsx`
            : `${safePath}.ts`

        // Fix import paths for cn utility
        let processedContent = content
        if (needsCnUtility && file.type === "registry:ui") {
          // Replace various cn import paths with the absolute path using @/lib/utils alias
          processedContent = processedContent
            .replace(
              /import { cn } from "\.\.\/utils\/cn"/g,
              'import { cn } from "@/lib/utils/cn"'
            )
            .replace(
              /import { cn } from "@\/components\/ottoui\/utils\/cn"/g,
              'import { cn } from "@/lib/utils/cn"'
            )
            .replace(
              /import { cn } from "\.\.\/\.\.\/utils\/cn"/g,
              'import { cn } from "@/lib/utils/cn"'
            )
        }

        output.files.push({
          path: pathWithExt,
          content: processedContent,
          type: file.type,
          target: targetPath,
        })
      }
    }
  })

  return output
}

function extractCssVars(css: string, selector: string): Record<string, string> {
  // Extracts CSS variables from a block like :root or .dark
  const regex = new RegExp(`${selector}\\s*{([\\s\\S]*?)}\\s*`, "m")
  const match = css.match(regex)
  if (!match) return {}
  const vars: Record<string, string> = {}
  const lines = match[1].split("\n")
  for (const line of lines) {
    const varMatch = line.match(/--([\w-]+):\s*([^;]+);/)
    if (varMatch) {
      vars[varMatch[1]] = varMatch[2].trim()
    }
  }
  return vars
}

function buildThemeRegistryItem() {
  const cssPath = path.join(__dirname, "..", "app", "styles", "ottoui.css")
  const css = fs.readFileSync(cssPath, "utf-8")
  const lightVars = extractCssVars(css, ":root")
  const darkVars = extractCssVars(css, ".dark")
  return {
    $schema: "https://ui.shadcn.com/schema/registry-item.json",
    name: "custom-theme",
    type: "registry:theme",
    cssVars: {
      light: lightVars,
      dark: darkVars,
    },
  }
}

function buildSourceFiles() {
  // Read the registry
  const registry = JSON.parse(fs.readFileSync(registryJsonPath, "utf-8"))

  // Process each item in the registry
  Object.entries(registry).forEach(([name, item]) => {
    const sourceFile = processRegistryItem(name, item as RegistryItem)

    // Write all items to the registry directory
    const outputPath = path.join(registryOutputDir, `${name}.json`)
    fs.writeFileSync(outputPath, JSON.stringify(sourceFile, null, 2))
    console.log(`Generated source file for: ${name}`)
  })

  // Add custom theme registry item
  const themeItem = buildThemeRegistryItem()
  const themeOutputPath = path.join(registryOutputDir, "custom-theme.json")
  fs.writeFileSync(themeOutputPath, JSON.stringify(themeItem, null, 2))
  console.log("Generated custom theme registry file.")

  console.log("Source files generation completed.")
}

buildSourceFiles()
