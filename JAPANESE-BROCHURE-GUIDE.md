# Japanese Brochure Translation & Implementation Guide

**Version:** 1.0
**Last Updated:** February 2026
**Project:** PolicyHub Japanese Market Brochure
**Purpose:** Comprehensive guide for translating and implementing Japanese B2B SaaS brochures

---

## Table of Contents

1. [Translation Principles](#translation-principles)
2. [Tone & Language Guidelines](#tone--language-guidelines)
3. [Technical Implementation](#technical-implementation)
4. [Japanese Text Handling](#japanese-text-handling)
5. [Design System Adaptations](#design-system-adaptations)
6. [Content Structure](#content-structure)
7. [CTA Strategy](#cta-strategy)
8. [Quality Checklist](#quality-checklist)

---

## Translation Principles

### 1. Script Balance (文字バランス)

Use a natural mix of all three Japanese scripts:

- **漢字 (Kanji):** Use only 常用漢字 (jōyō kanji) - standard daily-use characters
- **ひらがな (Hiragana):** For grammatical particles, verb endings, and common words
- **カタカナ (Katakana):** For established loanwords and technical terms

**Target readability:** 日経ビジネス (Nikkei Business) or 東洋経済 (Toyo Keizai) style

#### Kanji Usage Guidelines

**Prefer hiragana for these common verbs:**
- ✅ `できる` (not 出来る)
- ✅ `ください` (not 下さい)
- ✅ `いただく` (not 頂く)

**Avoid archaic kanji compounds:**
- ❌ `致します` → ✅ `いたします`
- ❌ `下記` → ✅ `以下`

### 2. Formality Level

**Business Polite Form (丁寧語):**
- Use です/ます form throughout
- Use `弊社` or company name when referring to your own company
- Avoid overly humble or excessively formal expressions

### 3. Technical Terms

**Established Loanwords (Keep in Katakana):**
- システム (system)
- ソリューション (solution)
- プラットフォーム (platform)
- ダッシュボード (dashboard)
- ワークフロー (workflow)
- コンプライアンス (compliance)
- エンゲージメント (engagement)

**When to use Japanese vs. Katakana:**
- If the term has both options, use whichever is more standard in the industry
- For newer tech terms, use the most commonly adopted convention
- Consistency is key - pick one and stick with it throughout

---

## Tone & Language Guidelines

### Japanese B2B SaaS Tone Standards

**Reference Companies:** Salesforce Japan, Sansan, SmartHR, freee, Money Forward

#### Key Differences from Western Marketing

| Aspect | Western (Too Aggressive) | Japanese (Appropriate) |
|--------|-------------------------|------------------------|
| **Headline tone** | "Transform compliance!" | "Improve efficiency" (効率化) |
| **Problem framing** | "Fundamentally broken" | "Common challenges" (よくある課題) |
| **Value proposition** | "Revolutionary change" | "Improvement/enhancement" (改善) |
| **CTA language** | "Join the revolution!" | "Can be achieved" (実現できます) |

#### Translation Tone Rules

**1. Avoid Aggressive Language:**

❌ **Too Direct/Aggressive:**
- `変革` (revolutionary transformation)
- `根本的な問題` (fundamental problem)
- `完全に変える` (completely change)
- `すべてを` (everything/all)
- `深刻な影響を与える` (cause serious impact)

✅ **Appropriate:**
- `効率化` (streamline/improve efficiency)
- `よくある課題` (common challenges)
- `改善する` (improve)
- `一元管理を実現` (achieve unified management)
- `大きな影響を及ぼす` (have significant impact)

**2. Avoid Translation-ese (翻訳調):**

Translation-ese sounds like literal English translation, not natural Japanese.

❌ **Translation-ese Patterns:**
```
❌ ～により～を実現します (overused passive constructions)
❌ AIを活用した作成支援から、確実な理解度確認、継続的なコンプライアンス監視まで、すべてを一元管理できます
   (long noun chains without breathing room)
❌ 完全なバージョン管理機能により (sounds like "by means of")
```

✅ **Natural Japanese:**
```
✅ AI活用の作成支援から理解度確認、継続的なコンプライアンス監視まで一元管理を実現します
   (more concise, natural flow)
✅ バージョン管理を完全サポート (more direct)
✅ ～で～を実現 / ～が可能です (varied sentence patterns)
```

**3. Vary Sentence Endings:**

Don't overuse `～ます` endings. Mix with:
- `～を実現` (nominal ending)
- `～が可能です`
- `～を搭載`
- Simple periods after key statements

**4. Use Concrete Action Verbs:**

Instead of vague `実現します` (realize/achieve), use specific verbs:
- `効率化します` (improve efficiency)
- `短縮します` (reduce/shorten)
- `向上させます` (enhance)
- `削減します` (cut/reduce)
- `対応します` (support/handle)

---

## Technical Implementation

### CSS for Japanese Text

#### Essential CSS Properties

```css
body {
    font-family: var(--font-english); /* Fallback to system fonts */
    line-break: strict;  /* Japanese line-breaking rules */
    overflow-wrap: break-word;  /* Allow wrapping between words */
}

h1, h2, h3 {
    /* Progressive enhancement for modern browsers (Chrome 119+) */
    word-break: auto-phrase;  /* AI-powered phrase detection */
    text-wrap: balance;  /* Balanced line lengths */

    /* Baseline for all browsers */
    line-break: strict;
    overflow-wrap: break-word;
}
```

#### Understanding Japanese Line-Breaking Properties

**1. `line-break: strict`**
- Prevents breaks before small kana (っ, ょ, ャ)
- Prevents breaks before prolonged sound mark (ー)
- Follows traditional Japanese typography rules
- **Browser support:** Excellent (all modern browsers)

**2. `word-break: auto-phrase` (Chrome 119+)**
- Uses Google's BudouX ML library
- Detects Japanese phrase boundaries (文節/bunsetsu)
- Breaks at natural points, not mid-word
- **Browser support:** Chrome/Edge only (as of 2024)
- **Fallback:** Degrades gracefully to `line-break: strict`

**3. `text-wrap: balance`**
- Balances line lengths in multi-line text (max 6-10 lines)
- **Issue:** Can cause awkward breaks in CJK text when used alone
- **Solution:** Combine with `word-break: auto-phrase`

**4. `overflow-wrap: break-word`**
- Allows wrapping between words when needed
- Prevents overflow on small screens

### Font Stack Recommendations

```css
:root {
    --font-japanese: 'Hiragino Sans', 'Yu Gothic', 'Meiryo',
                     'Noto Sans JP', sans-serif;
}
```

### Color Palette for Japanese Design

Adapt the color scheme to be more refined and professional:

```css
:root {
    /* Japanese-inspired palette */
    --indigo: #1e3a5f;        /* Deep indigo (navy) */
    --indigo-dark: #0a0f1a;   /* Almost black */
    --vermillion: #e63946;     /* Vermillion red (accent) */
    --gold: #d4af37;           /* Gold (highlights) */
    --cream: #f5f7fa;          /* Soft background */
    --gray-800: #1a1a1a;       /* Text */
    --gray-600: #64748b;       /* Secondary text */
}
```

---

## Japanese Text Handling

### Problem: Text Breaking Mid-Word

Japanese text can break at any character by default. This causes issues with:
- Long katakana loanwords (コンプライアンス)
- Compound nouns (変革, ポリシー管理)
- Technical terms

### Solution: Hybrid Approach

**Combine CSS rules + Manual protection for critical words**

#### 1. CSS Layer (Automatic)

```css
/* Progressive enhancement */
h1, h2, h3 {
    word-break: auto-phrase;  /* Modern browsers */
    text-wrap: balance;
    line-break: strict;       /* Baseline */
    overflow-wrap: break-word;
}
```

#### 2. HTML Layer (Manual Protection)

Wrap critical katakana words with `<span class="nowrap">`:

```html
<h1>
  <span class="nowrap">ポリシー管理</span>を効率化
</h1>

<p>
  <span class="nowrap">コンプライアンス</span>状況の可視化も十分とは言えません。
</p>
```

**CSS for `.nowrap`:**

```css
.nowrap {
    white-space: nowrap;
    display: inline-block;
}
```

#### Words That Must Be Protected

**Always wrap these with `<span class="nowrap">`:**

- **Long katakana loanwords (6+ characters):**
  - コンプライアンス, プラットフォーム, ワークフロー
  - ダッシュボード, エンゲージメント, インタラクティブ
  - ゲーミフィケーション, セマンティック, リアルタイム

- **Important compound nouns:**
  - 変革, ポリシー管理, バージョン管理
  - 承認フロー, ライフサイクル

- **Multi-word technical terms:**
  - シングルサインオン, エンドツーエンド, マルチチャネル

### Why This Hybrid Approach Works

✅ **Modern browsers (Chrome 119+):** BudouX AI handles most cases automatically
✅ **Older browsers:** `line-break: strict` provides baseline protection
✅ **Critical words:** `<span class="nowrap">` guarantees they never break
✅ **Responsive:** Works across all screen sizes
✅ **Future-proof:** Gets better as browsers improve

---

## Design System Adaptations

### Layout Considerations

Japanese text typically requires **1.5x the space** of English text.

**Adjustments made:**

1. **Heading font sizes:** Slightly smaller than English versions
   ```css
   h1 { font-size: clamp(1.875rem, 4.5vw, 3rem); }
   /* vs English: clamp(2rem, 5vw, 3.5rem) */
   ```

2. **Line height:** Increased for readability
   ```css
   body { line-height: 1.75; }  /* vs 1.6 for English */
   ```

3. **Container padding:** More generous spacing
   ```css
   .container { padding: var(--space-2xl); }
   ```

### UI Component Adaptations

#### Buttons

Japanese text in buttons is typically longer. Use flexible widths:

```css
.btn {
    padding: 12px 30px;  /* More horizontal padding */
    white-space: nowrap; /* Prevent button text from wrapping */
}
```

#### Cards & Modules

Allow more vertical space for Japanese text:

```css
.module {
    padding: var(--space-2xl);  /* Increased from space-xl */
}
```

### Competitive Comparison Section

**Key styling for Japanese version:**

```css
.competitor-card h4 {
    font-family: var(--font-english);  /* Keep English for category names */
    font-size: 0.875rem;
    text-transform: uppercase;
    border-bottom: var(--border-medium) solid var(--vermillion);
}

.competitor-card.highlight {
    background: var(--indigo-dark);  /* Dark navy instead of black */
    border-color: var(--gold);       /* Gold instead of blue */
}

.competitor-card .strength::before {
    content: '✓ ';
    color: var(--gold);  /* Gold checkmarks */
}
```

---

## Japanese Market Design System Principles

### Visual Design Philosophy for Japanese B2B

Japanese design aesthetics differ significantly from Western approaches. Understanding these principles is crucial for creating brochures that resonate with Japanese enterprise clients.

#### Core Design Values

**1. 間 (Ma) - Negative Space**
- Japanese design emphasizes empty space as an active design element
- More breathing room between elements than Western designs
- White space = sophistication and professionalism
- Avoid cramped layouts even when content is dense

**2. 調和 (Chōwa) - Harmony**
- Balance and subtle elegance over bold statements
- Refined color palettes, not aggressive contrasts
- Gentle gradients and soft shadows
- Everything should feel cohesive and considered

**3. 簡素 (Kanso) - Simplicity**
- Clean, uncluttered interfaces
- Essential elements only, no decorative flourishes
- Precision and attention to detail
- Less is more, but what remains must be perfect

### Color Psychology for Japanese Markets

#### Preferred Color Palettes

**Primary Colors:**

| Color Family | Hex Codes | Meaning in Japanese Culture | B2B Usage |
|--------------|-----------|----------------------------|-----------|
| **Navy/Indigo (藍色)** | `#1e3a5f`, `#2c5282` | Trust, stability, professionalism | Primary brand color, headers, key elements |
| **Vermillion/Red (朱色)** | `#e63946`, `#dc2626` | Energy, passion, attention | Accents, CTAs, important highlights |
| **Gold (金色)** | `#d4af37`, `#f59e0b` | Premium, quality, achievement | Success indicators, highlights, badges |
| **Soft Gray (灰色)** | `#64748b`, `#94a3b8` | Neutrality, sophistication | Text, borders, subtle backgrounds |
| **Cream/Ivory** | `#f5f7fa`, `#fafbfc` | Calm, clean, professional | Backgrounds, cards, surfaces |

**Colors to Use Carefully:**

❌ **Avoid Pure Black (#000000)**
- Too harsh for Japanese aesthetic
- Use deep indigo or charcoal instead: `#0a0f1a`

❌ **Avoid Bright Neon Colors**
- Fluorescent pink, electric blue, etc.
- Perceived as cheap or unprofessional
- Use muted, sophisticated versions instead

⚠️ **Use Green Thoughtfully**
- Bright green can feel informal
- Use emerald/forest green for data/charts: `#10b981`
- Avoid lime green in corporate contexts

#### Color Combination Patterns

**Conservative Corporate (Most Common):**
```css
:root {
    --primary: #1e3a5f;      /* Navy blue */
    --accent: #e63946;        /* Vermillion */
    --success: #059669;       /* Forest green */
    --text: #1a1a1a;         /* Near black */
    --background: #ffffff;    /* Pure white */
}
```

**Modern Refined:**
```css
:root {
    --primary: #2563eb;       /* Modern blue */
    --accent: #d4af37;        /* Gold */
    --secondary: #8b5cf6;     /* Purple */
    --text: #334155;          /* Slate gray */
    --background: #f8fafc;    /* Off white */
}
```

**Traditional Elegant:**
```css
:root {
    --primary: #4a5568;       /* Charcoal */
    --accent: #dc2626;        /* Red */
    --highlight: #f59e0b;     /* Amber */
    --text: #1f2937;          /* Dark gray */
    --background: #fafafa;    /* Light gray */
}
```

### Typography for Japanese Markets

#### Font Selection

**Japanese Font Stack:**

```css
body {
    font-family:
        'Hiragino Sans',          /* macOS standard */
        'Hiragino Kaku Gothic ProN',
        'Yu Gothic',               /* Windows 10+ */
        'YuGothic',
        'Meiryo',                  /* Windows fallback */
        'Noto Sans JP',            /* Google Fonts */
        sans-serif;
}
```

**For Headings (optional serif for elegance):**

```css
h1, h2 {
    font-family:
        'Hiragino Mincho ProN',   /* Serif for elegance */
        'Yu Mincho',
        'YuMincho',
        'Noto Serif JP',
        serif;
}
```

#### Font Size Guidelines

Japanese text requires slightly larger sizes for readability:

| Element | Western Size | Japanese Size | Reason |
|---------|-------------|---------------|--------|
| Body text | 16px | 16-18px | Complex characters need clarity |
| Small text | 12px | 14px | Minimum for readability |
| Headings H1 | 36-48px | 32-42px | More compact vertical space |
| Headings H2 | 28-32px | 26-30px | Better balance with kanji |
| Buttons | 14px | 15-16px | Text often longer |

#### Line Height & Spacing

```css
body {
    line-height: 1.75;        /* vs 1.6 for English */
    letter-spacing: 0.02em;   /* Subtle spacing helps readability */
}

h1, h2, h3 {
    line-height: 1.4;         /* vs 1.2 for English */
    letter-spacing: 0.01em;
}
```

### Layout Patterns

#### Grid Systems

**8-point grid system** is standard, but Japanese designs often use:

```css
:root {
    --space-xs: 8px;
    --space-sm: 12px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
}
```

**Key principle:** More generous spacing than Western equivalents (1.2-1.5x)

#### Common Layout Patterns

**1. Vertical Emphasis**
- Japanese users scan top-to-bottom more than left-to-right
- Important information at the top
- Progressive disclosure as you scroll

**2. Card-Based Layouts**
- Information grouped in clearly defined cards
- Subtle borders and shadows (not heavy)
- Example:
  ```css
  .card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.08);
      padding: 24px;
  }
  ```

**3. Clear Hierarchy**
- Visual hierarchy must be obvious
- Size, weight, and color establish importance
- No ambiguity about what to read first

### UI Component Design

#### Buttons

**Japanese Button Best Practices:**

```css
.btn {
    /* Rounded but not pill-shaped */
    border-radius: 6px;           /* Not 999px */

    /* Generous padding for longer text */
    padding: 12px 32px;

    /* Subtle shadows, not heavy */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);

    /* Soft transitions */
    transition: all 0.3s ease;
}

.btn:hover {
    /* Lift effect, not dramatic */
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.15);
}
```

**Button Hierarchy:**

Primary (most important action):
```css
.btn-primary {
    background: #2563eb;
    color: white;
    border: none;
}
```

Secondary (alternative action):
```css
.btn-secondary {
    background: white;
    color: #2563eb;
    border: 2px solid #2563eb;
}
```

#### Cards & Containers

**Subtle, not dramatic:**

```css
.card {
    background: #ffffff;
    border: 1px solid #e5e7eb;      /* Soft border, not bold */
    border-radius: 8px;              /* Subtle curves */
    box-shadow: 0 1px 3px rgba(0,0,0,0.08);  /* Very subtle */
    padding: 32px;                   /* Generous padding */
    transition: all 0.3s ease;
}

.card:hover {
    border-color: #cbd5e1;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);  /* Still subtle */
    transform: translateY(-2px);     /* Gentle lift */
}
```

#### Icons & Graphics

**Icon Style Preferences:**

✅ **Preferred:**
- Line icons (outline style)
- Simple, clean, minimal
- Consistent stroke width (2px)
- No gradients or 3D effects

❌ **Avoid:**
- Heavy filled icons
- Skeuomorphic designs
- Overly decorative icons
- Inconsistent styles

**Icon Sizing:**

```css
.icon-sm { width: 16px; height: 16px; }
.icon-md { width: 24px; height: 24px; }
.icon-lg { width: 32px; height: 32px; }
```

### Imagery & Photography

#### Photo Selection

**Japanese B2B prefers:**

✅ **Professional office environments**
- Clean, modern offices
- Japanese business settings (tatami, shoji doors optional for traditional)
- Team collaboration scenes
- Technology in use

✅ **People imagery:**
- Professional attire (suits are still common)
- Diversity but authentic to Japanese workplace
- Serious, focused expressions (not overly casual)
- Natural lighting, not overly staged

❌ **Avoid:**
- Overly casual "Silicon Valley" style
- Stock photos that look too Western
- Forced smiles or exaggerated emotions
- Cluttered or chaotic backgrounds

#### Image Treatment

```css
img {
    /* Subtle rounded corners */
    border-radius: 8px;

    /* Optional subtle border */
    border: 1px solid rgba(0,0,0,0.08);
}
```

### Animations & Interactions

#### Animation Principles

**Subtle, purposeful, never distracting:**

```css
/* Preferred easing */
transition: all 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);

/* Gentle hover effects */
.element:hover {
    transform: translateY(-2px);    /* Not -10px */
    transition-duration: 0.2s;      /* Quick response */
}

/* Fade transitions */
.fade-in {
    opacity: 0;
    animation: fadeIn 0.4s ease forwards;
}

@keyframes fadeIn {
    to { opacity: 1; }
}
```

#### Micro-interactions

**Button clicks:**
```css
.btn:active {
    transform: translateY(0px);     /* Press down */
    box-shadow: 0 1px 2px rgba(0,0,0,0.1);
}
```

**Card hovers:**
```css
.card:hover {
    border-color: var(--primary);
    box-shadow: 0 8px 16px rgba(0,0,0,0.08);
}
```

### Trust & Credibility Signals

#### Badges & Certifications

Display prominently but tastefully:

```css
.trust-badge {
    background: #f8fafc;
    border: 2px solid #2563eb;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
}
```

**Common certifications for Japanese market:**
- SOC 2 Type 2
- ISO 27001
- プライバシーマーク (PrivacyMark - Japan specific)
- ISMS認証

#### Social Proof

**Company logos (client list):**
- Grayscale or muted colors
- Uniform sizing
- Clean grid layout
- No flashy animations

```css
.client-logo {
    filter: grayscale(100%);
    opacity: 0.6;
    transition: all 0.3s ease;
}

.client-logo:hover {
    filter: grayscale(0%);
    opacity: 1;
}
```

### Mobile Responsiveness

#### Japanese Mobile Design

**Key considerations:**

1. **Thumb-friendly hit areas:**
   ```css
   .mobile-btn {
       min-height: 48px;
       min-width: 48px;
       padding: 16px;
   }
   ```

2. **Vertical navigation:**
   - Stack elements vertically on mobile
   - No horizontal scrolling
   - Clear section breaks

3. **Text size minimum:**
   ```css
   @media (max-width: 768px) {
       body {
           font-size: 16px;  /* Never smaller */
       }
   }
   ```

### Performance & Loading

**Japanese users expect:**
- Fast loading (< 3 seconds)
- Smooth animations (60fps)
- No janky scrolling
- Progressive loading with skeleton screens

```css
/* Skeleton loading */
.skeleton {
    background: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
    );
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
```

### Accessibility (アクセシビリティ)

**Japanese accessibility standards:**

1. **Color contrast:** WCAG AA minimum (4.5:1)
2. **Focus indicators:** Clear and visible
   ```css
   :focus {
       outline: 2px solid #2563eb;
       outline-offset: 2px;
   }
   ```
3. **Alt text:** In Japanese for Japanese sites
4. **Keyboard navigation:** Full support expected

### Design Systems Summary

**Quick Reference Checklist:**

- [ ] Color palette uses refined, professional colors (navy, gray, subtle accents)
- [ ] Typography uses standard Japanese fonts with adequate sizing
- [ ] Line height 1.75+ for body text
- [ ] Generous spacing (1.5x Western standards)
- [ ] Subtle shadows and borders (not dramatic)
- [ ] Rounded corners 6-12px (not pill-shaped)
- [ ] Gentle animations (0.3s, subtle transforms)
- [ ] Card-based layouts with clear hierarchy
- [ ] Mobile-optimized with 48px+ touch targets
- [ ] Trust signals displayed professionally
- [ ] Icons are line-style, consistent
- [ ] Photography is professional and culturally appropriate

---

## Content Structure

### Section Naming Conventions

Based on Japanese B2B SaaS standards (Salesforce Japan, SmartHR, freee):

| Section | Japanese | English Equivalent |
|---------|----------|-------------------|
| Navigation labels | 課題, ソリューション, 導入効果 | Challenges, Solutions, Results |
| Problem section | 現状の課題 | Current Challenges |
| Solution section | ソリューション | Solution |
| Results section | 導入効果 | Implementation Results |
| Competitive | PolicyHubが選ばれる理由 | Why PolicyHub Wins |
| Trust/Compliance | エンタープライズセキュリティとコンプライアンス | Enterprise Security & Compliance |
| CTA section | ポリシー管理の効率化を始めませんか | Ready to Streamline... |

### Module Naming Pattern

**Format:** `<Noun> + <Category>`

Examples:
- ポリシー作成・共同編集 (Policy Authoring & Collaboration)
- 承認ワークフロー管理 (Approval Workflow Management)
- 分析・レビュー管理 (Analytics & Review Management)

### Metrics & Statistics

**Number formatting:**
- Use full-width numbers for emphasis: `95%以上`
- Use half-width for tables and body text: `95%以上`
- Time periods: `8〜12週間` (use 〜 not -)
- Currency: `¥1億円` or `1億円`

---

## CTA Strategy

### Japanese B2B SaaS CTA Best Practices

**Critical Finding:** Japanese B2B buyers expect "Download/Request Documents" (資料請求) as the primary CTA.

**Cultural Context:**
1. **Ringi-sho process:** Buyers need materials to share internally for approvals
2. **Risk aversion:** Prefer to review documentation before talking to sales
3. **Group decision-making:** Need shareable materials for stakeholders

### CTA Button Priority

**Standard Japanese B2B SaaS pattern:**

```html
<!-- Priority order for Japanese market -->
<a href="mailto:info@company.com?subject=資料請求" class="btn">
  資料請求
</a>
<a href="mailto:info@company.com?subject=デモのご依頼" class="btn btn-outline">
  デモのご依頼
</a>
<a href="mailto:info@company.com" class="btn btn-outline">
  お問い合わせ
</a>
```

**However, for this project we used:**

```html
<!-- Simplified 2-button approach -->
<a href="mailto:info@company.com?subject=デモのご依頼" class="btn">
  デモのご依頼
</a>
<a href="https://wa.me/..." class="btn btn-outline">
  お問い合わせ
</a>
```

**Rationale:** Client preference for demo requests over document downloads.

### CTA Language

| Japanese | English | Usage |
|----------|---------|-------|
| 資料請求 | Request Documents | **PRIMARY** in Japanese B2B (if used) |
| デモのご依頼 | Request Demo | Demo inquiry |
| お問い合わせ | Contact Us | General inquiry |
| 無料トライアル | Free Trial | For SaaS with trial option |
| 今すぐ始める | Get Started | For self-service signup |

**Formality note:** Use `ご依頼` (polite request) not `リクエスト` (too casual)

---

## Quality Checklist

### Pre-Launch Translation Review

#### ✅ Terminology Benchmark

Compare against Japanese B2B SaaS standards:

- [ ] CTAs match industry conventions (資料請求, デモのご依頼, お問い合わせ)
- [ ] Section headers follow Japanese naming patterns
- [ ] Technical terms use standard katakana (システム, ソリューション, etc.)
- [ ] Compliance/industry terms match regulatory language

#### ✅ Tone Calibration

- [ ] No overly aggressive language (変革 → 効率化)
- [ ] No overly weak/vague expressions
- [ ] Matches Japanese enterprise tone (modest confidence, not boastful)
- [ ] Avoids translation-ese (翻訳調)

#### ✅ Script Balance

- [ ] Natural mix of 漢字・ひらがな・カタカナ
- [ ] No kanji-heavy sections (difficult to read)
- [ ] No excessive hiragana (unprofessional)
- [ ] Only 常用漢字 used (standard daily-use characters)

#### ✅ Natural Phrasing

- [ ] No awkward literal translations
- [ ] Sentence endings varied (not all ～ます)
- [ ] Noun chains broken up with breathing room
- [ ] Sounds like native Japanese copywriting

#### ✅ Technical Implementation

- [ ] All katakana loanwords wrapped in `<span class="nowrap">`
- [ ] CSS line-breaking properties applied (line-break: strict, word-break: auto-phrase)
- [ ] Responsive design tested on mobile (text doesn't overflow)
- [ ] No mid-word breaks in headings

#### ✅ Visual/Design

- [ ] Japanese text has adequate spacing (1.5x English)
- [ ] Headings don't overflow on mobile
- [ ] Buttons accommodate longer Japanese text
- [ ] Color palette appropriate for Japanese market

---

## Implementation Workflow

### Step 1: Translation Preparation

1. **Audit English content** for tone and structure
2. **Research competitors** in Japanese market (Salesforce Japan, SmartHR, etc.)
3. **Create terminology glossary** for consistency
4. **Identify aggressive language** to soften

### Step 2: Translation

1. **Translate with tone in mind:**
   - Soften aggressive Western marketing language
   - Use modest, professional tone
   - Avoid literal translations

2. **Apply script balance:**
   - Use hiragana for common verbs (できる, ください)
   - Use katakana for established loanwords
   - Use kanji appropriately (avoid archaic forms)

3. **Fix translation-ese:**
   - Break up long noun chains
   - Vary sentence endings
   - Use natural Japanese phrasing

### Step 3: Technical Implementation

1. **Add CSS for Japanese text handling:**
   ```css
   body {
       line-break: strict;
       overflow-wrap: break-word;
   }

   h1, h2, h3 {
       word-break: auto-phrase;
       text-wrap: balance;
       line-break: strict;
       overflow-wrap: break-word;
   }

   .nowrap {
       white-space: nowrap;
       display: inline-block;
   }
   ```

2. **Wrap critical katakana words:**
   ```html
   <span class="nowrap">コンプライアンス</span>
   <span class="nowrap">ライフサイクル</span>
   ```

3. **Test across screen sizes:**
   - Desktop: Check heading lengths
   - Tablet: Verify 2-column layouts
   - Mobile: Ensure no text overflow

### Step 4: Quality Review

1. **Native speaker review** (essential!)
2. **Run through quality checklist** (above)
3. **Cross-browser testing:**
   - Chrome: Verify word-break: auto-phrase works
   - Firefox/Safari: Verify graceful degradation
4. **Mobile testing:** Ensure no mid-word breaks

### Step 5: Wireframe Documentation

Create a reference document with Japanese + English side-by-side:

```html
<div class="jp">日本語テキスト</div>
<div class="en">English Translation</div>
```

This helps stakeholders review and approve content.

---

## Common Pitfalls & Solutions

### Pitfall 1: Direct Translation of Aggressive Marketing Language

❌ **Wrong:**
```
English: "Transform your compliance!"
Japanese: コンプライアンスを変革！
```

✅ **Correct:**
```
English: "Transform your compliance!"
Japanese: コンプライアンスを効率化
(Streamline your compliance)
```

### Pitfall 2: Overuse of Passive Constructions

❌ **Wrong:**
```
完全なバージョン管理機能により、効率的なポリシー作成を実現します
```

✅ **Correct:**
```
バージョン管理などにより効率的なポリシー作成が可能です
```

### Pitfall 3: Long Noun Chains Without Breaks

❌ **Wrong:**
```
バージョン管理の混乱、メールでの承認フロー、形式的な確認作業、コンプライアンス状況の可視化不足といった課題を抱えています。
```

✅ **Correct:**
```
バージョン管理の混乱やメールベースの承認フロー、形式的な確認作業といった課題を抱えています。コンプライアンス状況の可視化も十分とは言えません。
```

### Pitfall 4: Forgetting to Protect Katakana Words

❌ **Wrong:**
```html
<h1>ポリシーコンプライアンスの変革</h1>
<!-- May break as: ポリシーコンプライ / アンスの変革 -->
```

✅ **Correct:**
```html
<h1>
  <span class="nowrap">ポリシー管理</span>を効率化
</h1>
```

### Pitfall 5: Using Wrong CTA for Japanese Market

❌ **Wrong:**
```html
<!-- Western priority -->
<a href="#" class="btn">Request Demo</a>
<a href="#" class="btn">Download Resources</a>
```

✅ **Correct:**
```html
<!-- Japanese priority -->
<a href="#" class="btn">資料請求</a>
<a href="#" class="btn">デモのご依頼</a>
```

---

## Resources & References

### Japanese B2B SaaS Examples

- **Salesforce Japan:** https://www.salesforce.com/jp/
- **SmartHR:** https://smarthr.jp/
- **Sansan:** https://jp.sansan.com/
- **freee:** https://www.freee.co.jp/
- **Money Forward:** https://biz.moneyforward.com/

### Technical References

- **Chrome DevBlog - CSS International Features:** https://developer.chrome.com/blog/css-i18n-features
- **W3C Japanese Line Breaking Tests:** https://w3c.github.io/i18n-tests/results/line-breaks-jazh
- **MDN: line-break Property:** https://developer.mozilla.org/en-US/docs/Web/CSS/line-break
- **BudouX (Google's ML line-breaking):** https://github.com/google/budoux

### Cultural Context

- **Japan's Unique CTA: "Download Documents":** https://nihonium.io/japans-unique-call-to-action-download-documents/
- **Lead Generation in Japan:** https://scalingyourcompany.com/lead-generation-in-japan/

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Feb 2026 | Initial documentation based on PolicyHub project |

---

## Using This Guide

### For New Japanese Brochure Projects

1. **Copy this document** as your starting reference
2. **Review the Quality Checklist** section before starting
3. **Follow the Implementation Workflow** step-by-step
4. **Reference the Tone Guidelines** during translation
5. **Use the Technical Implementation** sections for CSS/HTML
6. **Create a wireframe reference** for stakeholder review

### Customization Points

Adapt these based on your product/industry:

- **Color palette** (we used indigo/vermillion/gold - adjust for your brand)
- **CTA strategy** (資料請求 vs デモのご依頼 priority)
- **Terminology** (create your own glossary for product-specific terms)
- **Competitive positioning** (adjust "Why [Product] Wins" section)

### Getting Native Speaker Review

**Essential checkpoints for native reviewer:**

1. Does the tone sound like Japanese B2B SaaS? (not literal translation)
2. Are there any awkward phrases (翻訳調)?
3. Is the script balance appropriate (kanji/hiragana/katakana)?
4. Are the CTAs aligned with Japanese buyer expectations?
5. Does anything sound too aggressive or too weak?

---

## Conclusion

Japanese B2B marketing requires a fundamentally different approach from Western markets:

✅ **Modest confidence** over aggressive claims
✅ **"Request Documents"** over "Request Demo" (cultural preference)
✅ **Common challenges** over "fundamental problems"
✅ **Efficiency/improvement** over "transformation/revolution"
✅ **Natural Japanese** over literal translation
✅ **Proper text handling** to prevent mid-word breaks

This guide captures the approach that resulted in a professional, culturally-appropriate Japanese brochure for PolicyHub. Use it as a foundation and adapt based on your specific product and market needs.

---

**Questions or improvements?** Update this document as you learn from future projects.
