// Name: Template
// Description: Show code snippets
// Author: wuwe1
// Twitter: @wuwe19

const templates = {
  bash: `
#!/usr/bin/env bash

CLI=$(basename "\${BASH_SOURCE[0]}")

usage() {
    cat <<-EOF
Usage: $CLI <arg1>

> Description

Arguments:
    <arg1>               first argument

Options:
    -h, --help           output usage
    -v, --version        output version
    --verbose            enable debug
EOF
    exit
}

version() {
    echo "$CLI v0.1.0"
    exit
}

while [[ $# -gt 0 ]]; do
  case "\\$1" in
    -h | --help)
      echo 'usage'
      ;;
    -v | --version)
      version
      ;;
    --verbose)
      set -x
      shift
      ;;
  esac
done
`
}
const names = Object.keys(templates)
const n = await arg("Template Name", names)
await template(`${templates[n]}`)
