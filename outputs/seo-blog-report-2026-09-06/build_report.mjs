import fs from 'node:fs/promises';
import path from 'node:path';
import { SpreadsheetFile, Workbook } from '@oai/artifact-tool';

const root = '/Users/themacintosh/Documents/My Files/Projects/seo Projects/nav';
const outputDir = path.join(root, 'outputs', 'seo-blog-report-2026-09-06');
const jsonPath = path.join(root, 'data', 'blogs.json');
const outputPath = path.join(outputDir, 'Navigator_Blog_SEO_Report_2026-09-06.xlsx');

const createdIds = [
  'immigration-consultant-dubai-consultation-checklist',
  'what-happens-first-immigration-consultation-dubai',
  'canada-pr-profile-assessment-dubai-crs-score',
  'australia-pr-skills-assessment-points-audit-dubai',
  'study-abroad-consultant-vs-immigration-consultant-dubai',
  'verify-europe-work-permit-job-offer-dubai',
  'student-visa-dubai-requirements-2026',
  'best-places-study-abroad-from-dubai-2026',
  'canada-visitor-business-visa-from-dubai-2026',
  'australia-national-innovation-visa-dubai-2026',
];

const updatedIds = [
  'uk-student-visa-requirements-2026',
  'study-abroad-from-uae-guide-2026',
];

const blogs = JSON.parse(await fs.readFile(jsonPath, 'utf8'));
const blogById = new Map(blogs.map((blog) => [blog.id, blog]));

function getBlog(id) {
  const blog = blogById.get(id);
  if (!blog) throw new Error(`Missing blog in source data: ${id}`);
  return blog;
}

function dateValue(date) {
  return date ? new Date(`${date}T00:00:00Z`) : null;
}

function joinValues(values) {
  return (values ?? []).join(', ');
}

function urlFor(blog) {
  return `https://navigatorglobals.com/immigration/blog/${blog.slug}`;
}

function internalTargets(blog) {
  return (blog.internalLinks ?? []).map((link) => `${link.anchor}: https://navigatorglobals.com${link.url}`).join('\n');
}

function sourceUrls(blog) {
  return (blog.authorityLinks ?? []).map((link) => `${link.label}: ${link.url}`).join('\n');
}

function createdRow(blog, number) {
  return [
    number,
    'Created',
    blog.title,
    urlFor(blog),
    blog.category,
    dateValue(blog.date),
    blog.seo?.focusKeyword ?? '',
    joinValues(blog.seo?.secondaryKeywords),
    blog.seoMeta?.intent ?? '',
    blog.seoMeta?.funnelStage ?? '',
    joinValues(blog.seoMeta?.geoTarget),
    blog.seoMeta?.pillarTopic ?? '',
    blog.seoMeta?.contentCluster ?? '',
    internalTargets(blog),
    sourceUrls(blog),
  ];
}

function updatedRow(blog, number) {
  const changes = blog.id === 'uk-student-visa-requirements-2026'
    ? 'Added Dubai-specific metadata keywords, Dubai application/status guidance, and an internal link to the main Dubai immigration consultant page.'
    : 'Added related links to the new Dubai student-visa and study-abroad guides so the existing UAE guide supports the new content cluster.';
  return [
    number,
    'Updated',
    blog.title,
    urlFor(blog),
    blog.category,
    dateValue(blog.date),
    blog.seo?.focusKeyword ?? '',
    joinValues(blog.seo?.secondaryKeywords),
    blog.seoMeta?.intent ?? '',
    changes,
    internalTargets(blog),
  ];
}

const workbook = Workbook.create();
const summary = workbook.worksheets.add('Summary');
const createdSheet = workbook.worksheets.add('Created Blogs');
const updatedSheet = workbook.worksheets.add('Updated Existing');

for (const sheet of [summary, createdSheet, updatedSheet]) {
  sheet.showGridLines = false;
}
summary.tabColor = '#1F4E78';
createdSheet.tabColor = '#2F75B5';
updatedSheet.tabColor = '#70AD47';

const navy = '#1F4E78';
const blue = '#D9EAF7';
const pale = '#F5F9FC';
const border = '#D9E2F3';
const dark = '#1F2937';
const muted = '#5B6573';

