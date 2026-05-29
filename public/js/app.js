// SPA Views Dictionary containing clean, advanced v2.0 content states
const views = {
    home: `
        <section class="hero-section">
            <h2>Welcome to Aegis Cyber 2.0</h2>
            <p>Securing your digital footprint with dynamic enterprise-grade defensive solutions.</p>
            <div class="pulse-circle"></div>
        </section>
        <section class="services-grid">
            <div class="service-card">
                <h3>Threat Monitoring</h3>
                <p>Real-time analytics and attack vector identification keeping databases safe.</p>
            </div>
            <div class="service-card">
                <h3>Incident Reporting</h3>
                <p>Crowdsourced indicators of compromise directly feeding security metrics.</p>
            </div>
        </section>
    `,
    attacks: `
        <section class="page-header">
            <h2>Cyber Attack Vectors Matrix</h2>
            <p>In-depth analytical reference sheets for common digital system exploitation vectors.</p>
        </section>
        <div class="accordion-container">
            <div class="accordion-item">
                <button class="accordion-header">1. Malware & Ransomware Attacks</button>
                <div class="accordion-panel">
                    <p>Malware (malicious software) encompasses viruses, worms, and trojans engineered to compromise confidentiality or availability. Ransomware specifically encrypts local storage volumes using advanced cryptography (like AES-256), completely withholding decryption keys until financial extortions are paid via anonymous blockchain assets.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">2. Advanced Phishing & Social Engineering</button>
                <div class="accordion-panel">
                    <p>Phishing manipulates human psychology rather than technical flaws. Attackers construct deceptive electronic messaging campaigns mimicking trusted systems (banks, administrative heads) to compromise identity assets, harvest plaintext credentials, or trick personnel into executing toxic payloads.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">3. SQL Injection (SQLi)</button>
                <div class="accordion-panel">
                    <p>SQL Injection vulnerabilities trigger when unvalidated inputs are passed straight down into relational database engines. Attackers insert raw SQL syntax parameters inside application data fields, tricking backend queries into bypassing credential tables, altering critical storage cells, or exfiltrating complete customer structural databases.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">4. Distributed Denial of Service (DDoS)</button>
                <div class="accordion-panel">
                    <p>DDoS coordinates large malicious botnet grids (compromised IoT electronics or server nodes) to simultaneously target network interfaces with excess traffic (like UDP/TCP flooding). This exhausts server processing memory and bandwidth resources, rendering critical corporate portals inaccessible to authentic traffic networks.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">5. Password & Brute-Force Attacks</button>
                <div class="accordion-panel">
                    <p>Password exploitation exploits basic authorization parameters via automated cryptographic processing systems. These mechanisms deploy systematic "dictionary arrays" containing billions of credential strings or cross-reference historical database leaks to forcefully guess authorization codes and break system security layer parameters.</p>
                </div>
            </div>
            <div class="accordion-item">
                <button class="accordion-header">6. Insider Threats</button>
                <div class="accordion-panel">
                    <p>An insider threat occurs when active or former corporate employees, third-party network contractors, or institutional partners use authentic high-level authorization accounts to compromise infrastructure assets, steal source documentation data, or intentionally breach processing controls from inside perimeter barriers.</p>
                </div>
            </div>
        </div>
    `,
    incidents: `
        <section class="page-header">
            <h2>Live Incident Feed</h2>
            <p>Real-world instances of digital security breaches reported globally and locally.</p>
        </section>
        <div class="incidents-layout">
            <div class="incidents-list" id="dynamic-incidents">
                <p class="loading-text">Synchronizing records with secure ledger...</p>
            </div>
            <div class="action-sidebar">
                <h3>Have you witnessed cyber fraud?</h3>
                <p>Contribute to public awareness and protect others by filing an incident narrative record.</p>
                <button class="btn-primary" id="btn-go-form">File Incident Report</button>
            </div>
        </div>
    `,
    form: `
        <section class="form-container">
            <h2>Submit Incident Case Study</h2>
            <form id="incident-submission-form">
                <div class="input-group">
                    <label>Reporter Identity / Pseudonym</label>
                    <input type="text" id="form-name" required placeholder="Enter name or 'Anonymous'">
                </div>
                <div class="input-row">
                    <div class="input-group">
                        <label>Age</label>
                        <input type="number" id="form-age" required min="1" max="120">
                    </div>
                    <div class="input-group">
                        <label>Secure Contact Email</label>
                        <input type="email" id="form-email" required placeholder="name@domain.com">
                    </div>
                </div>
                <div class="input-group">
                    <label>Incident Timeline & Narrative</label>
                    <textarea id="form-story" required placeholder="Please describe exactly what happened, step by step..."></textarea>
                </div>
                <div class="radio-group">
                    <label>Was an official law enforcement report filled?</label>
                    <div class="radio-options">
                        <label><input type="radio" name="report" value="true"> Yes</label>
                        <label><input type="radio" name="report" value="false" checked> No</label>
                    </div>
                </div>
                <button type="submit" class="btn-submit">Log Incident Record</button>
            </form>
        </section>
    `,
    initiatives: `
        <section class="page-header">
            <h2>Government Frameworks</h2>
            <p>Official infrastructure resources allocated towards defending digital infrastructure and processing crime logs.</p>
        </section>
        <div class="gov-grid">
            <div class="gov-card">
                <h3>National Cyber Crime Reporting Portal</h3>
                <p>An official gateway facilitating centralized reporting targeting specialized crimes, financial cyber frauds, and incidents impacting protected demographics.</p>
                <a href="https://cybercrime.gov.in/" target="_blank" class="external-link-btn">Access Cyber Crime Portal</a>
            </div>
            <div class="gov-card">
                <h3>Indian Cybercrime Coordination Centre (I4C)</h3>
                <p>Initiated under the Ministry of Home Affairs to build integrated operational capacity, optimizing frameworks between inter-state Law Enforcement Agencies.</p>
                <a href="https://i4c.mha.gov.in/index.aspx" target="_blank" class="external-link-btn">Verify I4C Protocols</a>
            </div>
        </div>
    `,
    contact: `
        <section class="page-header">
            <h2>Operational Command Center</h2>
            <p>Get in touch with Aegis Cyber response pipelines, support infrastructure channels, or local threat assessment facilities.</p>
        </section>
        
        <div class="services-grid">
            <div class="service-card contact-card-enhanced">
                <div class="card-meta">SECURE INTERCOM</div>
                <h3>Electronic Mail</h3>
                <p style="color: var(--primary-glow); font-family: monospace; font-size: 1.1rem; margin-top: 1rem;">aegis.cyber2024@gmail.com</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-muted);">Encrypted inbox active for situational telemetry drops and support communications.</p>
            </div>
            
            <div class="service-card contact-card-enhanced">
                <div class="card-meta">EMERGENCY HOTLINE</div>
                <h3>Hotline Response</h3>
                <p style="color: var(--primary-glow); font-family: monospace; font-size: 1.1rem; margin-top: 1rem;">+91 - 93266 99546</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-muted);">Incident response center answering telemetric diagnostic reports 24 hours a day.</p>
            </div>
            
            <div class="service-card contact-card-enhanced">
                <div class="card-meta">REGIONAL DOMAIN</div>
                <h3>Operational Hubs</h3>
                <p style="color: var(--text-main); font-weight: 600; margin-top: 1rem;">Kurla / Thane / Kalyan Laboratories</p>
                <p style="font-size: 0.9rem; margin-top: 0.5rem; color: var(--text-muted);">Active research nodes monitoring anomalies across district zones.</p>
            </div>
        </div>
    `,
    about: `
        <section class="about-card">
            <h2>About Aegis Cyber Team</h2>
            <p>Our core mission focuses on provisioning actionable situational threat analysis to consumers and industrial structures alike.</p>
            
            <h3>Lead Cyber Analyst</h3>
            <ul class="team-list">
                <li><strong>Radhika Gupta</strong> — Project Developer / Designer / Analyst </li>
            </ul>
            
            <p class="institution-tag" style="margin-top: 2rem;">Aegis Cyber</p>
        </section>
    `,
    terms: `
        <section class="terms-card">
            <h2>System Protocols & User Terms</h2>
            <ol>
                <li><strong>Data Authentication:</strong> Submitting malicious false telemetry strings, tracking injection sequences, or executing fuzzing cycles will terminate user endpoints.</li>
                <li><strong>Data Protection:</strong> Any case data verified on our platform uses zero-knowledge metadata scrubbers to protect civilian classifications.</li>
            </ol>
        </section>
    `
};

