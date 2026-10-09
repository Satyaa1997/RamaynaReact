$files = Get-ChildItem .\src -Recurse -File |
  Where-Object { $_.Extension -in @(".js",".jsx",".ts",".tsx") }

$errors = @()

foreach ($file in $files) {
  $content = Get-Content $file.FullName -Raw
  $matches = [regex]::Matches(
    $content,
    '(?:from\s*|import\s*\()\s*["''](\.[^"'']+)["'']'
  )

  foreach ($m in $matches) {
    $rel = $m.Groups[1].Value
    $base = Join-Path $file.DirectoryName $rel

    $candidates = @(
      $base,
      "$base.js", "$base.jsx", "$base.ts", "$base.tsx",
      "$base.json", "$base.css", "$base.png", "$base.PNG",
      "$base.jpg", "$base.jpeg", "$base.webp", "$base.avif",
      "$base.jfif", "$base.svg", "$base.mp4", "$base.pdf"
    )

    $found = $false
    foreach ($candidate in $candidates) {
      if (Test-Path -LiteralPath $candidate -PathType Leaf -ErrorAction SilentlyContinue) {
        $found = $true
        break
      }
    }

    if (-not $found) {
      $errors += [PSCustomObject]@{
        File = $file.FullName.Replace((Get-Location).Path + "\", "")
        Import = $rel
        Status = "NOT FOUND"
      }
    }
  }
}

if ($errors.Count -eq 0) {
  Write-Host "No missing relative imports found by this basic scan." -ForegroundColor Green
} else {
  $errors | Format-Table -AutoSize
}