// Summary sheet
summary.getRange('A1:F1').merge();
summary.getRange('A1').values = [['Navigator Immigration Consultant']];
summary.getRange('A2:F2').merge();
summary.getRange('A2').values = [['Created and updated blog SEO report']];
summary.getRange('A3:F3').merge();
summary.getRange('A3').values = [['Scope: blog posts created or updated during the SEO content work; older existing posts are excluded.']];

summary.getRange('A5:B9').values = [
  ['Report field', 'Value'],
  ['Website domain', 'navigatorglobals.com'],
  ['Report date', dateValue('2026-09-06')],
  ['Created blog posts', null],
  ['Existing posts updated', null],
];
summary.getRange('B8').formulas = [["=COUNTA('Created Blogs'!$A$5:$A$14)"]];
summary.getRange('B9').formulas = [["=COUNTA('Updated Existing'!$A$5:$A$6)"]];

summary.getRange('D5:F9').values = [
  ['SEO implementation note', 'Value', 'Primary destination'],
  ['Main commercial target', 'Immigration consultant / immigration consultant Dubai', 'https://navigatorglobals.com/immigration-consultants-dubai'],
  ['Content purpose', 'Supportive long-tail coverage, topical relevance and qualified consultation traffic', 'https://navigatorglobals.com/contact'],
  ['Created content status', 'Indexable and followable in source JSON; FAQ-enabled Article schema flag set', 'https://navigatorglobals.com/immigration/blog'],
  ['Source of truth', 'data/blogs.json in the project', 'https://navigatorglobals.com/sitemap.xml'],
];

summary.getRange('A12:C12').values = [['Created blog themes', 'Post count', 'SEO purpose']];
summary.getRange('A13:C17').values = [
  ['Dubai immigration consultation and trust', 4, 'Support commercial intent and internal links to the Dubai consultant page'],
  ['Student visa and study abroad', 4, 'Capture student-visa and destination-comparison searches from Dubai/UAE'],
  ['Canada immigration and visitor/business visa', 2, 'Expand Canada topical coverage and conversion-oriented visa intent'],
  ['Australia immigration and talent migration', 2, 'Expand Australia route coverage and high-value specialist intent'],
  ['Europe work-permit safety', 1, 'Build trust around verification and scam-prevention search intent'],
];

