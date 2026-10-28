// Refresh document URLs when publishing a new policy release.
const POLICY_RELEASE = '20261028';

const POLICY_DOCUMENTS = [
  {
    title: 'Academic Freedom and Free Intellectual Inquiry Policy',
    category: 'Academic', pages: 10, bytes: 239243,
    file: 'downloads/policies/Academic/Academic Freedom and Free Intellectual Inquiry Policy.pdf'
  },
  {
    title: 'Academic Quality Assurance Framework (AQAF)',
    category: 'Academic', pages: 12, bytes: 4219075,
    file: 'downloads/policies/Academic/Academic Quality Assurance Framework (AQAF).pdf'
  },
  {
    title: 'Academic Records Management Policy',
    category: 'Academic', pages: 6, bytes: 330992,
    file: 'downloads/policies/Academic/Academic Records Management Policy.pdf'
  },
  {
    title: 'Admission Policy & Procedure',
    category: 'Academic', pages: 10, bytes: 178682,
    file: 'downloads/policies/Academic/Admission Policy & Procedures.pdf'
  },
  {
    title: 'Assessment of English Language Proficiency Procedure',
    category: 'Academic', pages: 4, bytes: 91762,
    file: 'downloads/policies/Academic/Assessment of English Language Proficiency Procedure.pdf'
  },
  {
    title: 'Assessment Policy and Procedure',
    category: 'Academic', pages: 17, bytes: 451363,
    file: 'downloads/policies/Academic/Assessment Policy and Procedure.pdf'
  },
  {
    title: 'Course Progression Policy',
    category: 'Academic', pages: 10, bytes: 441791,
    file: 'downloads/policies/Academic/Course Progression Policy.pdf'
  },
  {
    title: 'Course Review Policy and Procedure',
    category: 'Academic', pages: 14, bytes: 430018,
    file: 'downloads/policies/Academic/Course Review Policy and Procedure.pdf'
  },
  {
    title: 'Credit Transfer and RPL Policy & Procedure',
    category: 'Academic', pages: 10, bytes: 314252,
    file: 'downloads/policies/Academic/Credit Transfer and RPL Policy & Procedure.pdf'
  },
  {
    title: 'Deferment, Suspension or Cancellation of Enrolment',
    category: 'Academic', pages: 7, bytes: 300020,
    file: 'downloads/policies/Academic/Deferment, Suspension or Cancellation of Enrolment.pdf'
  },
  {
    title: 'Generative Artificial Intelligence (GenAI) Policy',
    category: 'Academic', pages: 21, bytes: 4330090,
    file: 'downloads/policies/Academic/Generative Artificial Intelligence (GenAI) Policy.pdf'
  },
  {
    title: 'Graduation Policy and Procedure',
    category: 'Academic', pages: 14, bytes: 365039,
    file: 'downloads/policies/Academic/Graduation Policy and Procedure.pdf'
  },
  {
    title: 'IT Resources and Learning Systems Policy',
    category: 'Academic', pages: 6, bytes: 319779,
    file: 'downloads/policies/Academic/IT Resources and Learning Systems Policy.pdf'
  },
  {
    title: 'International Student Admission Addendum',
    category: 'Academic', pages: 6, bytes: 262481,
    file: 'downloads/policies/Academic/International Student Admission Addendum.pdf'
  },
  {
    title: 'Qualifications Equivalence Policy',
    category: 'Academic', pages: 5, bytes: 278805,
    file: 'downloads/policies/Academic/Qualifications Equivalence Policy.pdf'
  },
  {
    title: 'Student Academic Integrity and Honesty Policy and Procedure',
    category: 'Academic', pages: 7, bytes: 306115,
    file: 'downloads/policies/Academic/Student Academic Integrity and Honesty Policy and Procedure.pdf'
  },
  {
    title: 'TIIS Student Handbook',
    category: 'Academic', pages: 98, bytes: 2121272,
    file: 'downloads/handbooks/TIIS-Student-Handbook-2026.pdf'
  },
  {
    title: 'Conflict of Interest Policy',
    category: 'Management', pages: 7, bytes: 304149,
    file: 'downloads/policies/Management/Conflict of Interest Policy.pdf'
  },
  {
    title: 'Crisis Management Policy and Procedure',
    category: 'Management', pages: 6, bytes: 301530,
    file: 'downloads/policies/Management/Crisis Management Policy and Procedure.pdf'
  },
  {
    title: 'Critical Incident Management Policy and Procedure',
    category: 'Management', pages: 8, bytes: 168037,
    file: 'downloads/policies/Management/Critical Incident Management Policy.pdf'
  },
  {
    title: 'Data and Cyber Security Policy',
    category: 'Management', pages: 5, bytes: 110692,
    file: 'downloads/policies/Management/Data and Cyber Security Policy.pdf'
  },
  {
    title: 'Diversity and Equity Policy',
    category: 'Management', pages: 6, bytes: 290882,
    file: 'downloads/policies/Management/Diversity and Equity Policy.pdf'
  },
  {
    title: 'Marketing and Advertising Policy and Procedure',
    category: 'Management', pages: 9, bytes: 187711,
    file: 'downloads/policies/Management/Marketing and Advertising Policy and Procedure.pdf'
  },
  {
    title: 'Privacy Policy',
    category: 'Management', pages: 6, bytes: 364339,
    file: 'downloads/policies/Management/Privacy Policy.pdf'
  },
  {
    title: 'Refund Policy and Procedure',
    category: 'Management', pages: 9, bytes: 284347,
    file: 'downloads/fees/TIIS-Refund-Policy.pdf'
  },
  {
    title: 'Research Integrity Breach Management Procedure',
    category: 'Management', pages: 9, bytes: 291946,
    file: 'downloads/policies/Management/Research Integrity Breach Management Procedure.pdf'
  },
  {
    title: 'Sexual Harm Prevention and Response Policy',
    category: 'Management', pages: 6, bytes: 206873,
    file: 'downloads/policies/Management/Sexual Harm Prevention and Response Policy.pdf'
  },
  {
    title: 'Student Fees and Charges Policy',
    category: 'Management', pages: 6, bytes: 356013,
    file: 'downloads/policies/Management/Student Fees and Charges Policy.pdf'
  },
  {
    title: 'Student Safety and Security Procedure',
    category: 'Management', pages: 7, bytes: 188155,
    file: 'downloads/policies/Management/Student Safety and Security Procedure.pdf'
  },
  {
    title: 'Student Support & Wellbeing Policy',
    category: 'Management', pages: 7, bytes: 308540,
    file: 'downloads/policies/Management/Student Support & Wellbeing Policy.pdf'
  },
  {
    title: 'Students Complaint and Grievance Policy and Procedure',
    category: 'Management', pages: 11, bytes: 354034,
    file: 'downloads/policies/Management/Students Complaint and Grievance Policy.pdf'
  },
  {
    title: 'Tuition Fee Protection Policy and Procedure',
    category: 'Management', pages: 8, bytes: 179745,
    file: 'downloads/policies/Management/Tuition Fee Protection Policy and Procedure.pdf'
  },
  {
    title: 'Work Health and Safety (WHS) Policy',
    category: 'Management', pages: 6, bytes: 140053,
    file: 'downloads/policies/Management/Work Health and Safety (WHS) Policy.pdf'
  }
];