const appView = document.getElementById('app-view');

function navigateTo(targetView) {
    if (!views[targetView]) return;

    appView.innerHTML = views[targetView];
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-target') === targetView);
    });

    initPageInteractions(targetView);
}

document.body.addEventListener('click', (e) => {
    const link = e.target.closest('[data-target]');
    if (link) {
        e.preventDefault();
        const target = link.getAttribute('data-target');
        navigateTo(target);
    }
});

function initPageInteractions(viewName) {
    if (viewName === 'attacks') {
        const accordions = document.querySelectorAll('.accordion-header');
        accordions.forEach(btn => {
            btn.addEventListener('click', function() {
                this.classList.toggle('open');
                const panel = this.nextElementSibling;
                panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
            });
        });
    }

    if (viewName === 'incidents') {
        loadDynamicIncidents();
        
        document.getElementById('btn-go-form').addEventListener('click', () => {
            navigateTo('form');
        });
    }

    if (viewName === 'form') {
        document.getElementById('incident-submission-form').addEventListener('submit', handleFormSubmit);
    }
}

async function loadDynamicIncidents() {
    const listContainer = document.getElementById('dynamic-incidents');
    if(!listContainer) return;
    try {
        const res = await fetch('/api/incidents');
        const data = await res.json();
        
        if (!data || data.length === 0) {
            listContainer.innerHTML = '<p class="empty-msg">No verified threat instances registered on system files.</p>';
            return;
        }

        listContainer.innerHTML = data.map(item => `
            <div class="incident-feed-card">
                <div class="card-meta">Case ID Reference #${item._id.slice(-6).toUpperCase()}</div>
                <p class="card-narrative">"${escapeHTML(item.story)}"</p>
                <div class="card-badge-row">
                    <span class="badge">Age: ${item.age}</span>
                    <span class="badge status-${item.reportedToAuthorities}">Report Filed: ${item.reportedToAuthorities ? 'Yes' : 'No'}</span>
                </div>
            </div>
        `).join('');
    } catch (err) {
        listContainer.innerHTML = '<p class="error-msg">Failed to retrieve records. Core service is isolated.</p>';
    }
}

async function handleFormSubmit(e) {
    e.preventDefault();
    
    const payload = {
        name: document.getElementById('form-name').value,
        age: parseInt(document.getElementById('form-age').value),
        email: document.getElementById('form-email').value,
        story: document.getElementById('form-story').value,
        reportedToAuthorities: document.querySelector('input[name="report"]:checked').value === 'true'
    };

    try {
        const response = await fetch('/api/incidents', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            alert("Incident securely logged to Database cluster.");
            navigateTo('incidents'); 
        } else {
            alert("Database rejection parameter triggered.");
        }
    } catch (err) {
        console.error("Transmission error:", err);
    }
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

navigateTo('home');