summary.getRange('A20:F20').merge();
summary.getRange('A20').values = [['Research and source notes']];
summary.getRange('A21:F24').values = [
  ['Google Trends research', 'https://trends.google.com/trending?geo=AE', 'Use as a short-term signal; validate relevance and durability before publishing.', null, null, null],
  ['Google Trends comparison', 'https://trends.google.com/trends/explore?geo=AE&date=today%2012-m&q=student%20visa,study%20abroad,canada%20visa,australia%20visa,uk%20visa', 'UAE web-search comparison used for topic prioritisation.', null, null, null],
  ['Official source policy', 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content', 'Immigration guidance should be accurate, sourced and useful to the intended audience.', null, null, null],
  ['Report URL pattern', 'https://navigatorglobals.com/immigration/blog/{slug}', 'Generated from each blog slug in the project source data.', null, null, null],
];

// Created blogs sheet
const createdHeaders = [
  '#', 'Status', 'Blog title', 'URL', 'Category', 'Date', 'Primary keyword', 'Secondary keywords',
  'Intent', 'Funnel stage', 'Geo targets', 'Pillar topic', 'Content cluster', 'Internal link targets', 'Official source URLs',
];
createdSheet.getRange('A1:O1').merge();
createdSheet.getRange('A1').values = [['Blogs created for Navigator Immigration Consultant']];
createdSheet.getRange('A2:O2').merge();
createdSheet.getRange('A2').values = [['Domain: navigatorglobals.com | URLs use the live immigration blog route | Keyword fields are taken directly from data/blogs.json']];
createdSheet.getRange('A4:O4').values = [createdHeaders];
createdSheet.getRange(`A5:O${4 + createdIds.length}`).values = createdIds.map((id, i) => createdRow(getBlog(id), i + 1));

// Updated existing sheet
const updatedHeaders = ['#', 'Status', 'Blog title', 'URL', 'Category', 'Date', 'Primary keyword', 'Secondary keywords', 'Intent', 'Change made', 'Internal link targets'];
updatedSheet.getRange('A1:K1').merge();
updatedSheet.getRange('A1').values = [['Existing blog posts updated during the SEO content work']];
updatedSheet.getRange('A2:K2').merge();
updatedSheet.getRange('A2').values = [['These posts were not newly created; they were strengthened to support the new content cluster.']];
updatedSheet.getRange('A4:K4').values = [updatedHeaders];
updatedSheet.getRange(`A5:K${4 + updatedIds.length}`).values = updatedIds.map((id, i) => updatedRow(getBlog(id), i + 1));

function styleTitle(sheet, range) {
  const r = sheet.getRange(range);
  r.format = {
    font: { name: 'Arial', size: 16, bold: true, color: navy },
    verticalAlignment: 'center',
  };
  r.format.rowHeight = 28;
}

function styleSubtitle(sheet, range) {
  const r = sheet.getRange(range);
  r.format = {
    font: { name: 'Arial', size: 10, italic: true, color: muted },
    wrapText: true,
    verticalAlignment: 'center',
  };
  r.format.rowHeight = 30;
}

function styleHeader(sheet, range) {
  const r = sheet.getRange(range);
  r.format = {
    fill: navy,
    font: { name: 'Arial', size: 10, bold: true, color: '#FFFFFF' },
    horizontalAlignment: 'center',
    verticalAlignment: 'center',
    wrapText: true,
    borders: { preset: 'all', style: 'thin', color: '#FFFFFF' },
  };
  r.format.rowHeight = 32;
}

styleTitle(summary, 'A1:F1');
styleSubtitle(summary, 'A2:F2');
summary.getRange('A3:F3').format = { font: { name: 'Arial', size: 10, italic: true, color: muted }, wrapText: true, verticalAlignment: 'center' };
summary.getRange('A3:F3').format.rowHeight = 28;
styleTitle(createdSheet, 'A1:O1');
styleSubtitle(createdSheet, 'A2:O2');
styleTitle(updatedSheet, 'A1:K1');
styleSubtitle(updatedSheet, 'A2:K2');
styleHeader(summary, 'A5:B5');
styleHeader(summary, 'D5:F5');
styleHeader(summary, 'A12:C12');
styleHeader(createdSheet, 'A4:O4');
styleHeader(updatedSheet, 'A4:K4');

for (const sheet of [summary, createdSheet, updatedSheet]) {
  sheet.getUsedRange().format.font = { name: 'Arial', size: 10, color: dark };
}
// Restore title/header emphasis after the broad font assignment.
styleTitle(summary, 'A1:F1');
styleSubtitle(summary, 'A2:F2');
summary.getRange('A3:F3').format.font = { name: 'Arial', size: 10, italic: true, color: muted };
styleTitle(createdSheet, 'A1:O1');
styleSubtitle(createdSheet, 'A2:O2');
styleTitle(updatedSheet, 'A1:K1');
styleSubtitle(updatedSheet, 'A2:K2');
styleHeader(summary, 'A5:B5');
styleHeader(summary, 'D5:F5');
styleHeader(summary, 'A12:C12');
styleHeader(createdSheet, 'A4:O4');
styleHeader(updatedSheet, 'A4:K4');

summary.getRange('A6:F24').format = { wrapText: true, verticalAlignment: 'top' };
summary.getRange('A5:F24').format.borders = { insideHorizontal: { style: 'thin', color: border }, bottom: { style: 'thin', color: border } };
summary.getRange('A6:B9').format.fill = pale;
summary.getRange('D6:F9').format.fill = pale;
summary.getRange('A13:C17').format.fill = '#F8FBFD';
summary.getRange('A20:F20').format = { fill: blue, font: { name: 'Arial', size: 11, bold: true, color: navy }, verticalAlignment: 'center' };
summary.getRange('A21:F24').format = { wrapText: true, verticalAlignment: 'top', font: { name: 'Arial', size: 10, color: dark } };
summary.getRange('A21:F24').format.borders = { insideHorizontal: { style: 'thin', color: border } };
summary.getRange('B7').setNumberFormat('yyyy-mm-dd');
summary.getRange('B8:B9').setNumberFormat('0');

createdSheet.getRange(`A5:O${4 + createdIds.length}`).format = { wrapText: true, verticalAlignment: 'top', font: { name: 'Arial', size: 10, color: dark } };
createdSheet.getRange(`A5:O${4 + createdIds.length}`).format.borders = { insideHorizontal: { style: 'thin', color: border } };
createdSheet.getRange(`A5:O${4 + createdIds.length}`).format.fill = '#FFFFFF';
createdSheet.getRange(`A6:O${4 + createdIds.length}`).format.fill = '#F8FBFD';
createdSheet.getRange(`F5:F${4 + createdIds.length}`).setNumberFormat('yyyy-mm-dd');
createdSheet.getRange(`A5:A${4 + createdIds.length}`).format.horizontalAlignment = 'center';
createdSheet.getRange(`B5:B${4 + createdIds.length}`).format.horizontalAlignment = 'center';

updatedSheet.getRange(`A5:K${4 + updatedIds.length}`).format = { wrapText: true, verticalAlignment: 'top', font: { name: 'Arial', size: 10, color: dark } };
updatedSheet.getRange(`A5:K${4 + updatedIds.length}`).format.borders = { insideHorizontal: { style: 'thin', color: border } };
updatedSheet.getRange(`A5:K${4 + updatedIds.length}`).format.fill = '#FFFFFF';
updatedSheet.getRange('A6:K6').format.fill = '#F8FBFD';
updatedSheet.getRange('F5:F6').setNumberFormat('yyyy-mm-dd');
updatedSheet.getRange('A5:B6').format.horizontalAlignment = 'center';

const summaryWidths = { A: 24, B: 68, C: 68, D: 25, E: 68, F: 64 };
for (const [col, width] of Object.entries(summaryWidths)) summary.getRange(`${col}1:${col}24`).format.columnWidth = width;
const createdWidths = { A: 5, B: 10, C: 46, D: 62, E: 20, F: 12, G: 30, H: 52, I: 14, J: 14, K: 42, L: 24, M: 30, N: 60, O: 68 };
for (const [col, width] of Object.entries(createdWidths)) createdSheet.getRange(`${col}1:${col}${4 + createdIds.length}`).format.columnWidth = width;
const updatedWidths = { A: 5, B: 10, C: 46, D: 62, E: 20, F: 12, G: 30, H: 52, I: 14, J: 78, K: 60 };
for (const [col, width] of Object.entries(updatedWidths)) updatedSheet.getRange(`${col}1:${col}${4 + updatedIds.length}`).format.columnWidth = width;

summary.freezePanes.freezeRows(5);
createdSheet.freezePanes.freezeRows(4);
updatedSheet.freezePanes.freezeRows(4);

const createdTable = createdSheet.tables.add(`A4:O${4 + createdIds.length}`, true, 'CreatedBlogsTable');
createdTable.style = 'TableStyleMedium2';
const updatedTable = updatedSheet.tables.add(`A4:K${4 + updatedIds.length}`, true, 'UpdatedBlogsTable');
updatedTable.style = 'TableStyleMedium4';

await fs.mkdir(outputDir, { recursive: true });
const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);

const summaryCheck = await workbook.inspect({
  kind: 'table',
  range: 'Summary!A1:F24',
  include: 'values,formulas',
  tableMaxRows: 24,
  tableMaxCols: 6,
  tableMaxCellChars: 120,
});
console.log(summaryCheck.ndjson);

const createdCheck = await workbook.inspect({
  kind: 'table',
  range: `Created Blogs!A4:O${4 + createdIds.length}`,
  include: 'values,formulas',
  tableMaxRows: 14,
  tableMaxCols: 15,
  tableMaxCellChars: 120,
});
console.log(createdCheck.ndjson);

const errors = await workbook.inspect({
  kind: 'match',
  searchTerm: '#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',
  options: { useRegex: true, maxResults: 100 },
  summary: 'final formula error scan',
});
console.log(errors.ndjson);

for (const sheetName of ['Summary', 'Created Blogs', 'Updated Existing']) {
  const preview = await workbook.render({ sheetName, autoCrop: 'all', scale: 1, format: 'png' });
  await fs.writeFile(path.join(outputDir, `${sheetName.replaceAll(' ', '_')}.png`), new Uint8Array(await preview.arrayBuffer()));
}

console.log(`Saved ${outputPath}`);