const policyList = document.getElementById('policyList');
const policySearch = document.getElementById('policySearch');
const policyCount = document.getElementById('policyResultCount');
const policyEmpty = document.getElementById('policyEmpty');
const policyReset = document.getElementById('policyReset');
const policyFilters = [...document.querySelectorAll('[data-policy-filter]')];
let activePolicyFilter = 'All';

function formatPolicySize(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${Math.round(bytes / 1024)} KB`;
}

function createPolicyIcon() {
  const icon = document.createElement('span');
  icon.className = 'policy-document__icon';
  icon.setAttribute('aria-hidden', 'true');
  icon.innerHTML = `
    <svg viewBox="0 0 40 48" fill="none">
      <path d="M7 1h17l9 9v34a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z" stroke="currentColor" stroke-width="1.5"/>
      <path d="M24 1v9h9" stroke="currentColor" stroke-width="1.5"/>
    </svg>
    <span>PDF</span>`;
  return icon;
}

function createPolicyRow(policy) {
  const fileUrl = `${policy.file}?v=${POLICY_RELEASE}`;
  const row = document.createElement('li');
  row.className = 'policy-document';

  const primary = document.createElement('div');
  primary.className = 'policy-document__primary';
  primary.appendChild(createPolicyIcon());

  const text = document.createElement('div');
  text.className = 'policy-document__text';

  const title = document.createElement('h3');
  title.className = 'policy-document__title';
  title.textContent = policy.title;

  const meta = document.createElement('p');
  meta.className = 'policy-document__meta';
  meta.textContent = `PDF · ${policy.pages} ${policy.pages === 1 ? 'page' : 'pages'} · ${formatPolicySize(policy.bytes)}`;
  text.append(title, meta);
  primary.appendChild(text);

  const category = document.createElement('span');
  category.className = 'policy-document__category';
  category.textContent = policy.category;

  const actions = document.createElement('div');
  actions.className = 'policy-document__actions';

  const view = document.createElement('a');
  view.className = 'policy-document__view';
  view.href = fileUrl;
  view.target = '_blank';
  view.rel = 'noopener';
  view.textContent = 'View';
  view.setAttribute('aria-label', `View ${policy.title}`);

  const download = document.createElement('a');
  download.className = 'policy-document__download';
  download.href = fileUrl;
  download.download = policy.file.split('/').pop();
  download.setAttribute('aria-label', `Download ${policy.title}`);
  download.innerHTML = `
    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M10 2v10"></path><path d="m6 8 4 4 4-4"></path><path d="M3 16h14"></path>
    </svg>
    <span>Download</span>`;

  actions.append(view, download);
  row.append(primary, category, actions);
  return row;
}

function renderPolicies() {
  const query = policySearch.value.trim().toLowerCase();
  const matches = POLICY_DOCUMENTS.filter(policy => {
    const categoryMatches = activePolicyFilter === 'All' || policy.category === activePolicyFilter;
    const textMatches = !query || `${policy.title} ${policy.category}`.toLowerCase().includes(query);
    return categoryMatches && textMatches;
  });

  policyList.replaceChildren(...matches.map(createPolicyRow));
  policyCount.textContent = `${matches.length} ${matches.length === 1 ? 'document' : 'documents'}`;
  policyList.hidden = matches.length === 0;
  policyEmpty.hidden = matches.length !== 0;
}

policyFilters.forEach(button => {
  button.addEventListener('click', () => {
    activePolicyFilter = button.dataset.policyFilter;
    policyFilters.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('is-active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    renderPolicies();
  });
});

policySearch.addEventListener('input', renderPolicies);

policyReset.addEventListener('click', () => {
  policySearch.value = '';
  activePolicyFilter = 'All';
  policyFilters.forEach(filter => {
    const selected = filter.dataset.policyFilter === 'All';
    filter.classList.toggle('is-active', selected);
    filter.setAttribute('aria-pressed', String(selected));
  });
  renderPolicies();
  policySearch.focus();
});

renderPolicies();
initPage('policies');
