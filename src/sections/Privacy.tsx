import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './LegalCustom.css';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-wrapper-custom">
      <header className="legal-nav-custom">
        <Link to="/" className="legal-logo-custom">WebDev<span>Guru</span></Link>
        <Link to="/" className="legal-back-link-custom">Back to Home</Link>
      </header>

      <div className="page-hero-custom" data-watermark="PRIVACY">
        <div className="label-custom">Legal · Policy</div>
        <h1 className="hero-title-custom">Privacy Policy</h1>
        <div className="meta-custom">
          <div className="meta-item-custom">Effective Date <strong>January 1, 2025</strong></div>
          <div className="meta-item-custom">Last Updated <strong>May 2025</strong></div>
          <div className="meta-item-custom">Jurisdiction <strong>India (IT Act 2000)</strong></div>
        </div>
      </div>

      <div className="layout-custom">
        <nav className="toc-custom" aria-label="Table of contents">
          <div className="toc-title-custom">Contents</div>
          <ol>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#information-we-collect">Information We Collect</a></li>
            <li><a href="#how-we-use">How We Use Your Information</a></li>
            <li><a href="#data-sharing">Data Sharing</a></li>
            <li><a href="#cookies">Cookies &amp; Tracking</a></li>
            <li><a href="#data-retention">Data Retention</a></li>
            <li><a href="#your-rights">Your Rights</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#third-party">Third-Party Services</a></li>
            <li><a href="#children">Children's Privacy</a></li>
            <li><a href="#changes">Changes to Policy</a></li>
          </ol>
        </nav>

        <main className="content-custom">
          <section id="overview">
            <div className="section-number-custom">01 / Overview</div>
            <h2>Who We Are & What This Covers</h2>
            <p>WebDevGuru ("we", "our", "us") is a bespoke web design and development studio that builds conversion-focused digital experiences for D2C brands, SaaS companies, and high-growth businesses. We are based in India and operate under applicable Indian information technology and data protection law.</p>
            <div className="highlight-box-custom">
              <p>This Privacy Policy explains what personal data we collect when you visit <strong>webdevguru.tech</strong>, use our services, or contact us — and how we use, store, and protect it. By using our website, you agree to the practices described here.</p>
            </div>
          </section>

          <section id="information-we-collect">
            <div className="section-number-custom">02 / Data Collection</div>
            <h2>Information We Collect</h2>
            <p>We collect only what we need to deliver our services and improve your experience:</p>

            <table className="scenario-table-custom">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Examples</th>
                  <th>Source</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Contact Data</strong></td>
                  <td>Name, email address, phone number, company name</td>
                  <td>Contact form, scope call booking</td>
                </tr>
                <tr>
                  <td><strong>Project Data</strong></td>
                  <td>Business requirements, design preferences, goals</td>
                  <td>Discovery calls, onboarding forms</td>
                </tr>
                <tr>
                  <td><strong>Usage Data</strong></td>
                  <td>Pages visited, scroll depth, clicks, session duration</td>
                  <td>Analytics tools (PostHog/Plausible)</td>
                </tr>
                <tr>
                  <td><strong>Technical Data</strong></td>
                  <td>IP address, browser type, device type, OS</td>
                  <td>Automatically on site visit</td>
                </tr>
                <tr>
                  <td><strong>Communication Data</strong></td>
                  <td>Email threads, WhatsApp messages, call notes</td>
                  <td>Direct communication with our team</td>
                </tr>
              </tbody>
            </table>

            <p>We do <strong>not</strong> collect sensitive personal data such as financial credentials, government IDs, or biometric information through this website.</p>
          </section>

          <section id="how-we-use">
            <div className="section-number-custom">03 / Usage</div>
            <h2>How We Use Your Information</h2>
            <p>Your data is used strictly for legitimate business purposes:</p>
            <ul>
              <li>Responding to enquiries and scope call requests</li>
              <li>Delivering web design and development services you have engaged us for</li>
              <li>Sending project updates, invoices, and delivery communications</li>
              <li>Improving our website's performance and user experience based on analytics</li>
              <li>Running A/B tests on our hero and pricing sections to understand what resonates</li>
              <li>Complying with applicable legal obligations</li>
            </ul>
            <p>We do <strong>not</strong> use your data for automated decision-making, profiling, or selling to third-party advertisers.</p>
          </section>

          <section id="data-sharing">
            <div className="section-number-custom">04 / Sharing</div>
            <h2>Data Sharing &amp; Disclosure</h2>
            <p>We do not sell, rent, or trade your personal information. We share data only in these limited circumstances:</p>
            <ul>
              <li><strong>Service Providers:</strong> Tools like Formspree (contact forms), PostHog (analytics), Sanity (CMS), and Vercel (hosting) may process data on our behalf under their own privacy policies.</li>
              <li><strong>Legal Requirements:</strong> If required by law, court order, or government authority under Indian law (IT Act, 2000).</li>
              <li><strong>Business Transfer:</strong> In the event of a merger or acquisition, your data may transfer to the successor entity with equivalent protections.</li>
              <li><strong>With Your Consent:</strong> For any purpose not listed here, we will ask you explicitly.</li>
            </ul>
            <div className="highlight-box-custom">
              <p>All third-party vendors we use are selected for their privacy practices and are contractually bound to protect your data.</p>
            </div>
          </section>

          <section id="cookies">
            <div className="section-number-custom">05 / Cookies</div>
            <h2>Cookies &amp; Tracking Technologies</h2>
            <p>We use minimal, privacy-respecting tracking on our website:</p>

            <table className="scenario-table-custom">
              <thead>
                <tr>
                  <th>Cookie Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Essential</strong></td>
                  <td>Theme preference, locale selection</td>
                  <td>1 year (localStorage)</td>
                </tr>
                <tr>
                  <td><strong>Analytics</strong></td>
                  <td>Page views, session tracking (PostHog)</td>
                  <td>Session / 1 year</td>
                </tr>
                <tr>
                  <td><strong>Marketing</strong></td>
                  <td>UTM campaign attribution cookie</td>
                  <td>30 days</td>
                </tr>
              </tbody>
            </table>

            <p>You can disable non-essential cookies in your browser settings. This will not affect your ability to use our website, though some personalization features (like theme persistence) may reset.</p>
            <p>Read more about cookies on <Link to="/cookies">Cookie Policy</Link></p>
          </section>

          <section id="data-retention">
            <div className="section-number-custom">06 / Retention</div>
            <h2>Data Retention</h2>
            <p>We retain your personal data for as long as necessary to fulfil the purposes described above:</p>
            <ul>
              <li><strong>Contact enquiries:</strong> 2 years from last communication</li>
              <li><strong>Active client project data:</strong> Duration of engagement + 3 years</li>
              <li><strong>Analytics data:</strong> 12 months, then aggregated/anonymised</li>
              <li><strong>Legal records:</strong> As required by Indian tax and company law (typically 7 years)</li>
            </ul>
            <p>Once retention periods expire, data is securely deleted or anonymised.</p>
          </section>

          <section id="your-rights">
            <div className="section-number-custom">07 / Your Rights</div>
            <h2>Your Rights</h2>
            <p>Under Indian data protection principles and the IT Act, 2000 (and the forthcoming Digital Personal Data Protection Act, 2023), you have the right to:</p>
            <ul>
              <li><strong>Access</strong> — Request a copy of the personal data we hold about you</li>
              <li><strong>Correction</strong> — Ask us to correct inaccurate or incomplete data</li>
              <li><strong>Deletion</strong> — Request erasure of your data where we have no legal obligation to retain it</li>
              <li><strong>Objection</strong> — Object to processing of your data for analytics or marketing purposes</li>
              <li><strong>Portability</strong> — Receive your data in a structured, machine-readable format</li>
              <li><strong>Withdrawal of Consent</strong> — Withdraw consent for any non-essential processing at any time</li>
            </ul>
          </section>

          <section id="security">
            <div className="section-number-custom">08 / Security</div>
            <h2>Security Measures</h2>
            <p>We take reasonable technical and organisational measures to protect your data against unauthorised access, loss, or misuse:</p>
            <ul>
              <li>All data in transit is encrypted via HTTPS/TLS</li>
              <li>Our hosting infrastructure (Vercel) maintains SOC 2 compliance</li>
              <li>Access to client project data is restricted to authorised team members only</li>
              <li>Contact form submissions are transmitted via Formspree over encrypted connections</li>
              <li>We do not store payment credentials — all transactions are handled by third-party payment processors</li>
            </ul>
            <p>No method of transmission over the internet is 100% secure. In the unlikely event of a data breach affecting your rights, we will notify you as required by applicable law.</p>
          </section>

          <section id="third-party">
            <div className="section-number-custom">09 / Third Parties</div>
            <h2>Third-Party Services</h2>
            <p>Our website integrates with the following third-party services, each with their own privacy policy:</p>
            <ul>
              <li><strong>Vercel</strong> — Hosting and edge delivery (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener">Privacy Policy</a>)</li>
              <li><strong>Formspree</strong> — Contact form processing (<a href="https://formspree.io/legal/privacy-policy/" target="_blank" rel="noopener">Privacy Policy</a>)</li>
              <li><strong>PostHog</strong> — Product analytics (<a href="https://posthog.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>)</li>
              <li><strong>Sanity.io</strong> — Content management (<a href="https://www.sanity.io/legal/privacy" target="_blank" rel="noopener">Privacy Policy</a>)</li>
              <li><strong>Razorpay</strong> — Payment processing for client invoices (<a href="https://razorpay.com/privacy/" target="_blank" rel="noopener">Privacy Policy</a>)</li>
            </ul>
            <p>We are not responsible for the privacy practices of these services. We encourage you to review their policies.</p>
          </section>

          <section id="children">
            <div className="section-number-custom">10 / Children</div>
            <h2>Children's Privacy</h2>
            <p>WebDevGuru is a B2B service. Our website and services are not directed to individuals under the age of 18. We do not knowingly collect personal data from minors. If you believe a minor has submitted information to us, please contact us and we will delete it promptly.</p>
          </section>

          <section id="changes">
            <div className="section-number-custom">11 / Updates</div>
            <h2>Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time as our services evolve or regulations change. When we do:</p>
            <ul>
              <li>The "Last Updated" date at the top of this page will be revised</li>
              <li>For material changes, we will notify active clients via email</li>
              <li>Continued use of our website after updates constitutes acceptance of the revised policy</li>
            </ul>
            <p>We recommend reviewing this page periodically.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Privacy;
