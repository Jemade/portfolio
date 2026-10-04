# Engineering notes: portfolio

## Purpose and scope

Python and JavaScript engineering portfolio. This repository is an independently inspectable project; customer adoption, production scale and commercial readiness are not claimed without evidence.

## Request and data flow

Static HTML content and assets → CSS layout and browser behavior → GitHub Pages deployment.

## Implementation map

Primary implementation and review locations: `index.html`, `style.css`, `script.js`, `assets`. Dependency manifests and `.github/workflows/` specify installation and automated checks. Read the source for exact contracts and data models.

## Local verification

From `.` in a configured virtual environment:

```sh
python scripts/repository_check.py
python -m http.server 8000
```

From the repository root, run `python scripts/repository_check.py` for documentation and tracked-file checks. CI evidence is available in [GitHub Actions](https://github.com/Jemade/portfolio/actions). Green hygiene checks alone do not mean application tests passed.

## Decisions and boundaries

Static presentation rather than a backend product. Fonts and icons depend on external providers. Experience claims are owner-supplied; engineering projects should link to verifiable source and limitations.

Use the README's current run instructions and configuration examples. Keep provider credentials outside Git. Test changes against controlled fixtures before enabling external services. Health checks indicate process/service state, not end-to-end correctness.

## Review and operational evidence

[Review checklist](REVIEW_CHECKLIST.md) distinguishes repository evidence from outstanding human and deployment validation. Report measured workload, environment and method with any performance claim. Document incident fixes through reproducible issues and regression tests; do not invent user counts or peer reviews.

## Reuse and licensing

No repository-wide reuse license has been selected. Public visibility alone does not grant an open-source reuse license. Ownership and third-party asset rights must be confirmed before licensing this project.
