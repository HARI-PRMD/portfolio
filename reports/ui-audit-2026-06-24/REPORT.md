# Portfolio UI Audit - 2026-06-24

## Scope

- Surface: portfolio home page at `http://127.0.0.1:3000`
- Viewports tested in Browser: desktop Browser viewport reported as `1116x697`; mobile Browser viewport reported as `302x654`; modal scroll regression retested at `1440x900` and `390x844`
- Coverage: hero, header navigation, mobile menu, section jumps, horizontal card rows, project card buttons, project modal, responsive overflow, runtime warnings, and production build

## Evidence

Accepted visual evidence:

- `screenshots/01-desktop-hero-before.png`
- `screenshots/02-desktop-experience-before.png`
- `screenshots/07-mobile-hero-before.png`
- `screenshots/08-mobile-menu-before.png`
- `screenshots/12-desktop-hero-after.png`
- `screenshots/14-mobile-hero-after.png`
- `screenshots/15-mobile-menu-after.png`

Runtime evidence:

- `before-runtime-metrics.json`
- `after-runtime-metrics.json`
- `modal-scroll-retest.json`

Browser screenshot limitation:

- Browser screenshot capture repeatedly returned blank white or black frames after scrolling, even while DOM metrics confirmed visible headings, cards, buttons, and modal content. The affected files are kept in `screenshots/` for traceability, but they are not treated as accepted visual evidence.

## Audit Steps

1. Desktop hero and header: initially usable but the nav could overflow and the header was not anchored with `top-0`. Health after fix: good.
2. Desktop section navigation: original nav used clickable paragraphs, so it was not keyboard-native. Health after fix: good; nav uses anchors and `aria-current`.
3. Desktop horizontal overflow: original hero columns could exceed the viewport. Health after fix: good; `scrollWidth === clientWidth`.
4. Mobile hero: original first viewport was dominated by the pattern and pushed the name/CTA low. Health after fix: good; name, intro, and `View Projects` are visible.
5. Mobile menu: original menu button had no accessible name and menu items were paragraph-driven. Health after fix: good; button is named, items are menu links, and Projects navigation scrolls.
6. Horizontal card rows: original rows updated React state on scroll to scale/grayscale cards, creating unnecessary motion and work. Health after fix: good; CSS scroll snap remains, JS scroll-state code removed.
7. Project cards: original buttons all announced as `View Details` and hover-only affordances were weak on touch/keyboard. Health after fix: good; labels include project titles and focus/touch affordances are visible.
8. Project modal: original mobile typography was cramped and modal layering could sit under the fixed header. Follow-up found a double-scroll state because the fixed modal wrapper and the modal panel both scrolled. Health after fix: good; modal opens, close button works, headings are smaller, and only the modal panel scrolls.
9. Runtime warnings: original dev server reported Next image ratio warnings for remote logos. Health after fix: good; fresh reload produced no new image warnings.

## Main Fixes

- Added stable black backgrounds on `html`, `body`, and `#__next`; added reduced-motion handling.
- Reworked layout landmarks: one app wrapper, one main content region, and a keyboard skip link.
- Converted desktop nav to semantic anchors and mobile menu items to navigable links.
- Removed disabled resume CTAs and replaced the hero CTA with a functional `View Projects` link.
- Fixed hero overflow by making the pattern column use remaining flex space.
- Removed `useScrollSnap` and all scroll-driven card scale state.
- Made card widths stable with responsive constraints.
- Added unique project button labels and visible focus/touch affordances.
- Made technology labels visible on mobile.
- Improved modal z-index, sizing, focus states, external link `rel`, and mobile markdown heading sizes.
- Localized logo and technology image assets while preserving Next/Image usage, eliminating remote-image fragility and dev warnings.
- Removed the extra modal wrapper scroll surface; the fixed overlay is hidden overflow and the modal panel is the single scrollable container.

## Verification

- `pnpm build`: passed.
- `pnpm lint`: blocked by project tooling. `next lint` is invalid under this Next version, and direct ESLint is blocked by ESLint 9 expecting flat config while the repo has `.eslintrc.cjs`.
- Browser desktop retest: no horizontal overflow, one H1, nav links fit, Projects link scrolls, project buttons have unique accessible names.
- Browser mobile retest: no horizontal overflow, menu button named, Projects menu link scrolls, Teamer modal opens, close button closes it.
- Browser modal scroll retest: desktop and mobile Teamer modal have exactly one scrollable element, the modal panel; center-wheel scroll changes panel `scrollTop`; right-edge wheel does not move the mobile page; closing restores document overflow.
- Fresh dev-server reload after final image changes: no new image ratio warnings.
